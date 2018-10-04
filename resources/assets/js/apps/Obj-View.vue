<template>
	<c-app curentSystem="Просмотр объектов" :panelRightShow="true" :panelRightDrawer="true" panelRightClass="display--flex flex-direction--column">
		<template slot="panelRight">
			<v-toolbar-title class="text-xs-center check-size flex--inherit">Фильтр</v-toolbar-title> 
			<v-btn block  small class="check-size accent flex--inherit" @click="filterSet()" :disabled="!filterValid" > <v-icon>search</v-icon> Поиск</v-btn>
			<hr>
			<v-responsive class="overflow-y-auto flex--99" width = '100%'>
				<v-form v-model="filterValid" ref="filter">
					<c-input-cols  :inputs="inputs" :paramsForm="filterName" :maxCols="maxCols" :needCheckBox="needCheckBox" />
				</v-form>
			</v-responsive>
		</template>
	</c-app>
</template>

<script>
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
					{id:1, form:'object-tree-add',	code:'obj_level', 	column_name:'Вложенность', 				column_desc:'Уровень вложенности объекта', 		type:'LIST',	nullable:false, column_type:'String', column_size:30, css_class:'', sort_seq:1, items:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:2, form:'object-tree-add',	code:'tree_group', 	column_name:'Тип', 						column_desc:'Тип объекта', 						type:'LIST', 	nullable:false, column_type:'String', column_size:30, css_class:'', sort_seq:2, items:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:3, form:'object-tree-add',	code:'tree_desc', 	column_name:'Название',					column_desc:'Описание объекта', 				type:'BOOL',	nullable:true, column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
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
					vm.$refs[formName].resetValidation()
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
			vm.$root.$on('dialog'+vm.filterName+'NeedCheck', ()=>{
				vm.formCheck('filter');
			});
		},
	}
</script>

<style lang="scss">
	.check-size           {max-width: 90%;   margin-left: 5%;}
</style>