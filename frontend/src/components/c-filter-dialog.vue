<template>
	<v-dialog :value="value"  v-on:input="$emit('input', false)"  v-bind="dialogConf"  >
		<v-card>
			<v-toolbar dark color="primary">
				<v-btn icon dark @click="$emit('input', false) ">
					<v-icon>close</v-icon>
				</v-btn>
				<v-toolbar-title>{{$vuetify.lang.t('$vuetify.system.simple.labels.filter')}}</v-toolbar-title>
				<v-spacer/>
				<v-toolbar-items>
					<v-btn dark text @click="$emit('input', false)">{{$vuetify.lang.t('$vuetify.system.simple.actions.save')}}</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<v-form v-model="inputsValid" :ref="paramForm"  > 
				<v-list subheader class="height-auto">
					<!--<v-subheader>{{$vuetify.t('$vuetify.system.searchPage.education')}}</v-subheader> -->
					<v-list-item >
						<v-list-item-content  >
							<c-input-cols :inputs="inputs"  :paramsForm="paramForm" :dialogId="dialogId"  :maxCols="getFilColCnt" :needCheckBox="true" :needSign="true" :listItemMin="true" allPT />
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-form>
		</v-card>
	</v-dialog>
</template>
<script>
	import CInputCols from './c-input-cols'
	import XStore from '../mixins/x-store'
    export default {
		name:'c-filter-dialog',
		data:() => ({
			inputsValid:false,
			dialogId:0,
		}),
		props:{
			value:{type:  Boolean, required: true},
			paramForm:{type:  String, required: true},
			dialogConf: {type: Object, default: () => {return {fullscreen:true, hideOverlay:true, transition:'dialog-bottom-transition'} } },
			//:dialoSaveFunc = "formSave"
		},
		computed:{
			getFilColCnt(){
				let vm=this
				return ['xs'].indexOf(vm.$vuetify.breakpoint.name)!=-1 ? 1 :
					['sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1 ? 2 : 3
			},
			inputs() {
				/*let vm=this,
					tab_header=[
						{value:'r',				text:'Параметр r',		type:'text', 	 		},
						{value:'t',				text:'Параметр t',		type:'text', 	 		},
						{value:'q',				text:'Параметр q',		type:'text', 	 		},
						{value:'w',				text:'Параметр w',		type:'text', 	 		},
						{value:'e',				text:'Параметр e',		type:'text', 	 		clsssCell:'text-bold'},
						{value:'obj_param',		text:'Параметр',		type:'numeric', 	 	visible:false},
						{value:'tree_input',	text:'Ввод', 			type:'text', 		 	},
						{value:'tree_num',		text:'Текст',			type:'numeric', 	 	sortable:true},
						{value:'tree_int',		text:'Название',		type:'numeric', 	 	vMask:'0,0.0'},
						{value:'tree_date',		text:'Дата',			type:'date',		 	},
						{value:'obj_level',		text:'Вложенность',		type:'text', 		 	},
					],
					tab_values=[
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:1,	tree_input:'1', tree_num:'2', tree_int:'3', tree_date:'2018-10-03', obj_level:'CNhfyyj',obj_level_code:'strange',  },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:27.823,	tree_input:' werwr 232fr', tree_num:'4kwhefb wlufgh w23iufhqwp fuygfuywe webgwpuir', tree_int:'476.7378', tree_date:'2018-11-03', obj_level:'На текущем уровне1 На текущем уровне1 На текущем уровне1 На текущем уровне1 На текущем уровне1 ', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:3,	tree_input:'5', tree_num:'5', tree_int:'5', tree_date:'2018-12-11', obj_level:'На текущем уровне', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:4,	tree_input:'6', tree_num:'6', tree_int:'6', tree_date:'2018-12-12', obj_level:'Странный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:5,	tree_input:'7', tree_num:'7', tree_int:'7', tree_date:'2018-12-13', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:6,	tree_input:'18', tree_num:'8', tree_int:'8', tree_date:'2018-12-14', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:7,	tree_input:'28', tree_num:'8', tree_int:'8', tree_date:'2018-12-15', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:8,	tree_input:'38', tree_num:'8', tree_int:'8', tree_date:'2018-12-16', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:9,	tree_input:'48', tree_num:'8', tree_int:'8', tree_date:'2018-12-17', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:10,	tree_input:'58', tree_num:'8', tree_int:'8', tree_date:'2018-12-18', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:11,	tree_input:'68', tree_num:'8', tree_int:'8', tree_date:'2018-12-19', obj_level:'Вложенный', },
					]*/
				return [
					{id:'1', 	form:'object-tree-add',	code:'m_tree_info',					name:'Объекты', 										 					type:'INFO', 											sort_seq:1, 																																																			},
					{id:'2', 	form:'object-tree-add',	code:'obj_param',					name:'Параметр', 				placeholder:'Ввод параметров', 				type:'INPUT', 							nullable:false,	sort_seq:2, isAuto:false, 		services:{tab:{ name:'test.data.by.id', args:{} } },																																	},
					{id:'3', 	form:'object-tree-add',	code:'m_tree_line1',				name:'Информация', 										 					type:'LINE', 											sort_seq:3, 																																																			},
					{id:'4', 	form:'object-tree-add',	code:'tree_input',					name:'Ввод', 					placeholder:'Ввод объекта', 				type:'INPUT', 							nullable:false, sort_seq:4, maxLen:30,			services:{default:{ script:'return "ыва"'  } },																																			},
					{id:'5', 	form:'object-tree-add',	code:'tree_num',					name:'Число', 					placeholder:'Ввод числа', 					type:'NUMBER', 							nullable:false, sort_seq:5, 					services:{default:{ script:'return "111"'  } },																																			},
					{id:'6', 	form:'object-tree-add',	code:'tree_int', 					name:'Название',				placeholder:'Описание объекта', 			type:'NUMBER',											sort_seq:6, min:0, 				services:{default:{ name:'test.number.with.sleep', } }  																																},
					{id:'7', 	form:'object-tree-add',	code:'tree_date',					name:'Дата', 					placeholder:'Дата объекта', 				type:'DATE', 							nullable:false, sort_seq:7, 					services:{default:{ script:'return ["2018-10-03"]'  } },																																},
					{id:'8', 	form:'object-tree-add',	code:'obj_level', 					name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',							nullable:false, sort_seq:8, 					services:{default:{ script:'return ["strange"]'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта', id:'{{tree_int}}' } } },									},
					{id:'9', 	form:'object-tree-add',	code:'m_tree_line',					name:'Информация', 										 					type:'LINE', 											sort_seq:9, 																																																			},
					{id:'10', 	form:'object-tree-add',	code:'tree_group',					name:'Тип', 					placeholder:'Тип объекта', 					type:'LIST', 							nullable:false, sort_seq:10, 					services:{default:{ script:'return {tree_group:"input"}'  },given:{ script:'listToArrObj', args:{list:'node::Узел дерева;ARM::Рабочая область;filter::Фильтр;input::Поле ввода'}, },}, 	},
					{id:'11', 	form:'object-tree-add',	code:'tree_range', 					name:'Значение',				placeholder:'Описание диапазона',			type:'RANGE',							nullable:false, sort_seq:11, min:10, max:100,	services:{default:{ script:'return "52--30"'  } },  																																	},
					{id:'12', 	form:'object-tree-add',	code:'tree_val', 					name:'Значение',				placeholder:'Описание значения',			type:'SLIDER',							nullable:false, sort_seq:12, min:10, max:100, 	services:{default:{ script:'return {tree_val:"15"}'  } }, 																																},
					{id:'13', 	form:'object-tree-add',	code:'obj_level1', 					name:'Вложенность1', 			placeholder:'Уровень вложенности объекта', 	type:'RANGE',							nullable:false, sort_seq:13,					services:{default:{ script:'return "cur--inside"'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } },  													},
					{id:'14', 	form:'object-tree-add',	code:'tree_desc2', 					name:'Название3',				placeholder:'Описание объекта', 			type:'HIDDEN',										 	sort_seq:14,					services:{default:{ script:'return {tree_desc2:10}'  }, }, 																																},
					{id:'15', 	form:'object-tree-add',	code:'tree_group1',					name:'Тип1', 					placeholder:'Тип объекта', 					type:'SLIDER', 							nullable:false, sort_seq:15,					services:{default:{ script:'return "ARM"'  }, given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } },  																			},
					{id:'16', 	form:'object-tree-add',	code:'m_obj_level2', 				name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',			multy:true,		nullable:false, sort_seq:16,					services:{default:{ script:'return "inside,strange"'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } },  												},	
					{id:'17', 	form:'object-tree-add',	code:'m_obj_level', 				name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',			multy:true,		nullable:false, sort_seq:17,					services:{default:{ script:'return {m_obj_level:"inside,strange"}'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } },  									},
					{id:'18', 	form:'object-tree-add',	code:'m_tree_group',				name:'Тип', 					placeholder:'Тип объекта', 					type:'LIST', 			multy:true,		nullable:false, sort_seq:18, 					services:{default:{ script:'return ["node","ARM"]'  }, given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } },  																	},
					{id:'19', 	form:'object-tree-add',	code:'m_tree_nbsp',					name:'Информация', 										 					type:'NBSP', 											sort_seq:19, 																																																			},
					{id:'20', 	form:'object-tree-add',	code:'m_tree_dates',				name:'Даты', 					placeholder:'Даты объекта', 				type:'DATE', 			multy:true,		nullable:false, sort_seq:20, 					services:{default:{ script:'return "2018-10-03"' } }, 																														},
					{id:'21', 	form:'object-tree-add',	code:'m_tree_date',					name:'Дата', 					placeholder:'Дата объекта', 				type:'DATE', 							nullable:false, sort_seq:21, 					services:{default:{ script:'return "2018-10-03"' } },																																	},
					{id:'22', 	form:'object-tree-add',	code:'m_tree_time',					name:'Время', 					placeholder:'Время объекта', 				type:'TIME', 							nullable:false, sort_seq:22, 					services:{default:{ script:'return ["12:52"]' } },																																		},
					{id:'23', 	form:'object-tree-add',	code:'m_tree_datetime',				name:'Дата Время', 				placeholder:'Дата Время объекта', 			type:'DATETIME', 						nullable:false, sort_seq:23, 					services:{default:{ script:'return {m_tree_datetime:"2018-10-03T12:52"}' } },																											},
					{id:'24', 	form:'object-tree-add',	code:'m_tree_date_range',			name:'Дата диапазон', 			placeholder:'Дата объекта диапазон', 		type:'DATE_RANGE', 						nullable:false, sort_seq:24, 					services:{default:{ script:'return "2018-10-03--2018-10-04"' } },																														},
					{id:'25', 	form:'object-tree-add',	code:'m_tree_time_range',			name:'Время диапазон', 			placeholder:'Время объекта диапазон', 		type:'TIME_RANGE', 						nullable:false, sort_seq:25, 					services:{default:{ script:'return ["12:52","12:53"]' } },																																},
					{id:'26', 	form:'object-tree-add',	code:'m_tree_datetime_range',		name:'Дата Время диапазон', 	placeholder:'Дата Время объекта', 			type:'DATETIME_RANGE', 					nullable:false, sort_seq:26, 					services:{default:{ script:'return {value:"2018-10-03T12:52--2018-10-04T12:53"}' } },																									},
				/**/	
				]
			},
		},
		components: {
			CInputCols,
		},
		mixins: [
			XStore, 
		],
		methods: {
			filterSet(){
				let vm = this
				if (!vm.$refs[vm.filterName].validate())
					return;
				console.log( vm.paramTodo(vm.filterName ) )
			},
		},
		created: function (){
			let vm= this
			vm.dialogId = vm.$h.getNewId() 
			vm.paramInit( {form: vm.paramForm, params:vm.inputs })
		},
    }
</script>

<style lang="scss">
	.check-size           		{max-width: 90%;   margin-left: 5%;}
	.v-form.filter>.container 	{padding: 2px;}
</style>