<template>
	<c-app curentSystem="Работа с объектами" :panelLeftShow="true" :panelLeftDrawer="true" panelLeftClass="display--flex flex-direction--column">
		<template slot="panelLeft">
			<v-text-field id="treeSearch" name="treeSearch" class="check-size flex--inherit" append-icon="search" v-model="treeSearch"  single-line label="Поиск" @keyup.enter="treeSearchSubmit"/>
			<v-btn block  small class="check-size accent flex--inherit" @click="openDialog(dialogsConfig.treeAdd.id)" > <v-icon>add</v-icon> Добавить</v-btn>
			<hr>
			<v-responsive class="overflow-y-auto flex--99" width = '100%'>
				<c-tree @item-click = "itemClick" textFieldName="tree_name" typeFieldName="tree_group"  socetHref="/socet_command" socetEvent="object.tree.by.root" socetChanel="channel.ObjTreeData" :iconDic="iconDic" app />
			</v-responsive>
		</template>
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
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
				treeAdd:{id: getNewId(),  module:'m-input-fields',  name:"object-tree-add", title:"Параметры объекта", 	params:{socetHref:"/data_command", socetEvent:"object.tree.add"},kyes:{treeId:0}, }
			},														
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
				this.dialogsConfig.treeAdd.kyes.treeId = node.model.id;
			},
			treeSearchSubmit () {
				console.log(this.treeSearch);
				return;
			},
			openDialog(dialogId){
				let vm=this
				switch(dialogId){
					case vm.dialogsConfig.treeAdd.id: 					
						vm.dialogSetParamByName({id:dialogId, params:{kyes: vm.dialogsConfig.treeAdd.kyes, checkFunc:vm.objectTreeAddCheck}}  )
						break
					default: showMsg( {title:'Ошибка при открытии окна',text:'Запрашиваемое окно не найдено!'});
				}
				vm.dialogShow(dialogId)
			},
			objectTreeAddCheck(params){
				let vm=this
				if(params.obj_level=='inside' && nvl(params.treeId)==0  )
					showMsg({title:'Ошибка при добавлении элемента',text:'Для добавления вложенного элемента, необходимо выбрать родительский элемент!'});
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
	div.check-size,
	button.check-size           {max-width: 90%;   margin-left: 5%;}
	div.margin-top            	{margin-top: 15px;}
	div.tree-border-top        	{border-top-width: 1px;     border-top-style: inset;    border-top-color: #c7c7c7;}
</style>