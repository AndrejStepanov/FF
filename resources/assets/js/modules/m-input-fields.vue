<template>
	<c-dialog ref='dialog' :dialogId="dialogId" :widthOrig="dialogWidth" :heightOrig="dialogHeight" :buttons='buttons' @dialogSave='dialogSave' >
		<v-form v-model="inputsValid" :ref="paramsForm" > 
			<c-input-cols  :inputs="inputs" :dialogId="dialogId" :paramsForm="paramsForm" />
		</v-form>
	</c-dialog>
</template>

<script>
	import XStore from '../mixins/x-store'
	import CDialog from '../components/c-dialog';
	import CInputCols from '../components/c-input-cols';

	export default {
		name:'m-input-fields',
		data: () => ({
			inputsValid: false,
			dialogWidth:10,
			dialogHeight:10,
			paramsForm:'',
			dialogButtons:  [
				{id:1, title:'Сохранить', icon:'done', allig:'left', click:'dialogSave' , needCheck:true}, 
				{id:2, title:'Закрыть', icon:'close', allig:'right', click:'dialogClose'}
			],
		}),
		props:{
			dialogId: {type: Number, required: true}, 			
		},
		computed: {
			dialogConfigGet(){
				let vm=this
				return vm.dialogConfig(vm.dialogId)
			},
			dialogParamsGet(){
				let vm=this
				return vm.dialogParams(vm.dialogId)
			},
			inputs() {
				let vm=this
				let data= [
					{id:1, form:'object-tree-add',	code:'obj_level', 	column_name:'Вложенность', 				column_desc:'Уровень вложенности объекта', 		type:'LIST', 		nullable:0, column_type:'String', column_size:30, css_class:'', sort_seq:1, items:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:2, form:'object-tree-add',	code:'tree_group', 	column_name:'Тип', 						column_desc:'Тип объекта', 						type:'LIST', 		nullable:0, column_type:'String', column_size:30, css_class:'', sort_seq:2, items:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:3, form:'object-tree-add',	code:'tree_desc', 	column_name:'Название',					column_desc:'Описание объекта', 				type:'INPUT',		nullable:0, column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
					
					{id:4, form:'auth-login', 		code:'login', 		column_name:'Пользователь', 			column_desc:'Логин пользователя', 				type:'INPUT', 		nullable:0, column_type:'String', column_size:30, css_class:'', sort_seq:1,  },
					{id:5, form:'auth-login', 		code:'password',	column_name:'Пароль', 					column_desc:'Пароль пользователя', 				type:'PASSWORD', 	nullable:0, column_type:'String', column_size:30, css_class:'', sort_seq:2,  },
					{id:6, form:'auth-login', 		code:'remember',	column_name:'Запомнить мои данные', 	column_desc:'Запомнить данные пользователя', 	type:'BOOL',		nullable:1, column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
				]
				return data.filter(row =>  row.form == vm.paramsForm ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
			buttons() {
				let vm=this
				let tmp = [], buttons=[]
				if(vm.paramsForm=='auth-login')
					buttons=authButtons
				else 
					buttons=vm.dialogButtons
				buttons.forEach((row)=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ) }) })
				return tmp
			},
		},
		components: {
			CDialog,CInputCols,
		},
		mixins: [
			XStore,
		],
		methods: {
			dialogSave(){
				let vm=this
				if (!vm.$refs[vm.paramsForm].validate())
					return;
				let todo={...vm.paramTodo(vm.paramsForm), ...vm.dialogParamsGet.kyes}
				
				if (vm.dialogParamsGet.checkFunc)
					vm.dialogParamsGet.checkFunc(todo)
				if(vm.dialogParamsGet.saveFunc)
					 vm.dialogParamsGet.saveFunc(todo)
				else
					sendRequest({href:nvl(vm.dialogParamsGet.socetHref,'/data_command'), type:vm.dialogParamsGet.socetEvent, data:todo, hrefBack:vm.dialogParamsGet.hrefBack, handler:()=>vm.$refs.dialog.dialogClose() })				
			},
		},
		created: function (){
			let vm=this
			vm.paramsForm=vm.dialogConfigGet.name
			vm.paramInit( {num: vm.paramsForm })
			vm.$root.$on('dialog'+vm.dialogId+'InputsCols', (obj)=>{
				vm.dialogHeight= vm.dialogConfigGet.height>0 ? vm.dialogConfigGet.height : obj.rowInColA *74 + 140 
				vm.dialogWidth= vm.dialogConfigGet.width>0 ? vm.dialogConfigGet.width :(vm.dialogConfigGet.title.length*20+110>obj.colsCnt*300?vm.dialogConfigGet.title.length*20+110:obj.colsCnt*300  )
			}); 
			vm.$root.$on('dialog'+vm.paramsForm+'Send', ()=>{
				vm.dialogSave();
			});
		},
	}
</script>