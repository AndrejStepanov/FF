<script>
	import XDialogConfig from '@/mixins/x-dialog-config'
	import CLayoutsSlots from '@/components/c-layouts-slots'
	import CTable from '@/components/c-table'
	import MInputFields from '@/modules/inputFields/m-input-fields'
	export default {
		data: () => ({
			armName:'',
			componentName:'',
			layoutsConfigs: { //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;
				name: 'main'
			}, 
			layoutsCur:-1,
			tableConfig:{
				//main:{href:'api/testArms', method:'get', variable:'tabValues', loadingVar:'tabLoading',}
			},
			inputsConfig:{
				/*treeAdd:[
					{code:'obj_level', 	name:'Вложенность', 	placeholder:'Уровень вложенности объекта', 		type:'LIST', 		nullable:0, column_size:30, sort_seq:1, services:{ given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } }  },
					{code:'tree_group', name:'Тип', 			placeholder:'Тип объекта', 						type:'LIST', 		nullable:0, column_size:30, sort_seq:2, services:{ given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } }  },
					{code:'tree_desc', 	name:'Название',		placeholder:'Описание объекта', 				type:'INPUT',		nullable:0, column_size:30, sort_seq:3, max_len:25 },	
				],*/
			},
			buttonsConfig:{
			},
			buttonsConfigCheckDisable:{
			},
			buttonsConfigListeners:{
			},
			filtersConfig: {
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
					]
				objectTreeAdd:[
					{code:'m_tree_info',				name:'Объекты', 										 					type:'INFO', 											sort_seq:1, 																																																			},
					{code:'obj_param',					name:'Параметр', 				placeholder:'Ввод параметров', 				type:'INPUT', 							nullable:false,	sort_seq:2, isAuto:false, 		services:{tab:{ name:'test.data.by.id', args:{} } },																																	},
					{code:'m_tree_line1',				name:'Информация', 										 					type:'LINE', 											sort_seq:3, 																																																			},
					{code:'tree_input',					name:'Ввод', 					placeholder:'Ввод объекта', 				type:'INPUT', 							nullable:false, sort_seq:4, maxLen:30,			services:{default:{ script:'return "ыва"'  } },																																			},
					{code:'tree_num',					name:'Число', 					placeholder:'Ввод числа', 					type:'NUMBER', 							nullable:false, sort_seq:5, 					services:{default:{ script:'return "111"'  } },																																			},
					{code:'tree_int', 					name:'Название',				placeholder:'Описание объекта', 			type:'NUMBER',											sort_seq:6, min:0, 				services:{default:{ name:'test.number.with.sleep', } }  																																},
					{code:'tree_date',					name:'Дата', 					placeholder:'Дата объекта', 				type:'DATE', 							nullable:false, sort_seq:7, 					services:{default:{ script:'return ["2018-10-03"]'  } },																																},
					{code:'obj_level', 					name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',							nullable:false, sort_seq:8, 					services:{default:{ script:'return ["strange"]'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта', id:'{{tree_int}}' } } },									},
					{code:'m_tree_line',				name:'Информация', 										 					type:'LINE', 											sort_seq:9, 																																																			},
					{code:'tree_group',					name:'Тип', 					placeholder:'Тип объекта', 					type:'LIST', 							nullable:false, sort_seq:10, 					services:{default:{ script:'return {tree_group:"input"}'  },given:{ script:'listToArrObj', args:{list:'node::Узел дерева;ARM::Рабочая область;filter::Фильтр;input::Поле ввода'}, },}, 	},
					{code:'tree_range', 				name:'Значение',				placeholder:'Описание диапазона',			type:'RANGE',							nullable:false, sort_seq:11, min:10, max:100,	services:{default:{ script:'return "52--30"'  } },  																																	},
					{code:'tree_val', 					name:'Значение',				placeholder:'Описание значения',			type:'SLIDER',							nullable:false, sort_seq:12, min:10, max:100, 	services:{default:{ script:'return {tree_val:"15"}'  } }, 																																},
					{code:'obj_level1', 				name:'Вложенность1', 			placeholder:'Уровень вложенности объекта', 	type:'RANGE',							nullable:false, sort_seq:13,					services:{default:{ script:'return "cur--inside"'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } },  													},
					{code:'tree_desc2', 				name:'Название3',				placeholder:'Описание объекта', 			type:'HIDDEN',										 	sort_seq:14,					services:{default:{ script:'return {tree_desc2:10}'  }, }, 																																},
					{code:'tree_group1',				name:'Тип1', 					placeholder:'Тип объекта', 					type:'SLIDER', 							nullable:false, sort_seq:15,					services:{default:{ script:'return "ARM"'  }, given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } },  																			},
					{code:'m_obj_level2', 				name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',			multy:true,		nullable:false, sort_seq:16,					services:{default:{ script:'return "inside,strange"'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } },  												},	
					{code:'m_obj_level', 				name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',			multy:true,		nullable:false, sort_seq:17,					services:{default:{ script:'return {m_obj_level:"inside,strange"}'  }, given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } },  									},
					{code:'m_tree_group',				name:'Тип', 					placeholder:'Тип объекта', 					type:'LIST', 			multy:true,		nullable:false, sort_seq:18, 					services:{default:{ script:'return ["node","ARM"]'  }, given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } },  																	},
					{code:'m_tree_nbsp',				name:'Информация', 										 					type:'NBSP', 											sort_seq:19, 																																																			},
					{code:'m_tree_dates',				name:'Даты', 					placeholder:'Даты объекта', 				type:'DATE', 			multy:true,		nullable:false, sort_seq:20, 					services:{default:{ script:'return "2018-10-03"' } }, 																														},
					{code:'m_tree_date',				name:'Дата', 					placeholder:'Дата объекта', 				type:'DATE', 							nullable:false, sort_seq:21, 					services:{default:{ script:'return "2018-10-03"' } },																																	},
					{code:'m_tree_time',				name:'Время', 					placeholder:'Время объекта', 				type:'TIME', 							nullable:false, sort_seq:22, 					services:{default:{ script:'return ["12:52"]' } },																																		},
					{code:'m_tree_datetime',			name:'Дата Время', 				placeholder:'Дата Время объекта', 			type:'DATETIME', 						nullable:false, sort_seq:23, 					services:{default:{ script:'return {m_tree_datetime:"2018-10-03T12:52"}' } },																											},
					{code:'m_tree_date_range',			name:'Дата диапазон', 			placeholder:'Дата объекта диапазон', 		type:'DATE_RANGE', 						nullable:false, sort_seq:24, 					services:{default:{ script:'return "2018-10-03--2018-10-04"' } },																														},
					{code:'m_tree_time_range',			name:'Время диапазон', 			placeholder:'Время объекта диапазон', 		type:'TIME_RANGE', 						nullable:false, sort_seq:25, 					services:{default:{ script:'return ["12:52","12:53"]' } },																																},
					{code:'m_tree_datetime_range',		name:'Дата Время диапазон', 	placeholder:'Дата Время объекта', 			type:'DATETIME_RANGE', 					nullable:false, sort_seq:26, 					services:{default:{ script:'return {value:"2018-10-03T12:52--2018-10-04T12:53"}' } },																									},	
				]*/
			},
		}),
		props:{
			parentLayoutConfig : {type: Object , default: () =>  {return { head:'mainLayout', name:'pageLayout'}} },
		},
		computed:{
			layoutsConfigsCur(){
				return 	this.layoutsCur>-1 && this.layoutsConfigs[this.layoutsCur]!=undefined? this.layoutsConfigs[this.layoutsCur]:this.layoutsConfigs
			},
		},
		watch: {
			buttonsConfig(val, valOld){
				this.initButtons(val)
			},
		},
		components: {
			CLayoutsSlots, CTable, MInputFields,
		},
		mixins: [
			XDialogConfig,
		],
		methods: {
			pageButtonDisableCheck(variable,valArr){
				let vm=this
				vm.$h.nvl(vm.buttonsConfigCheckDisable[variable],[]).forEach( row=>{
					vm.pageButtonSetDisable({ page: vm.componentName , button: row.name , value: row.checkDisable.type=='multy' && !(valArr.length>0) || row.checkDisable.type=='one' && !(valArr.length==1) 	})
				})
			},
			async retrieveDataTable( {name, data} ){
				let vm=this
				if(vm.tableConfig[name]==  undefined )
					vm.$h.showMsg(  {...vm.$h.getErrDesc('wrongFuncEnterParam'), textParams:['retrieveDataTable', 'name',  name ] })
				await vm.$h.getDataTable ( vm.tableConfig[name] , vm)
			},
			async initButtons(config){
				let vm = this, storePageButtons ={}
				for(let variable in vm.buttonsConfigCheckDisable ) 
					vm.buttonsConfigCheckDisable[variable].unwatch()
				for(let variable in vm.buttonsConfigListeners ) 
					vm.$root.off(variable, vm.buttonsConfigListeners[variable] )
				
				await vm.pageButtonInit({ page: vm.componentName , buttons:config	})
				vm.buttonsConfigListeners=vm.buttonsConfigCheckDisable={}
				for(let button in config ) {
					let tmp =config[button].checkDisable
					if(tmp== undefined)
						continue
					if(vm.buttonsConfigCheckDisable[tmp.var]== undefined)
						vm.$set( vm.buttonsConfigCheckDisable, tmp.var, [])
					vm.buttonsConfigCheckDisable[tmp.var].push({...config[button], name: button,})
				}
				for(let variable in vm.buttonsConfigCheckDisable ) {
					vm.buttonsConfigCheckDisable[variable].unwatch = vm.$watch(variable , newVal=> vm.pageButtonDisableCheck(variable,newVal) )
					vm.pageButtonDisableCheck(variable,vm[variable])
				}
				storePageButtons =  vm.pageButtonByPage(vm.componentName)
				for(let button in storePageButtons ) {
					if(vm.buttonsConfigListeners[ storePageButtons[button].event ] != undefined )
						continue
					let event = storePageButtons[button].event.replace(vm.componentName+'-b-','')
					if( event== 'openDialogUniversal'  ) 
						vm.buttonsConfigListeners[ storePageButtons[button].event ]	= params=>vm.$h.openDialogUniversal(params,vm)
					else if( typeof(vm[event+'_click'])=='function' )
						vm.buttonsConfigListeners[ storePageButtons[button].event ] = vm[event+'_click']
					else
						continue
					vm.$root.$on(storePageButtons[button].event , vm.buttonsConfigListeners[ storePageButtons[button].event ] )
				}
			},
		},
		created: function (){
			let vm=this
			vm.componentName= vm.$h.camelize(vm.$h.nvl(vm.componentName, vm.$vnode.tag.replace( /(vue-component-\d+-)(\w+)/ ,'$2') ) )
			for (let group in vm.inputsConfig){
				if(vm.$h.nvl(vm.inputsConfig[group].id,-1)==-1)
					vm.inputsConfig[group].id= vm.$h.getNewId()
				vm.paramConfigInit({ form: group , params:vm.inputsConfig[group], type:'inputs'	})
			}
			for (let group in vm.filtersConfig){
				if(vm.$h.nvl(vm.filtersConfig[group].id,-1)==-1)
					vm.filtersConfig[group].id= vm.$h.getNewId()
				vm.paramConfigInit({ form: group , params:vm.filtersConfig[group], type:'filters'	})
			}
			vm.initButtons(vm.buttonsConfig)
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				vm.systemCurArmNameChange({name:vm.armName})
			})
		},
		beforeRouteUpdate (to, from, next) {
			let vm = this
			vm.systemCurArmNameChange({name:vm.armName})
			next()
		},
	}
</script>