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
			loading: false,
			dialogWidth:10,
			dialogHeight:10,
			paramsForm:'',
			dialogCloseButton: {id:-1, title:'$vuetify.system.simple.actions.close', icon:'close', allig:'right', click:'dialogClose', needCheck:false},
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
			saveButtonId(){
				return this.$h.getNewId()
			},
			dialogButtons(){  
				let vm=this
				if (vm.dialogParamsGet=== undefined )
					return[]
				return [ {
					id:vm.saveButtonId, 
					title:vm.$h.nvlo(vm.dialogParamsGet.saveButtonProp).title||'$vuetify.system.simple.actions.save', 
					icon:vm.$h.nvlo(vm.dialogParamsGet.saveButtonProp).icon||'save', 
					allig:'right', 
					click:'dialogSave', 
					needCheck:vm.$h.nvlo(vm.dialogParamsGet.saveButtonProp).needCheck||true}, 
				]
			},
			inputs() {
				let vm=this
				/*
				let data= [
					{id:vm.$h.getNewId(), form:'authLogin', 	code:'username', 	name:'Пользователь', 			placeholder:'Логин пользователя', 				type:'INPUT', 		nullable:0, column_size:30, sort_seq:1,  },
					{id:vm.$h.getNewId(), form:'authLogin', 	code:'password',	name:'Пароль', 					placeholder:'Пароль пользователя', 				type:'PASSWORD', 	nullable:0, column_size:30, sort_seq:2,  },
					{id:vm.$h.getNewId(), form:'authLogin', 	code:'remember',	name:'Запомнить мои данные', 	placeholder:'Запомнить данные пользователя', 	type:'BOOL',		nullable:1, column_size:30, sort_seq:3,  },
				]*/
				console.log(vm.dialogParamsGet.inputGroup);
				return Object.values( vm.paramConfigGroup( vm.dialogParamsGet.inputGroup ) ).sort( (a, b) =>{return vm.$h.sort(a, b, 'sort_seq', 'sort_seq')})
			},
			buttons() {
				let vm=this,
					tmp = [];
				(vm.dialogConfigGet.buttons||vm.dialogButtons).concat(vm.dialogCloseButton).forEach(row=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ), loading: ( row.click=='dialogSave' && vm.loading ) }) })
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
			async dialogSave(){
				let vm=this, response
				if (!vm.$refs[vm.paramsForm].validate())
					return;
				let todo={...vm.paramToObj(vm.paramsForm), ...vm.dialogParamsGet.todoExt}
				
				if ('checkFunc' in vm.dialogParamsGet)
					vm.dialogParamsGet.checkFunc(todo)
				if('prepereFuncAsync' in vm.dialogParamsGet){
					vm.loading =true
					try {
						todo = await vm.dialogParamsGet.prepereFuncAsync(todo)
					} catch(err) {
						vm.loading=false
						return
					}
				}
				else if('prepereFunc' in vm.dialogParamsGet)
					todo = vm.dialogParamsGet.prepereFunc(todo)
				console.log(todo)
				vm.loading =true
				try {
					response = await vm.$h.sendRequest({href:vm.$h.nvl(vm.dialogParamsGet.href,'/data_command'), type:vm.dialogParamsGet.socetEvent, data:todo, hrefBack:vm.dialogParamsGet.hrefBack, headers:vm.dialogParamsGet.headers })
				} catch(err) {
					vm.loading=false
					return
				}				
				vm.loading=false
				vm.$root.$emit('dialog'+vm.dialogId+'Finish', {response, todo})
				vm.$refs.dialog.dialogClose()
			},
		},
		created: function (){
			let vm=this
			let dialogTitle = vm.$vuetify.lang.t(vm.dialogConfigGet.title)
			vm.paramsForm=vm.dialogConfigGet.name
			vm.paramInit( {form: vm.paramsForm, params:vm.inputs })
			vm.$root.$on('dialog'+vm.dialogId+'InputsCols', (obj)=>{
				vm.dialogHeight= vm.dialogConfigGet.height>0 ? vm.dialogConfigGet.height : 	obj.rowInColA *74 + 140 
				vm.dialogWidth= vm.dialogConfigGet.width>0 ? vm.dialogConfigGet.width : 	dialogTitle.length*20+110>obj.colsCnt*300	?	dialogTitle.length*20+110	:	obj.colsCnt*300
			})
			vm.$root.$on('dialog'+vm.paramsForm+'Send', ()=>{
				vm.dialogSave()
			})
		},
	}
</script>