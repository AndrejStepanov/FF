<template>
	<v-app dark>
		<v-content>
			<v-navigation-drawer fixed v-model="drawerLeft" left :clipped="$vuetify.breakpoint.width > 1264"  app>
				<!--<v-card-text class="headline">Дерево объектов</v-card-text>-->
				<v-text-field name="treeSearch" class="check-size" append-icon="search" v-model="treeSearch"  single-line label="Поиск" id="treeSearch" @keyup.enter="treeSearchSubmit"/>
				<v-btn block  class="check-size accent" @click="dialogShow({daiologId_:treeAddDialogId,isShow:true})" > <v-icon>add</v-icon> Добавить</v-btn>
				<c-tree :data = "treeData" class='margin-top tree-border-top'  allow-batch whole-row @item-click = "itemClick" :textFieldName="treeTextFieldName" :socetHref="treeSocetHref" :socetEvent="treeSocetEvent" :socetChanel="treeSocetChanel" :iconDic="iconDic" :typeFieldName="treeTypeFieldName"/>
			</v-navigation-drawer>
			<!--<c-loading v-if="dataLoading"/>-->
		</v-content>

		<c-head :showRight=false :showLeft=true :curentSystem='curentSystem'  @clickLeftDrawer="drawerLeft = !drawerLeft" app />
		<c-footer app/>
		<c-msg-list />
		<m-input-fields :dialogId="treeAddDialogId"  formName="object-tree-add" :params="treeAddDialogParams" eventName="object-tree-add" dialogTitle="Параметры объекта" :maxWidth="700" :height="400"/>
	</v-app >
</template>

<script>
	import CHead from '../components/c-head';
	import CFooter from '../components/c-footer';
	import CMsgList from '../components/c-msg-list';
	import CLoading from '../components/c-loading';
	import CTree from '../components/tree/c-tree';
	import MInputFields from '../modules/m-input-fields';
	import {mapActions} from 'vuex'

	export default {
		data: () => ({
			drawerLeft: true,
			dataLoading:true,
			curentSystem: 'Работа с объектами',
			treeSocetHref: '/socet_command',
			treeSocetEvent: 'object-tree-by-root',
			treeSocetChanel: 'channel-ObjTreeData',
			treeTextFieldName: 'tree_name',
			treeTypeFieldName: 'tree_group',
			treeData: [{}],
			treeSearch: '',
			treeSearchValid: false,
			iconDic:{'misc':'photo_library', 'object':'description', 'filter':'filter_list', 'filter':'filter_list', 'input':'input', 'default':'folder_open',  },
			treeAddDialogId: Math.floor(Math.random() * window._Fun.MAX_ID),		
			treeAddDialogParams: {},							
		}),
		components: {
			CHead,CFooter,CMsgList,CLoading,CTree,MInputFields,
		},
		methods: {
			itemClick(node) {
				if(node.data.opened)
					node.data.closeChildren();
				else
					node.data.openChildren();
				this.treeAddDialogParams.treeId = node.model.id;
			},
			treeSearchSubmit () {
				console.log(this.treeSearch);
				return;
			},
			...mapActions({
				dialogShow:'dialogShowChange',
			})
		},
		created: function (){
			
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