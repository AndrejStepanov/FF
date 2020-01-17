<template>
	<c-app :curentSystem="$vuetify.lang.t('$vuetify.texts.main.links.objWork.name')" :panelLeft="{show:true}"  :mainPanelConfig="mainPanelConfig">
		<template v-slot:panelLeft>
			<div class='display--flex flex-direction--column max-height'>
				<v-text-field id="treeSearch" name="treeSearch" class="check-size flex--inherit" append-icon="search" v-model="treeSearch"  single-line :label="$vuetify.lang.t('$vuetify.texts.simple.actions.search')" @keyup.enter="treeSearchSubmit"/>
				<v-btn block  small class="check-size accent flex--inherit" @click="openDialog(dialogsConfig.treeAdd.id)" > <v-icon>add</v-icon> {{ $vuetify.lang.t('$vuetify.texts.simple.actions.add') }}</v-btn>
				<hr>
				<v-responsive class="overflow-y-auto flex--99" width = '100%'>
					<c-tree @item-click = "itemClick" textFieldName="tree_name" typeFieldName="tree_group"  socetHref="/socet_command" socetEvent="object.tree.by.root" socetChanel="channel.ObjTreeData" :iconDic="iconDic" app />
				</v-responsive>
			</div>
		</template>
		<template v-slot:dialogs>
			<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
		</template>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
	import CTree from '../components/tree/c-tree'
	export default {
		data: () => ({
			treeSearch: '',
			iconDic:{'misc':'photo_library', 'object':'description', 'filter':'filter_list', 'filter':'filter_list', 'input':'input', 'default':'folder_open',  },		
			dialogsConfig: {
				treeAdd:{
					id: getNewId(),  title:"$vuetify.texts.modals.treeAdd.title", module:'m-input-fields', 
					params:{ socetHref:"/data_command", socetEvent:"object.tree.add", treeId:{value:0}, }, 
				},
			},
			mainPanelConfig: {  name: 'first',   width:'100%',	height:'100%',  layout: 'vertical' },
		}),
		components: {
			CTree,
			MInputFields: (resolve) =>{ require(['../modules/m-input-fields.vue'], resolve) },
		},
		mixins: [
			XApp,XStore,XDialog,
		],
		methods: {
			itemClick(node) {
				this.dialogsConfig.treeAdd.params.treeId.value = node.model.id;
			},
			treeSearchSubmit () {
				console.log(this.treeSearch);
				return;
			},
			openDialog(dialogId){
				let vm=this
				switch(dialogId){
					case vm.dialogsConfig.treeAdd.id: 					
						vm.dialogSetParamByName({id:dialogId, params:{treeId: vm.dialogsConfig.treeAdd.params.treeId, checkFunc:vm.objectTreeAddCheck}}  )
						break
					default: showMsg( getErrDesc('withOpenDialog') );
				}
				vm.dialogShow(dialogId)
			},
			objectTreeAddCheck(params){
				let vm=this
				if(params.obj_level.value=='inside' && nvlo(params.treeId)==0  )
					showMsg(getErrDesc('withAddNestElem') );
			},
		},
		created: function (){
			let vm=this
		},
	}
</script>

<style lang="scss">
	div.tree div.tree-selected,
	div.tree div.tree-hovered 	{color:black;}
	div.tree-border-top        	{border-top-width: 1px;     border-top-style: inset;    border-top-color: #c7c7c7;}
</style>