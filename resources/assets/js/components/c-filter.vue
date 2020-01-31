<template>
	<div  style="display: contents;">
		<v-toolbar-title class="text-xs-center check-size flex--inherit">{{ $vuetify.lang.t('$vuetify.texts.simple.labels.filters') }} </v-toolbar-title> 
		<v-btn block  small class="check-size accent flex--inherit" @click="filterSet()"  > <v-icon>search</v-icon> {{$vuetify.lang.t('$vuetify.texts.simple.actions.search')}}</v-btn>
		<hr>
		<v-responsive class="overflow-y-auto flex--99 pl-1" width = '100%'>
			<v-form  :ref="filterName" class="filter">
				<c-input-cols  :inputs="inputs" :paramsForm="filterName" :maxCols="1" :needCheckBox="true" :needSign="true" :listItemMin="true" allPT />
			</v-form>
		</v-responsive>
	</div>
</template>
<script>
	import CInputCols from './c-input-cols'
	import XStore from '../mixins/x-store'
    export default {
		name:'c-filter',
		data:() => ({
		}),
		props:{
			filterName:{type:  String, required: true},
		},
		computed:{
			inputs() {
				let vm=this,
					tab_header=[
						{value:'r',				text:'Параметр r',		type:'text', 	 		},
						{value:'t',				text:'Параметр t',		type:'text', 	 		},
						{value:'q',				text:'Параметр q',		type:'text', 	 		},
						{value:'w',				text:'Параметр w',		type:'text', 	 		},
						{value:'e',				text:'Параметр e',		type:'text', 	 		clsssCell:'text-bold'},
						{value:'obj_param',		text:'Параметр',		type:'numeric', 	 	visible:false},
						{value:'tree_input',	text:'Ввод', 			type:'text', 		 	},
						{value:'tree_text',		text:'Текст',			type:'text', 		 	sortable:true},
						{value:'tree_desc',		text:'Название',		type:'numeric', 	 	vMask:'0,0.0'},
						{value:'tree_date',		text:'Дата',			type:'date',		 	},
						{value:'obj_level',		text:'Вложенность',		type:'text', 		 	},
					],
					tab_values=[
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:1,	tree_input:'1', tree_text:'2', tree_desc:'3', tree_date:'2018-10-03', obj_level:'CNhfyyj',obj_level_code:'strange',  },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:2762.823,	tree_input:' werwr 232fr', tree_text:'4kwhefb wlufgh w23iufhqwp fuygfuywe webgwpuir', tree_desc:'476.7378', tree_date:'2018-11-03', obj_level:'На текущем уровне1 На текущем уровне1 На текущем уровне1 На текущем уровне1 На текущем уровне1 ', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:3,	tree_input:'5', tree_text:'5', tree_desc:'5', tree_date:'2018-12-11', obj_level:'На текущем уровне', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:4,	tree_input:'6', tree_text:'6', tree_desc:'6', tree_date:'2018-12-12', obj_level:'Странный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:5,	tree_input:'7', tree_text:'7', tree_desc:'7', tree_date:'2018-12-13', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:6,	tree_input:'18', tree_text:'8', tree_desc:'8', tree_date:'2018-12-14', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:7,	tree_input:'28', tree_text:'8', tree_desc:'8', tree_date:'2018-12-15', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:8,	tree_input:'38', tree_text:'8', tree_desc:'8', tree_date:'2018-12-16', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:9,	tree_input:'48', tree_text:'8', tree_desc:'8', tree_date:'2018-12-17', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:10,	tree_input:'58', tree_text:'8', tree_desc:'8', tree_date:'2018-12-18', obj_level:'Вложенный', },
						{value:false, r:'asda', t:'asdxcvdfgqw sdf fghrte d', q:'qweqweqweqe', w:1, e:'jsdvf uwdfwef uiwef jwefw wef f', obj_param:11,	tree_input:'68', tree_text:'8', tree_desc:'8', tree_date:'2018-12-19', obj_level:'Вложенный', },
					]
				return [
					{id:'1', 	form:'object-tree-add',	code:'m_tree_info',					name:'Объекты', 										 					type:'INFO', 																															sort_seq:1, },
					{id:'2', 	form:'object-tree-add',	code:'obj_param',					name:'Параметр', 				placeholder:'Ввод параметров', 				type:'INPUT', 				value:null,													multy:false,	nullable:false, column_size:30, sort_seq:2, tab_header, tab_values, tab_group:'obj_param', withTab:true , isAuto:true},
					{id:'3', 	form:'object-tree-add',	code:'m_tree_line1',				name:'Информация', 										 					type:'LINE', 																															sort_seq:3, },
					{id:'4', 	form:'object-tree-add',	code:'tree_input',					name:'Ввод', 					placeholder:'Ввод объекта', 				type:'INPUT', 				value:"ыва",												multy:false,	nullable:false, column_size:30, sort_seq:4, },
					{id:'5', 	form:'object-tree-add',	code:'tree_text',					name:'Текст', 					placeholder:'Ввод текста', 					type:'TEXT', 				value:"ыва",												multy:false,	nullable:false, column_size:30, sort_seq:5, },
					{id:'6', 	form:'object-tree-add',	code:'tree_desc', 					name:'Название',				placeholder:'Описание объекта', 			type:'NUMBER',				value:"10",													multy:false,	nullable:true, 	column_size:30, sort_seq:6, min:0,},
					{id:'7', 	form:'object-tree-add',	code:'tree_date',					name:'Дата', 					placeholder:'Дата объекта', 				type:'DATE', 				value_arr:["2018-10-03"],									multy:false,	nullable:false, column_size:30, sort_seq:7, },
					{id:'8', 	form:'object-tree-add',	code:'obj_level', 					name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',				value:"strange",											multy:false,	nullable:false, column_size:30, sort_seq:8, table_values:[{value:'cur',text:'Текущий уровень'},{value:'inside',text:'Вложенный'},{value:'strange',text:'Странный'},]  },
					{id:'9', 	form:'object-tree-add',	code:'m_tree_line',					name:'Информация', 										 					type:'LINE', 																															sort_seq:9, },
					{id:'10', 	form:'object-tree-add',	code:'tree_group',					name:'Тип', 					placeholder:'Тип объекта', 					type:'LIST', 				value:"node",												multy:false,	nullable:false, column_size:30, sort_seq:10, table_values:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:'11', 	form:'object-tree-add',	code:'tree_range', 					name:'Значение',				placeholder:'Описание диапазона',			type:'RANGE',				value_arr:[52,30],											multy:false,	nullable:false, column_size:30, sort_seq:11, min:10, max:100 },
					{id:'12', 	form:'object-tree-add',	code:'tree_val', 					name:'Значение',				placeholder:'Описание значения',			type:'SLIDER',				value:"20",													multy:false,	nullable:false, column_size:30, sort_seq:12, min:10, max:100 },
					{id:'13', 	form:'object-tree-add',	code:'obj_level1', 					name:'Вложенность1', 			placeholder:'Уровень вложенности объекта', 	type:'RANGE',				value_arr:['cur','inside'],									multy:false,	nullable:false, column_size:30, sort_seq:13, table_values:[{value:'cur',text:'Текущий уровень'},{value:'inside',text:'Вложенный'},{value:'strange',text:'Странный'},]  },
					{id:'14', 	form:'object-tree-add',	code:'tree_desc2', 					name:'Название3',				placeholder:'Описание объекта', 			type:'HIDDEN',				value:"10",													multy:false,	nullable:true, 	column_size:30, sort_seq:14, },
					{id:'15', 	form:'object-tree-add',	code:'tree_group1',					name:'Тип1', 					placeholder:'Тип объекта', 					type:'SLIDER', 				value:'ARM',												multy:false,	nullable:false, column_size:30, sort_seq:15, table_values:[{value:'node',text:'Узел'},{value:'ARM',text:'Область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле'},]  },
					{id:'16', 	form:'object-tree-add',	code:'m_obj_level2', 				name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',				value_arr:["cur"],											multy:true,		nullable:false, column_size:30, sort_seq:16, table_values:[{value:'cur',text:'На текущем этом прям прям этом уровне'},{value:'inside',text:'Вложенный'},{value:'strange',text:'Странный'},],   },	
					{id:'17', 	form:'object-tree-add',	code:'m_obj_level', 				name:'Вложенность', 			placeholder:'Уровень вложенности объекта', 	type:'LIST',				value_arr:["cur"],											multy:true,		nullable:false, column_size:30, sort_seq:17, table_values:[{value:'cur',text:'Текущий уровень'},{value:'inside',text:'Вложенный'},{value:'strange',text:'Странный'},]  },
					{id:'18', 	form:'object-tree-add',	code:'m_tree_group',				name:'Тип', 					placeholder:'Тип объекта', 					type:'LIST', 				value_arr:["node","ARM"],									multy:true,		nullable:false, column_size:30, sort_seq:18, table_values:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:'19', 	form:'object-tree-add',	code:'m_tree_nbsp',					name:'Информация', 										 					type:'NBSP', 																															sort_seq:19, },
					{id:'20', 	form:'object-tree-add',	code:'m_tree_dates',				name:'Даты', 					placeholder:'Даты объекта', 				type:'DATE', 				value_arr:["2018-10-03", "2018-10-04"],						multy:true,		nullable:false, column_size:30, sort_seq:20, },
					{id:'21', 	form:'object-tree-add',	code:'m_tree_date',					name:'Дата', 					placeholder:'Дата объекта', 				type:'DATE', 				value_arr:["2018-10-03"],									multy:false,	nullable:false, column_size:30, sort_seq:21, },
					{id:'22', 	form:'object-tree-add',	code:'m_tree_time',					name:'Время', 					placeholder:'Время объекта', 				type:'TIME', 				value_arr:["12:52"],										multy:false,	nullable:false, column_size:30, sort_seq:22, },
					{id:'23', 	form:'object-tree-add',	code:'m_tree_datetime',				name:'Дата Время', 				placeholder:'Дата Время объекта', 			type:'DATETIME', 			value_arr:["2018-10-03T12:52"],								multy:false,	nullable:false, column_size:30, sort_seq:23, },
					{id:'24', 	form:'object-tree-add',	code:'m_tree_date_range',			name:'Дата диапазон', 			placeholder:'Дата объекта диапазон', 		type:'DATE_RANGE', 			value_arr:["2018-10-03","2018-10-04"],					multy:false,	nullable:false, column_size:30, sort_seq:24, },
					{id:'25', 	form:'object-tree-add',	code:'m_tree_time_range',			name:'Время диапазон', 			placeholder:'Время объекта диапазон', 		type:'TIME_RANGE', 			value_arr:["12:52","12:53"],								multy:false,	nullable:false, column_size:30, sort_seq:25, },
					{id:'26', 	form:'object-tree-add',	code:'m_tree_datetime_range',		name:'Дата Время диапазон', 	placeholder:'Дата Время объекта', 			type:'DATETIME_RANGE', 		value_arr:["2018-10-03T12:52","2018-10-04T12:53"],		multy:false,	nullable:false, column_size:30, sort_seq:26, },
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
			vm.paramInit( {num: vm.filterName, params:vm.inputs })
		},
    }
</script>

<style lang="scss">
	.check-size           		{max-width: 90%;   margin-left: 5%;}
	.v-form.filter>.container 	{padding: 2px;}
</style>