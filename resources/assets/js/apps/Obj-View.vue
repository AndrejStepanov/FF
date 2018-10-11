<template>
	<c-app curentSystem="Просмотр объектов" :panelRightShow="true" :panelRightDrawer="true" panelRightClass="display--flex flex-direction--column">
		<template slot="panelRight">
			<v-toolbar-title class="text-xs-center check-size flex--inherit">Фильтр</v-toolbar-title> 
			<v-btn block  small class="check-size accent flex--inherit" @click="filterSet()"  > <v-icon>search</v-icon> Поиск</v-btn>
			<hr>
			<v-responsive class="overflow-y-auto flex--99" width = '100%'>
				<v-form v-model="filterValid" ref="filter">
					<c-input-cols  :inputs="inputs" :paramsForm="filterName" :maxCols="maxCols" :needCheckBox="needCheckBox" :needSign="needSign" />
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
					{id:1, form:'object-tree-add',	code:'obj_level', 	name:'Вложенность', tip:"Подсказка!!!!!!", 	placeholder:'Уровень вложенности объекта', 	type:'LIST',	value:"cur",			nullable:false, column_type:'String', column_size:30, css_class:'', sort_seq:1, table_values:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:2, form:'object-tree-add',	code:'tree_group',	name:'Тип', 		tip:"Подсказка!!!!!!", 	placeholder:'Тип объекта', 					type:'LIST', 	value:"node",			nullable:false, column_type:'String', column_size:30, css_class:'', sort_seq:2, table_values:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:3, form:'object-tree-add',	code:'tree_desc', 	name:'Название',	tip:"Подсказка!!!!!!", 	placeholder:'Описание объекта', 			type:'NUMBER',	value:"10",				nullable:true, 	column_type:'Number', column_size:30, css_class:'', sort_seq:3,  },
					{id:4, form:'object-tree-add',	code:'tree_range', 	name:'Значение',	tip:"Подсказка!!!!!!", 	placeholder:'Описание диапазона',			type:'RANGE',	value:"20",value2:"30",	nullable:false, column_type:'Number', column_size:30, css_class:'', sort_seq:3, min:10, max:100 },
					{id:5, form:'object-tree-add',	code:'tree_val', 	name:'Значение',	tip:"Подсказка!!!!!!", 	placeholder:'Описание значения',			type:'SLIDER',	value:"20",value2:"30",	nullable:false, column_type:'Number', column_size:30, css_class:'', sort_seq:3, min:10, max:100 },
					{id:6, form:'object-tree-add',	code:'obj_level1', 	name:'Вложенность1', tip:"Подсказка!!!!!!", placeholder:'Уровень вложенности объекта', 	type:'RANGE',	value:"1",value2:"2",	nullable:false, column_type:'String', column_size:30, css_class:'', sort_seq:1, table_values:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:7, form:'object-tree-add',	code:'tree_group1',	name:'Тип1', 		tip:"Подсказка!!!!!!", 	placeholder:'Тип объекта', 					type:'SLIDER', 	value:"0",				nullable:false, column_type:'String', column_size:30, css_class:'', sort_seq:2, table_values:[{value:'node',text:'Узел'},{value:'ARM',text:'Область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле'},]  },
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