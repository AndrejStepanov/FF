<template>
	<c-app curentSystem="Работа с объектами"  >
		<v-navigation-drawer fixed v-model="drawerLeft" left :clipped="$vuetify.breakpoint.width > 1264"  app>
			<v-text-field name="treeSearch" class="check-size" append-icon="search" v-model="treeSearch"  single-line label="Поиск" id="treeSearch" @keyup.enter="treeSearchSubmit"/>
			<v-btn block  small class="check-size accent" @click="openDialog(treeAddDialogId)" > <v-icon>add</v-icon> Добавить</v-btn>
			<c-tree class='margin-top tree-border-top'  allow-batch whole-row @item-click = "itemClick" textFieldName="tree_name" typeFieldName="tree_group"  
				socetHref="/socet_command" socetEvent="object.tree.by.root" socetChanel="channel.ObjTreeData" :iconDic="iconDic" />
		</v-navigation-drawer>
		
		<component v-bind:is="dialogType" v-if="isShowenDialog(treeAddDialogId)" :dialogId="treeAddDialogId"/>
	</c-app>
</template>

<script>
	import CApp from '../components/c-app';
	import CLoading from '../components/c-loading';
	import CTree from '../components/tree/c-tree';
	import {mapActions, mapGetters} from 'vuex'

	export default {
		data: () => ({
			drawerLeft: true,
			dataLoading:true,		
			treeSearch: '',
			iconDic:{'misc':'photo_library', 'object':'description', 'filter':'filter_list', 'filter':'filter_list', 'input':'input', 'default':'folder_open',  },
			treeAddDialogId: Math.floor(Math.random() * MAX_ID),			
			treeAddDialogParams: {},
			dialogType:'',														
		}),
		computed: {
			 ...mapGetters({
				dialogIsShow:'dialog/getShow',
			}),	
		},
		components: {
			CApp,CLoading,CTree,
			MInputFields: (resolve) =>{ require(['../modules/m-input-fields.vue'], resolve) },
		},
		methods: {
			isShowenDialog(dialogId){return this.dialogIsShow(dialogId)},	
			itemClick(node) {
				this.treeAddDialogParams.treeId = node.model.id;
			},
			objectTreeAddCheck(params){
				let vm=this
				if(params.obj_level=='inside' && nvl(params.treeId)==0  )
					showMsg({title:'Ошибка при добавлении элемента',text:'Для добавления вложенного элемента, необходимо выбрать родительский элемент!'});
			},
			treeSearchSubmit () {
				console.log(this.treeSearch);
				return;
			},
			...mapActions({
				dialogSetParamByNameAndShow:'dialog/doSetParamByNameAndShow'
			}),
			openDialog(dialogId){
				let vm=this
				switch(dialogId){
					case vm.treeAddDialogId: 
						vm.dialogType='m-input-fields'
						vm.dialogSetParamByNameAndShow({id:dialogId,paramsName: 'treeId',paramsVal: vm.treeAddDialogParams.treeId} )
						break
					default: showMsg( {title:'Ошибка при открытии окна',text:'Запрашиваемое окно не найдено!'});
				}
			},			
		},
		created: function (){
			let vm=this
			vm.$store.dispatch('dialog/doInit', {config:{id:vm.treeAddDialogId, name:"object-tree-add", title:"Параметры объекта"}, params:{socetHref:"/data_command", socetEvent:"object.tree.add", checkFunc:vm.objectTreeAddCheck} })
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