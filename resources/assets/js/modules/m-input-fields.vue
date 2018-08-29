<template>
	<c-dialog :dialogId="dialogId" :width="dialogWidthCalc" :height="dialogHeightCalc" :buttons='buttons' @dialogSave='dialogSave' >
		<v-form v-model="inputsValid" :ref="formName" > 
			<c-input-cols  :inputs="inputs" :dialogId="dialogId" :inputsColId="inputsColId"  />
		</v-form>
	</c-dialog>
</template>

<script>
	import CDialog from '../components/c-dialog';
	import CInputCols from '../components/c-input-cols';
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name:'m-input-fields',
		data: () => ({
			todo:{},
			inputsValid: false,
			dialogWidthCalc:10,
			dialogHeightCalc:10,
			inputsColId:Math.floor(Math.random() * MAX_ID),
		}),
		props:{
			params: {type: Object},
			hrefBack: {type: String, default: ''},
			socetHref: {type: String, default: '/data_command'},
			socetEvent: {type: String, default: ''}, 
			dialogId: {type: Number, required: true}, 
			dialogWidth: {type: Number, default: 0}, 
			dialogHeight: {type: Number, default: 0}, 
			checkFunc: {type: Function, default: () => true },
			saveFunc: {type: Function },
			dialogButtons: {type: Array, default: () => {return [
				{id:1, title:'Сохранить', icon:'done', allig:'left', click:'dialogSave' , needCheck:true}, 
				{id:2, title:'Закрыть', icon:'close', allig:'right', click:'dialogClose'}
			] } },
		},
		computed: {
			...mapGetters({
				dialogName:'dialogName',
			}),
			formName(){return this.dialogName(this.dialogId)}, 
			inputs() {
				let vm=this
				let data= [
					{id:1, form:'object-tree-add',	column_code:'obj_level', 	column_name:'Вложенность', 				column_desc:'Уровень вложенности объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:1, items:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:2, form:'object-tree-add',	column_code:'tree_group', 	column_name:'Тип', 						column_desc:'Тип объекта', 						proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:2, items:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:3, form:'object-tree-add',	column_code:'tree_desc', 	column_name:'Название', 				column_desc:'Описание объекта', 				proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
					
					{id:4, form:'auth-login', 		column_code:'login', 		column_name:'Пользователь', 			column_desc:'Логин пользователя', 				proc_type:'MAN', 		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:1,  },
					{id:5, form:'auth-login', 		column_code:'password',		column_name:'Пароль', 					column_desc:'Пароль пользователя', 				proc_type:'PASSWORD', 	isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:2,  },
					{id:6, form:'auth-login', 		column_code:'remember',		column_name:'Запомнить мои данные', 	column_desc:'Запомнить данные пользователя', 	proc_type:'BOOL',		isNull:'Y', column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
					
				]
				return data.filter(row =>  row.form == vm.formName ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
			buttons() {
				let vm=this
				let tmp = [], buttons=[]
				if(vm.formName=='auth-login')
					buttons=authButtons
				else 
					buttons=vm.dialogButtons
				buttons.forEach((row)=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ? true :false ) }) })
				return tmp
			},
		},
		components: {
			CDialog,CInputCols,
		},
		methods: {
			dialogSave(){
				let vm=this
				if (!vm.$refs[vm.formName].validate()) 
					return;
				let params={...vm.todo, ...vm.params}
				if (!vm.checkFunc(params))
					return false
				if(vm.saveFunc && !vm.saveFunc(params))
					return false
				else
					if(!sendRequest({href:vm.socetHref, type:vm.socetEvent, data:params, hrefBack:vm.hrefBack, handler:()=>vm.$store.dispatch('dialogShowChange',{daiologId_:vm.dialogId, isShow:false}) }) )
						return false				
			},
			paramSave(obj){
				let vm=this
				vm.todo[obj.param]=obj.value;
			},
		},
		created: function (){
			let vm=this
			vm.$root.$on('dialog'+vm.dialogId+'InputsCalc'+vm.inputsColId, (obj)=>{
				vm.dialogHeightCalc= vm.dialogHeight>0?vm.dialogHeight: ( obj.rowInColA *74 + 149> document.documentElement.clientHeight-100 ? document.documentElement.clientHeight-100 :  obj.rowInColA *74 + 149)
				vm.dialogWidthCalc= vm.dialogWidth>0?vm.dialogWidth: obj.colsCnt*370
				vm.dialogWidthCalc= vm.dialogWidthCalc<670?670:vm.dialogWidthCalc;
			}); 
			vm.$root.$on('dialog'+vm.dialogId+'InputsParams'+vm.inputsColId, (obj)=>{
				let vm=this
				vm.paramSave(obj);
			}); 
			vm.$root.$on('dialog'+vm.dialogId+'Send', (obj)=>{
				let vm=this
				vm.paramSave(obj);
				vm.dialogSave();
			});
		},
	}
</script>