<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="$h.camelize($options.name)" :parentLayoutName="parentLayoutName"  >
		<template #fourth >
			<v-fab-transition>
				<v-btn class="filter-button right-0 top-0"	color="accent"	fab	dark	small	absolute	top	right @click="filterShow=true"	>
					<v-icon>filter_list</v-icon>
				</v-btn>
			</v-fab-transition>
			<H1>Состояние слябов</H1> <br>
			<v-data-table	:headers="dessertsHeaders"	:items="desserts"	class="elevation-1"	>
				<template #item.fat="{ item }">
					<v-chip :color="getDessertsColor(item.fat)" dark>{{ item.fat }}</v-chip>
				</template>
			</v-data-table>
			<c-filter-dialog v-model="filterShow" :filterName="filterName" :dialogConf="{fullscreen:true, hideOverlay:true, transition:'dialog-bottom-transition'}" />
		</template>
		<template #sixth>
			<H1>Температура сляба <b>2020600</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</H1> <br>
			<v-card				class="mx-auto"				color="grey lighten-4"				max-width="600"			>
				<v-card-title>
					<v-icon	:color="'red lighten-2' "	class="mr-12"	size="64"	@click="takePulse"	>
						fireplace
					</v-icon>
					<v-row align="start">
						<div class="caption grey--text text-uppercase">	</div>
						<div>
							<span	class="display-2 font-weight-black"	v-text="avg || '—'"	></span>
							<strong v-if="avg">&#8451;</strong>
						</div>
					</v-row>
					<v-spacer></v-spacer>
					<v-btn icon class="align-self-start" size="28">
						<v-icon>mdi-arrow-right-thick</v-icon>
					</v-btn>
				</v-card-title>

				<v-sheet color="transparent">
					<v-sparkline	:key="String(avg)"	:smooth="16"	:gradient="['#f72047', '#ffd200', '#1feaea']"	:line-width="3"	:value="heartbeats"	auto-draw fill	stroke-linecap="round"	/>
				</v-sheet>
			</v-card>
			
		</template>
	
		<template #fifth>
			<H1>График выполнения плавки 1200001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</H1> <br>
			<v-row>
				<v-col>
				<v-sheet height="500">
					<v-calendar	:now="today"	:value="today"	color="primary"	>
						<template #day="{ present, past, date }">
							<v-row		class="fill-height"		>
								<template v-if="past && tracked[date]">
									<v-sheet	v-for="(percent, i) in tracked[date]"	:key="i"	:title="category[i]"	:color="colors[i]"	:width="`${percent}%`"	height="100%"	tile />
								</template>
							</v-row>
						</template>
					</v-calendar>
				</v-sheet>
				</v-col>
			</v-row>
		</template>
		<template #seventh>
			<H1>Недавние события&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</H1> <br>
			<v-card style="display: inline-block;" max-width="270" >
				<v-img src="https://www.primetals.com/fileadmin/_processed_/9/b/csm_2019091931_small_d38473b8cb.jpg" :aspect-ratio="16/9" />
				<v-card-title>
					<div class="display-1 mb-2">Нагрев в печи</div>
					<div class="title font-weight-regular grey--text">Сегодня, 12:30</div>
				</v-card-title>
				<v-row class="px-4 grey--text" align="center" >
					<v-avatar size="24" class="mr-4" >
						&nbsp;<v-icon left>settings</v-icon>						
					</v-avatar>
					<span>Сляб 2020400</span>
				</v-row>
				<v-divider class="mt-6 mx-4"></v-divider>
				<v-card-text>
					<v-chip class="mr-2" >
						<v-icon left>dvr</v-icon>
						АРМ
					</v-chip>
					<v-chip >
						<v-icon left>search</v-icon>
						Похожие
					</v-chip>
				</v-card-text>
			</v-card>
			<v-card style="display: inline-block;" max-width="270" >
				<v-img src="https://static6.depositphotos.com/1005627/573/i/950/depositphotos_5736659-stock-photo-hot-steel-on-conveyor.jpg" :aspect-ratio="16/9" />
				<v-card-title>
					<div class="display-1 mb-2">Раскат стана</div>
					<div class="title font-weight-regular grey--text">Сегодня, 12:25</div>
				</v-card-title>
				<v-row class="px-4 grey--text" align="center" >
					<v-avatar size="24" class="mr-4" >
						&nbsp;<v-icon left>settings</v-icon>						
					</v-avatar>
					<span>Сляб 2020600</span>
				</v-row>
				<v-divider class="mt-6 mx-4"></v-divider>
				<v-card-text>
					<v-chip class="mr-2" >
						<v-icon left>dvr</v-icon>
						АРМ
					</v-chip>
					<v-chip >
						<v-icon left>search</v-icon>
						Похожие
					</v-chip>
				</v-card-text>
			</v-card>
		</template>
	</c-layouts-slots>

</template>
<script>
	import CFilterDialog from '../components/c-filter-dialog'
	import XPage from '../mixins/x-page'
	export default {
		name:'p-object-view',
		data: () => ({
			armName:'Просмотр объектов',
			layoutsConfigs:{  //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				name: 'first',   layout:'vertical',  data:[
					{  name: 'second',   width:'45%', layout: 'horizontal', data:[
						{name: 'fourth', 	height:'60%', cssClass:'chDivPosRelative' },
						{name: 'sixth',  	height:'40%',  },
					]},
					{  name: 'third',   width:'55%',	layout: 'horizontal', data:[
						{name: 'fifth',   	height:'45%', },
						{name: 'seventh',   height:'454px', resizable:false}
					]},
				]}, 
			checking: false,
			heartbeats: [],
			dessertsHeaders: [
				{text: 'Номер еденицы',		align: 'start',		sortable: false,	value: 'name',	},
				{ text: 'Плавка', value: 'calories' },
				{ text: 'Толщина', value: 'fat' },
				{ text: 'Ширина', value: 'carbs' },
				{ text: 'Длина', value: 'protein' },
				{ text: 'Процент выполнения', value: 'iron' },
			],
			desserts: [
				{      name: '2020100',       	calories: 'СТ3СП',            fat: 6.0,            carbs: 24,            protein: 4.0,            iron: '1%',          },
				{      name: '2020200',  		calories: '35',            fat: 9.0,            carbs: 37,            protein: 4.3,            iron: '1%',          },
				{      name: '2020300',			calories: '09Г2С',            fat: 16.0,            carbs: 23,            protein: 6.0,            iron: '7%',          },
				{      name: '2020400',			calories: 'СТ3СП',            fat: 3.7,            carbs: 67,            protein: 4.3,            iron: '8%',          },
				{      name: '2020500',			calories: '35',            fat: 16.0,            carbs: 49,            protein: 3.9,            iron: '16%',          },
				{      name: '2020600',			calories: '09Г2С',            fat:4.0,            carbs: 94,            protein: 0.0,            iron: '40%',          },
			],
			today: '2019-01-10',
			tracked: {
				'2019-01-09': [23, 45, 10],
				'2019-01-08': [10],
				'2019-01-07': [0, 78, 5],
				'2019-01-06': [0, 0, 50],
				'2019-01-05': [0, 10, 23],
				'2019-01-04': [2, 90],
				'2019-01-03': [10, 32],
				'2019-01-02': [80, 10, 10],
				'2019-01-01': [20, 25, 10],
			},
			colors: ['#1867c0', '#fb8c00', '#000000'],
			category: ['Development', 'Meetings', 'Slacking'],
			filterShow:false,
			filterName:'searchForSlabState',
			filtersConfig: {
				searchForSlabState:[
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
				/**/	
				]
			},
		}),
		computed:{
			avg () {
				const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
				const length = this.heartbeats.length
				if (!sum && !length) return 0
				return Math.ceil(sum / length)
			},
		},
		components: {
			CFilterDialog,
		},
		mixins: [
			XPage,
		],
		methods: {
			getDessertsColor (fat) {
				if (fat > 10) return 'red'
				else if (fat > 5) return 'orange'
				else return 'green'
			},
			heartbeat () {
				return Math.ceil(Math.random() * (120 - 80) + 1800)
			},
			async takePulse (inhale = true) {
				let vm= this
				vm.checking = true
				//inhale && await exhale(1000)
				vm.heartbeats = Array.from({ length: 20 }, vm.heartbeat)
				vm.checking = false
			},
			async formSave({noCheck}){
				/*let vm=this,tmp=[],tmp1={},todo={}
				noCheck=noCheck||false
				if (!noCheck && !vm.$refs[vm.paramForm].validate())
					return;
				vm.filterShow = false;
				vm.dataSearchLoaded=false;
				todo=vm.paramTodoChecked(vm.paramForm)
				vm.sendingData=true
				await sendRequest({href:"/socet_command", type:'search.results', data:{ todo, }, default: getErrDesc('requestFaild')})
				vm.tabData=response.data
				vm.dataSearchLoaded=true
				vm.formInited=true*/
			},
		},
		created: function (){
			let vm= this
			vm.takePulse(false)
		},
	}
</script>