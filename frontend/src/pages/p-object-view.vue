<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="$h.camelize($options.name)" :parentLayoutName="parentLayoutName"  >
		<template v-slot:fourth >
			<v-fab-transition>
				<v-btn class="filter-button right-0 top-0"	color="accent"	fab	dark	small	absolute	top	right @click="showFilter=true"	>
					<v-icon>filter_list</v-icon>
				</v-btn>
			</v-fab-transition>
			<H1>Состояние слябов</H1> <br>
			<v-data-table	:headers="dessertsHeaders"	:items="desserts"	class="elevation-1"	>
				<template v-slot:item.fat="{ item }">
					<v-chip :color="getDessertsColor(item.fat)" dark>{{ item.fat }}</v-chip>
				</template>
			</v-data-table>
			<c-filter-dialog v-model="showFilter" paramForm :dialogConf="{fullscreen:true, hideOverlay:true, transition:'dialog-bottom-transition'}" />
		</template>
		<template v-slot:sixth>
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
	
		<template v-slot:fifth>
			<H1>График выполнения плавки 1200001&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</H1> <br>
			<v-row>
				<v-col>
				<v-sheet height="500">
					<v-calendar	:now="today"	:value="today"	color="primary"	>
						<template v-slot:day="{ present, past, date }">
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
		<template v-slot:seventh>
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
	import CLayoutsSlots from '../components/c-layouts-slots'
	import CFilterDialog from '../components/c-filter-dialog'
	import XStore from '../mixins/x-store'
	export default {
		name:'p-object-view',
		data: () => ({
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
			showFilter:false,
			paramForm:'searchForSlabState',
			layoutsCur:-1,
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
				/*{      name: 'Lollipop',            calories: 392,            fat: 0.2,            carbs: 98,            protein: 0,            iron: '2%',          },
				{      name: 'Honeycomb',           calories: 408,            fat: 3.2,            carbs: 87,            protein: 6.5,            iron: '45%',          },
				{      name: 'Donut',               calories: 452,            fat: 25.0,            carbs: 51,            protein: 4.9,            iron: '22%',          },
				{      name: 'KitKat',              calories: 518,            fat: 26.0,            carbs: 65,            protein: 7,            iron: '6%',          },*/
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
		}),
		props:{
			parentLayoutName : {type:  String, default: 'main'},
		},
		computed:{
			layoutsConfigsCur(){
				return 	this.layoutsCur>-1 && this.layoutsConfigs[this.layoutsCur]!=undefined? this.layoutsConfigs[this.layoutsCur]:this.layoutsConfigs
			},
			avg () {
				const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
				const length = this.heartbeats.length

				if (!sum && !length) return 0

				return Math.ceil(sum / length)
			},
		},
		components: {
			CLayoutsSlots, CFilterDialog,
		},
		mixins: [
			XStore,
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
				vm.showFilter = false;
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