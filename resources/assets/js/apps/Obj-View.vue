<template>
	<c-app curentSystem="Просмотр объектов" :panelRightShow="true" :panelRightDrawer="true" panelRightClass="display--flex flex-direction--column" panelRightWidth='350'>
		<template slot="panelRight">
			<v-toolbar-title class="text-xs-center check-size flex--inherit">Фильтр</v-toolbar-title> 
			<v-btn block  small class="check-size accent flex--inherit" @click="filterSet()"  > <v-icon>search</v-icon> Поиск</v-btn>
			<hr>
			<v-responsive class="overflow-y-auto flex--99" width = '100%'>
				<v-form v-model="filterValid" ref="filter">
					<c-input-cols  :inputs="inputs" :paramsForm="filterName" :maxCols="maxCols" :needCheckBox="needCheckBox" :needSign="needSign" :listItemMin="listItemMin" />
				</v-form>
			</v-responsive>
		</template>
	</c-app>
</template>

<script>//:disabled="!filterValid"
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CInputCols from '../components/c-input-cols';
	export default {
		data: () => ({
			drawerRight: true,
			password: 'Password',
			show: false,
			message: 'Hey!',
			marker: true,
			iconIndex: 0,
			maxCols:1,
			filterValid: false,
			needCheckBox: true,
			needSign: true,
			listItemMin: true,
			filterName:'object-tree-add',
			icons: ['=','>','>=','<','<=','!='],
		}),
		computed: {
			icon () {
				return this.icons[this.iconIndex]
			},
			inputs() {
				let vm=this
				return [
					{id:1, form:'object-tree-add',	code:'obj_level', 		name:'Вложенность', 	placeholder:'Уровень вложенности объекта', 	type:'LIST',	value:"cur",			multy:false,	nullable:false, column_size:30, sort_seq:1, table_values:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:2, form:'object-tree-add',	code:'tree_group',		name:'Тип', 			placeholder:'Тип объекта', 					type:'LIST', 	value:"node",			multy:false,	nullable:false, column_size:30, sort_seq:2, table_values:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:3, form:'object-tree-add',	code:'tree_desc', 		name:'Название',		placeholder:'Описание объекта', 			type:'NUMBER',	value:"10",				multy:false,	nullable:true, 	column_size:30, sort_seq:3,  },
					{id:4, form:'object-tree-add',	code:'tree_range', 		name:'Значение',		placeholder:'Описание диапазона',			type:'RANGE',	value_arr:[[22,30]],	multy:false,	nullable:false, column_size:30, sort_seq:3, min:10, max:100 },
					{id:5, form:'object-tree-add',	code:'tree_val', 		name:'Значение',		placeholder:'Описание значения',			type:'SLIDER',	value:"20",				multy:false,	nullable:false, column_size:30, sort_seq:3, min:10, max:100 },
					{id:6, form:'object-tree-add',	code:'obj_level1', 		name:'Вложенность1', 	placeholder:'Уровень вложенности объекта', 	type:'RANGE',	value_arr:[[1,2]],		multy:false,	nullable:false, column_size:30, sort_seq:1, table_values:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:7, form:'object-tree-add',	code:'tree_desc2', 		name:'Название3',		placeholder:'Описание объекта', 			type:'HIDDEN',	value:"10",				multy:false,	nullable:true, 	column_size:30, sort_seq:3,  },
					{id:8, form:'object-tree-add',	code:'tree_group1',		name:'Тип1', 			placeholder:'Тип объекта', 					type:'SLIDER', 	value:"0",				multy:false,	nullable:false, column_size:30, sort_seq:2, table_values:[{value:'node',text:'Узел'},{value:'ARM',text:'Область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле'},]  },
					{id:9, form:'object-tree-add',	code:'m_obj_level2', 	name:'Вложенность', 	placeholder:'Уровень вложенности объекта', 	type:'LIST',	value_arr:["cur"],		multy:true,		nullable:false, column_size:30, sort_seq:1, table_values:[{value:'cur',text:'На текущем этом прям прям этом уровне'},{value:'inside',text:'Вложенный'},],   },	
					{id:11, form:'object-tree-add',	code:'m_obj_level', 	name:'Вложенность', 	placeholder:'Уровень вложенности объекта', 	type:'LIST',	value_arr:["cur"],		multy:true,		nullable:false, column_size:30, sort_seq:1, table_values:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:12, form:'object-tree-add',	code:'m_tree_group',	name:'Тип', 			placeholder:'Тип объекта', 					type:'LIST', 	value_arr:["node"],		multy:true,		nullable:false, column_size:30, sort_seq:2, table_values:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:13, form:'object-tree-add',	code:'m_tree_desc', 	name:'Название',		placeholder:'Описание объекта', 			type:'NUMBER',	value_arr:["10"],		multy:true,		nullable:true, 	column_size:30, sort_seq:3,  },
					{id:14, form:'object-tree-add',	code:'m_tree_range', 	name:'Значение',		placeholder:'Описание диапазона',			type:'RANGE',	value_arr:[[22,30]],	multy:true,		nullable:false, column_size:30, sort_seq:3, min:10, max:100 },
					{id:15, form:'object-tree-add',	code:'m_tree_val', 		name:'Значение',		placeholder:'Описание значения',			type:'SLIDER',	value_arr:["20"],		multy:true,		nullable:false, column_size:30, sort_seq:3, min:10, max:100 },
					{id:16, form:'object-tree-add',	code:'m_obj_level1', 	name:'Вложенность1', 	placeholder:'Уровень вложенности объекта', 	type:'RANGE',	value_arr:[[1,2]],		multy:true,		nullable:false, column_size:30, sort_seq:1, table_values:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:17, form:'object-tree-add',	code:'m_tree_desc2', 	name:'Название3',		placeholder:'Описание объекта', 			type:'HIDDEN',	value_arr:["10"],		multy:true,		nullable:true, 	column_size:30, sort_seq:3,  },
					{id:18, form:'object-tree-add',	code:'m_tree_group1',	name:'Тип1', 			placeholder:'Тип объекта', 					type:'SLIDER', 	value_arr:["0"],		multy:true,		nullable:false, column_size:30, sort_seq:2, table_values:[{value:'node',text:'Узел'},{value:'ARM',text:'Область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле'},]  },
				]
			},
		},
		components: {
			CInputCols,
		},
		mixins: [
			XApp,XStore,
		],
		methods: {
			formCheck(formName){
				let vm = this
				if (!vm.$refs[formName].validate()){
					//setTimeout(()=>{vm.$refs[formName].resetValidation()},3000)
					
					return false
				}
				return true
			},
			filterSet(){
				let vm = this
				if (!vm.formCheck('filter'))
					return;
				console.log( this.paramTodo(this.filterName ) )
			},
			toggleMarker () {
				this.marker = !this.marker
			},
			sendMessage () {
				this.resetIcon()
				this.clearMessage()
			},
			clearMessage () {
				this.message = ''
			},
			resetIcon () {
				this.iconIndex = 0
			},
			changeIcon () {
				this.iconIndex === this.icons.length - 1 ? this.iconIndex = 0 : this.iconIndex++
			}
		},
		created: function (){
			let vm= this
			vm.paramInit( {num: vm.filterName })
			/*vm.$root.$on('dialog'+vm.filterName+'NeedCheck', ()=>{
				vm.formCheck('filter');
			});*/
		},
	}
</script>

<style lang="scss">
	.check-size           {max-width: 90%;   margin-left: 5%;}
</style>