<template>
	<c-dialog :dialogId="dialogId" :width="dialogWidthCalc" :height="dialogHeightCalc" :buttons='buttons' @dialogSave='dialogSave' >
		<v-form v-model="inputsValid">
			<c-input-cols  :inputs="inputs" :dialogId="dialogId" :inputsId="inputsId"  />
		</v-form>
	</c-dialog>
</template>

<script>
	import CDialog from '../components/c-dialog';
	import CInputCols from '../components/c-input-cols';
	import {mapActions} from 'vuex'

	export default {
		name:'m-input-fields',
		data: () => ({
			todo:{},
			inputsValid: false,
			dialogWidthCalc:10,
			dialogHeightCalc:10,
			inputsId:Math.floor(Math.random() * MAX_ID),
		}),
		computed: {
			inputs() {
				let vm=this
				let data= [
					{id:1, form:'object-tree-add', column_code:'obj_level', column_name:'Вложенность', column_desc:'Уровень вложенности объекта', 	proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:1, items:[{value:'cur',text:'На текущем уровне'},{value:'inside',text:'Вложенный'},]  },
					{id:2, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 					proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:2, items:[{value:'node',text:'Узел дерева'},{value:'ARM',text:'Рабочая область'},{value:'filter',text:'Фильтр'},{value:'input',text:'Поле ввода'},]  },
					{id:3, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', 			proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
				]
				return data.filter(row =>  row.form == vm.formName ).sort( (a, b) =>{return sort(a, b, 'sort_seq', 'sort_seq')})
			},
			buttons() {
				let vm=this
				let tmp = []
				vm.dialogButtons.forEach((row)=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ? true :false ) }) })
				return tmp
			},
		},
		props:{
			params: {type: Object, required: true},
			formName: {type: String, default: ''}, 
			socetHref: {type: String, default: '/data_command'},
			eventName: {type: String, default: ''}, 
			dialogTitle: {type: String, default: 'Ввод параметров'}, 
			dialogId: {type: Number, required: true}, 
			dialogWidth: {type: Number, default: 0}, 
			dialogHeight: {type: Number, default: 0}, 
			checkFunc: {type: Function, default: () => true },
			saveFunc: {type: Function },
			dialogButtons: {type: Array, default: () =>{return [	
				{id:1, title:'Сохранить', icon:'done', allig:'left', click:'dialogSave' , needCheck:true}, 
				{id:2, title:'Закрыть', icon:'close', allig:'right', click:'dialogClose'}
			] }},
		},
		components: {
			CDialog,CInputCols,
		},
		methods: {
			...mapActions({
				dialogInit:'dialogInit',
			}),
			dialogSave(){
				let vm=this
				let params={...vm.todo, ...vm.params}
				if (!vm.checkFunc(params))
					return false
				if(vm.saveFunc && !vm.saveFunc(params))
					return false
				else
					if(!sendRequest({href:vm.socetHref, type:vm.eventName, data:params, handler:()=>vm.$store.dispatch('dialogShowChange',{daiologId_:vm.dialogId, isShow:false}) }) )
						return false				
			},
		},
		created: function (){
			let vm=this
			vm.dialogInit({daiologId:vm.dialogId, daiologTitle:vm.dialogTitle})
			vm.$root.$on('dialog'+vm.dialogId+'InputsCalc'+vm.inputsId, (obj)=>{
				vm.dialogHeightCalc= vm.dialogHeight>0?vm.dialogHeight: ( obj.rowInColA *74 + 149> document.documentElement.clientHeight-100 ? document.documentElement.clientHeight-100 :  obj.rowInColA *74 + 149)
				vm.dialogWidthCalc= vm.dialogWidth>0?vm.dialogWidth: obj.colsCnt*370
			}); 
			vm.$root.$on('dialog'+vm.dialogId+'InputsParams'+vm.inputsId, (obj)=>{
				vm.todo[obj.param]=obj.value;
			}); 
		},
	}
</script>