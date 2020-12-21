<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="componentName" :parentLayoutConfig="parentLayoutConfig"  >
		<template #second  >
			<div class='display--flex flex-direction--column height--100pr'>
				<v-text-field id="treeSearch" name="treeSearch" class="check-size flex--inherit" append-icon="search" v-model="treeSearch"  single-line :label="$vuetify.lang.t('$vuetify.system.actions.search')" @keyup.enter="treeSearchSubmit"/>
				<v-btn block  :disabled="!rootLoaded" small class="check-size accent flex--inherit" @click="openDialog({dialog:'treeAdd'})" > <v-icon>add</v-icon> {{ $vuetify.lang.t('$vuetify.system.actions.add') }}</v-btn>
				<hr>
				<v-responsive class="overflow-y-auto flex--99" width = '100%'>
					<c-tree @item-click = "itemClick" textFieldName="tree_name" typeFieldName="tree_group"  socetHref="/api/socet_command" socetEvent="object.tree.by.root" socetChanel="channel.ObjTreeData" :iconDic="iconDic" app  @rootLoaded="rootLoaded=true"/>
				</v-responsive>
			</div>
		</template>
		<template #third  >
			<H1>third</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #layoutDialogs >  <component v-for="(row, name) in dialogsShowen " :key="name" v-bind:is="row.config.component" :dialogLink="row.link"  />	</template>
	</c-layouts-slots>
</template>
<script>
	import CTree from '@/components/tree/c-tree'
	import XPage from '@/mixins/x-page'
	export default {
		name:'p-object-work',
		data: () => ({
			armName:'Работа с объектами',
			layoutsConfigs: { //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;
				name: 'first',  layout: 'vertical',  data:[
					{  name: 'second',		width:'270px', 	},
					{  name: 'third',						},
				]}, 
			treeSearch: '',
			treeSelectedId:0,
			iconDic:{'misc':'photo_library', 'object':'description', 'filter':'filter_list',  'input':'input', 'default':'folder_open',  },		
			dialogsConfig: {
				treeAdd:{
					id:-1,  title:"$vuetify.objectWork.modals.treeAdd.title", component:'m-input-fields', 
					params:{ href:"api/data_command", method:'post', socetEvent:"object.tree.add",  inputGroup:'pObjectWorkTreeAdd'}, 
				},
			},
			inputsConfig:{
				pObjectWorkTreeAdd:[
					{code:'obj_level', 	name:'Вложенность', 	placeholder:'Уровень вложенности объекта', 		type:'LIST', 		nullable:0, column_size:30, sort_seq:1, services:{ given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } }  },
					{code:'tree_group', name:'Тип', 			placeholder:'Тип объекта', 						type:'LIST', 		nullable:0, column_size:30, sort_seq:2, services:{ given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } }  },
					{code:'tree_desc', 	name:'Название',		placeholder:'Описание объекта', 				type:'INPUT',		nullable:0, column_size:30, sort_seq:3, max_len:25 },	
				],
			},
			rootLoaded:false,
		}),
		components: {
			CTree,
		},
		mixins: [
			XPage,
		],
		methods: {
			itemClick(node) {
				this.treeSelectedId = node.model.id
			},
			treeSearchSubmit () {
				console.log(this.treeSearch);
				return;
			},
			treeAdd_getParams(){
				return {todoExt:{treeId: this.treeSelectedId}, }
			},
			treeAdd_checkTodo(params){
				let vm=this
				console.log(params.treeId);
				if(params.obj_level.value=='inside' && vm.$h.nvlo(params.treeId)==0  )
					vm.$h.showMsg(vm.$h.getErrDesc('withAddNestElem') );
				return true
			},
			async pageRefresh(){
				console.log(456);
			},
		},
		created: function (){
			//let vm = this
		},
	}
</script>