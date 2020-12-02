<template>
	<c-dialog ref='dialog' :dialogId="dialogId" :widthOrig="dialogWidth" :heightOrig="dialogHeight" :buttons="buttons" @dialogSave="dialogSave" >
		<v-form v-model="inputsValid" :ref="paramsForm" class="pa-2"> 
			<c-input-cols  :inputs="inputs" :dialogId="dialogId" :paramsForm="paramsForm" />
		</v-form>
	</c-dialog>
</template>

<script>
	import XModal from '@/mixins/x-modal'
	import CInputCols from '@/components/c-input-cols'
	export default {
		name:'m-input-fields',
		data: () => ({
			inputsValid: false,
			loading: false,
			dialogWidth:10,
			dialogHeight:10,
			paramsForm:'',
			dialogButtons: [
				{id:-1, title:'$vuetify.system.simple.actions.close',	icon:'close', allig:'right',  click:'dialogClose', needCheck:false},
				{id:-1, title:'$vuetify.system.simple.actions.save', 	icon:'save',  allig:'right',  click:'dialogSave',  needCheck:true}, 
			]
		}),
		props:{
			dialogId: {type: Number, required: true}, 
		},
		computed: {
			inputs() {
				let vm=this
				console.log(vm.dialogParamsGet.inputGroup);
				return Object.values( vm.paramConfigGroupInput( vm.dialogParamsGet.inputGroup ) ).sort( (a, b) =>{return vm.$h.sort(a, b, 'sort_seq', 'sort_seq')})
			},
			buttons() {
				let vm=this,
					tmp = [];
				vm.dialogButtons.forEach(row=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ), loading: ( row.click=='dialogSave' && vm.loading ) }) })
				return tmp
			},
		},
		components: {
			CInputCols,
		},
		mixins: [
			XModal,
		],
		methods: {
			async dialogSave(){
				let vm=this, response
				try {
					vm.loading =true
					if (!vm.$refs[vm.paramsForm].validate())
						return vm.loading=false
					let todo={...vm.paramToObj(vm.paramsForm), ...vm.dialogParamsGet.todoExt, socetEvent:vm.dialogParamsGet.socetEvent}					
					if (typeof(vm.dialogParamsGet.checkFunc)=='function' && ! await vm.dialogParamsGet.checkFunc(todo))
						return vm.loading=false
					if(typeof(vm.dialogParamsGet.prepereFunc)=='function')
						todo = await vm.dialogParamsGet.prepereFunc(todo)
					console.log(todo)
					response = await vm.$h.sendRequest({href:vm.$h.nvl(vm.dialogParamsGet.href,'/data_command'), method:vm.dialogParamsGet.method, data:todo, hrefBack:vm.dialogParamsGet.hrefBack, headers:vm.dialogParamsGet.headers })
					if(typeof(vm.dialogParamsGet.finishFunc)=='function')
						await vm.dialogParamsGet.finishFunc({response, todo})
					vm.$root.$emit('dialog'+vm.dialogId+'Finish', {response, todo})
					vm.$refs.dialog.dialogClose()
				}
				finally {vm.loading=false}
			},
		},
		created: function (){
			let vm=this,
				dialogTitle = vm.$vuetify.lang.t(vm.dialogConfigGet.title)
			vm.paramsForm=vm.dialogConfigGet.name
			vm.paramInit( {form: vm.paramsForm, params:vm.inputs })
			if( vm.$h.nvlo(vm.dialogParamsGet.saveButtonProp,'')!=''){
				for ( let i=0; i<vm.dialogButtons.length; i++ ){
					if(vm.dialogButtons[i].click!='dialogSave')
						continue
					vm.dialogButtons[i].title=vm.dialogParamsGet.saveButtonProp.title||'$vuetify.system.simple.actions.save'
					vm.dialogButtons[i].icon=vm.dialogParamsGet.saveButtonProp.icon||'save'
					vm.dialogButtons[i].needCheck=vm.$h.nvl(vm.dialogParamsGet.saveButtonProp.needCheck,true)
				}
			}
			vm.$root.$on('dialog'+vm.dialogId+'InputsCols', (obj)=>{
				vm.dialogHeight= vm.dialogConfigGet.height>0 ? vm.dialogConfigGet.height : 	obj.rowInColA *74 + 130 -8
				vm.dialogWidth= vm.dialogConfigGet.width>0 ? vm.dialogConfigGet.width : 	dialogTitle.length*20+110>obj.colsCnt*300	?	dialogTitle.length*20+110	:	obj.colsCnt*300
			})
			vm.$root.$on('dialog'+vm.paramsForm+'Send', ()=>{
				vm.dialogSave()
			})
		},
	}
</script>