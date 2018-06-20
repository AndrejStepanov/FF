<template>
	<k-loading v-if="tree_loading"/>
	<div  v-else :class="classes" role="tree" onselectstart="return false">
		<ul :class="containerClasses" role="group">
			<tree-item v-for="(child, index) in data"
					   :key="index"
					   :data="child"
					   :text-field-name="textFieldName"
					   :value-field-name="valueFieldName"
					   :children-field-name="childrenFieldName"
					   :item-events="itemEvents"
					   :whole-row="wholeRow"
					   :show-checkbox="showCheckbox"
					   :allow-transition="allowTransition"
					   :height="sizeHeight"
					   :parent-item="data"
					   :draggable="draggable"
					   :drag-over-background-color="dragOverBackgroundColor"
					   :on-item-click="onItemClick"
					   :on-item-toggle="onItemToggle"
					   :on-item-drag-start="onItemDragStart"
					   :on-item-drag-end="onItemDragEnd"
					   :on-item-drop="onItemDrop"
					   :klass="index === data.length-1?'tree-last':''">
				<template slot-scope="_">
					<slot :vm="_.vm" :model="_.model">
						<i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
						<span v-html="_.model[textFieldName]"></span>
					</slot>
				</template>
			</tree-item>
		</ul>
	</div>
</template>
<script>
	import TreeItem from './tree-item.vue'
	import KLoading from '../k-loading';

	let ITEM_ID = 0
	let ITEM_HEIGHT_SMALL = 18
	let ITEM_HEIGHT_DEFAULT = 24
	let ITEM_HEIGHT_LARGE = 32

	export default {
		name: 'VJstree',
		props: {
			data: {type: Array},
			size: {type: String, validator: value => ['large', 'small'].indexOf(value) > -1},
			showCheckbox: {type: Boolean, default: false},
			wholeRow: {type: Boolean, default: false},
			noDots: {type: Boolean, default: false},
			collapse: {type: Boolean, default: false},
			multiple: {type: Boolean, default: false},
			allowBatch: {type: Boolean, default: false},
			allowTransition: {type: Boolean, default: true},
			textFieldName: {type: String, default: 'text'},
			valueFieldName: {type: String, default: 'value'},
			socetEvent: {type: String, default: ''},
			socetChanel: {type: String, default: ''},
			socetHref: {type: String, default: ''},
			childrenFieldName: {type: String, default: 'children'},
			itemEvents: {
				type: Object, default: function () {
					return {}
				}
			},
			async: {type: Function},
			loadingText: {type: String, default: 'Loading...'},
			draggable: {type: Boolean, default: false},
			dragOverBackgroundColor: {type: String, default: "#C9FDC9"},
			klass: String
		},
		data() {
			return {
				tree_loading: true,
				draggedItem: undefined,
				draggedElm: undefined
			}
		},
		computed: {
			classes() {
				return [
					{'tree': true},
					{'tree-default': !this.size},
					{[`tree-default-${this.size}`]: !!this.size},
					{'tree-checkbox-selection': !!this.showCheckbox},
					{[this.klass]: !!this.klass}
				]
			},
			containerClasses() {
				return [
					{'tree-container-ul': true},
					{'tree-children': true},
					{'tree-wholerow-ul': !!this.wholeRow},
					{'tree-no-dots': !!this.noDots}
				]
			},
			sizeHeight() {
				switch (this.size) {
					case 'large':
						return ITEM_HEIGHT_LARGE
					case 'small':
						return ITEM_HEIGHT_SMALL
					default:
						return ITEM_HEIGHT_DEFAULT
				}
			}
		},
		methods: {
			initializeData(items) {
				if (items && items.length > 0) 
					for (let i in items) {
						if(items[i].addBefore ) 
							continue;
						var dataItem = this.initializeDataItem(items[i])
						items[i] = dataItem
						this.initializeData(items[i][this.childrenFieldName])
					}
			},
			initializeDataItem(item) {
				function Model(item, textFieldName, valueFieldName, childrenFieldName, collapse) {
					this.id = item.id || ITEM_ID++
					this[textFieldName] = item[textFieldName] || ''
					this[valueFieldName] = item[valueFieldName] || item[textFieldName]
					this.icon = item.icon || ''
					this.opened = item.opened || collapse
					this.selected = item.selected || false
					this.disabled = item.disabled || false
					this.loading = item.loading || false
					this.childLoaded = item.loading || false
					this.hasChild = item.hasChild || false
					this[childrenFieldName] = item[childrenFieldName] || []
				}

				let node = Object.assign(new Model(item, this.textFieldName, this.valueFieldName, this.childrenFieldName, this.collapse), item)
				let vm = this
				node.addBefore = function (data, selectedNode) {
					let newItem = vm.initializeDataItem(data)
					let index = selectedNode.parentItem.findIndex(t => t.id === node.id)
					selectedNode.parentItem.splice(index, 0, newItem)
				}
				node.addAfter = function (data, selectedNode) {
					let newItem = vm.initializeDataItem(data)
					let index = selectedNode.parentItem.findIndex(t => t.id === node.id) + 1
					selectedNode.parentItem.splice(index, 0, newItem)
				}
				node.addChild = function (data) {
					let newItem = vm.initializeDataItem(data)
					node.opened = true
					node[vm.childrenFieldName].push(newItem)
				}
				node.openChildren = function () {
					node.opened = true
					vm.handleRecursionNodeChildren(node, node => { node.opened = true })
				}
				node.closeChildren = function () {
					node.opened = false
					vm.handleRecursionNodeChildren(node, node => { node.opened = false })
				}
				return node
			},
			initializeLoading() {
				var item = {}
				item[this.textFieldName] = this.loadingText
				item.disabled = item.loading = true
				return this.initializeDataItem(item)
			},
			handleRecursionNodeChilds(node, func) {
				if (func(node) !== false && node.$children && node.$children.length > 0)
					for (let childNode of node.$children) 
						if (!childNode.disabled) 
							this.handleRecursionNodeChilds(childNode, func)
			},
			handleRecursionNodeChildren(node, func) {
				if (func(node) !== false && node[this.childrenFieldName] && node[this.childrenFieldName].length > 0) 
					for (let childNode of node[this.childrenFieldName]) 
						this.handleRecursionNodeChildren(childNode, func)    
			},
			recursionSearchNode(node, searchId) {
				if(node.id==searchId)
					return node;
				let res = null;
				if (node[this.childrenFieldName] && node[this.childrenFieldName].length > 0)
					for (let childNode of node[this.childrenFieldName])
						res= this.recursionSearchNode(childNode, searchId)||null;
				return res;
			},
			onItemClick(oriNode, oriItem, e) {
				var vm = this;
				if (vm.multiple) {
					if (vm.allowBatch) 
						vm.handleBatchSelectItems(oriNode, oriItem)
				}
				else 
					vm.handleSingleSelectItems(oriNode, oriItem)
				vm.handleRequestChildren(oriNode)
				vm.$emit('item-click', oriNode, oriItem, e)
			},
			handleSingleSelectItems(oriNode, oriItem) {
				this.handleRecursionNodeChilds(this, node => {
					if (node.model) 
						node.model.selected = false
				})
				oriNode.model.selected = true
			},
			handleBatchSelectItems(oriNode, oriItem) {
				this.handleRecursionNodeChilds(oriNode, node => {
					if (node.model.disabled) 
						return
					node.model.selected = oriNode.model.selected
				})
			},
			onItemToggle(oriNode, oriItem, e) {
				if (oriNode.model.opened) 
					this.handleAsyncLoad(oriNode.model[this.childrenFieldName], oriNode, oriItem)
				this.$emit('item-toggle', oriNode, oriItem, e)
			},
			handleAsyncLoad(oriParent, oriNode, oriItem) {
				var vm = this;
				if(vm.socetHref!='' &&  vm.socetEvent!='')
					vm.handleRequestChildren(oriNode)
				else if (vm.async && oriParent[0].loading) {
					vm.async(oriNode, (data) => {
						if (data.length > 0)
							for (let i in data) {
								if (!data[i].isLeaf && typeof data[i][vm.childrenFieldName] !== "object") 
									data[i][vm.childrenFieldName] = [vm.initializeLoading()]
								var dataItem = vm.initializeDataItem(data[i])
								vm.$set(oriParent, i, dataItem)
							}
						else 
							oriNode.model[vm.childrenFieldName] = []
					})
				}
			},
			handleRequestChildren(oriNode){
				var vm = this;
				if(!oriNode.model.childLoaded && oriNode.model.hasChild ){
					window._Vue.axios.post( vm.socetHref, {
							type: vm.socetEvent ,
							_token: window.Laravel.csrfToken,
							parent_id: oriNode.model.id,
						}).catch(
							(error) => vm.$root.$emit('show-message', {title:'Ошибка запроса данных',text:'Запросить данные не удалось!', status:error.response.status})
						);
					oriNode.model.loading= true;
				}
			},
			onItemDragStart(e, oriNode, oriItem) {
				if (!this.draggable || oriItem.dragDisabled)
					return false
				e.dataTransfer.effectAllowed = "move"
				e.dataTransfer.setData('text', null)
				this.draggedElm = e.target
				this.draggedItem = {
					item: oriItem,
					parentItem: oriNode.parentItem,
					index: oriNode.parentItem.findIndex(t => t.id === oriItem.id)
				}
				this.$emit("item-drag-start", oriNode, oriItem, e)
			},
			onItemDragEnd(e, oriNode, oriItem) {
				this.draggedItem = this.draggedElm = undefined
				this.$emit("item-drag-end", oriNode, oriItem, e)
			},
			onItemDrop(e, oriNode, oriItem) {
				if (!this.draggable || !!oriItem.dropDisabled)
					return false
				this.$emit("item-drop-before", oriNode, oriItem, !this.draggedItem ? undefined : this.draggedItem.item, e)
				if (!this.draggedElm || this.draggedElm === e.target || this.draggedElm.contains(e.target)) 
					return
				if (this.draggedItem) {
					if (this.draggedItem.parentItem === oriItem[this.childrenFieldName]
							|| this.draggedItem.item === oriItem
							|| (oriItem[this.childrenFieldName] && oriItem[this.childrenFieldName].findIndex(t => t.id === this.draggedItem.item.id) !== -1)) 
						return;
					if (!!oriItem[this.childrenFieldName]) 
						oriItem[this.childrenFieldName].push(this.draggedItem.item)
					else 
						oriItem[this.childrenFieldName] = [this.draggedItem.item]
					
					oriItem.opened = true
					var draggedItem = this.draggedItem
					this.$nextTick(() => {
						draggedItem.parentItem.splice(draggedItem.index, 1)
					})
					this.$emit("item-drop", oriNode, oriItem, draggedItem.item, e)
				}
			}
		},
		created() {
			let vm = this;
			if(vm.socetChanel=='' || vm.socetHref=='' || vm.socetEvent=='')
				vm.initializeData(vm.data)
			else {
				window.Echo.channel(vm.socetChanel).listen('.'+vm.socetEvent, (e) => {
					//vm.tree_loading=true;
					let recive=JSON.parse(e.data);
					let parent_id = recive[0].parent_id, parent_node=null, parent_childrens =null;
					vm.data.forEach((node)=> parent_node=vm.recursionSearchNode(node, parent_id)||parent_node);
					if(parent_id==null)
						parent_node=parent_childrens = vm.data;
					if(parent_node==null)
						return;
					if(parent_id!=null)
						parent_childrens=parent_node[vm.childrenFieldName];
					parent_childrens.forEach((node ) => node.is_save=0);
					recive.forEach((item )=>{
						item.is_check=0;
						parent_childrens.forEach((node ) =>{
							if(item.id==node.id){
								node[vm.textFieldName ] = item[vm.textFieldName];
								node.hasChild=item.hasChild;
								node.is_save=1;
								item.is_check=1;
							}
						})
					});
					parent_childrens.forEach((node, i ) => {if(node.is_save==0) parent_childrens.splice(i,1)	});
					recive.forEach((item, i ) => {if(item.is_check==0) parent_childrens.push(item) });
					parent_childrens.sort(function (a, b) {
						if (a[vm.textFieldName] > b[vm.textFieldName]) 
							return 1;
						if (a[vm.textFieldName] < b[vm.textFieldName]) 
							return -1;
						// a должно быть равным b
						return 0;
					});
					parent_node.loading = false;
					parent_node.childLoaded= true;
					vm.initializeData(parent_childrens)
					vm.tree_loading=false;
				});
				window._Vue.axios.post(vm.socetHref, {
					type: vm.socetEvent,
					_token: window.Laravel.csrfToken
				}).catch(
					(error) => vm.$root.$emit('show-message', {title:'Ошибка запроса данных',text:'Запросить данные не удалось!', status:error.response.status})
				);
			}	
		},
		mounted() {
			if (this.async) {
				this.$set(this.data, 0, this.initializeLoading())
				this.handleAsyncLoad(this.data, this)
			}
		},
		components: {
			KLoading,
			TreeItem,
		}
	}
</script>
<style lang="less">
	@import "./less/style";
</style>
