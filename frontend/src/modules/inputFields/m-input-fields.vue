<template>
	<c-dialog ref='dialog' :dialogLink="dialogLink" :widthOrig="modalSize.width" :heightOrig="modalSize.height" :buttons="compButtonsGet">
		<v-form v-model="inputsValid" :ref="formFieldsForm.main" class="pa-2" v-if="formFieldsForm.main!= undefined"> 
			<c-input-cols  :paramsForm="formFieldsForm.main"  fluidContainer :initParams="iputInitParams" :multiIdInit="multiIdInit" />
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
			buttonsConfig: {
				close:	{title:'$vuetify.system.actions.close',	icon:'close', allig:'right',},
				save: 	{title:'$vuetify.system.actions.save', 	icon:'save',  allig:'right',}, 
			},
			iputInitParams:{/*href:'api/', method:'get', id:[]*/ },
			multiIdInit:false,
		}),
		props:{
		},
		computed: {
		},
		watch: {
			async inputsValid(val, valOld){
				await this.compButtonSetDisable({comp:this.componentName,button:'save',value:!val} )
			},
		},
		components: {
			CInputCols,
		},
		mixins: [
			XModal,
		],
		methods: {
			async save_click(){
				let vm=this, response, todo={}
				try {
					await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:true, compLock:true} )
					console.log(vm.formFieldsForm.main);
					if (!vm.$refs[ vm.formFieldsForm.main ].validate())
						return vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} )

					todo={...vm.paramToObj(vm.formFieldsForm.main), ...vm.dialogParamsGet.todoExt, socetEvent:vm.dialogParamsGet.socetEvent}
					if	( ['patch', 'delete'].indexOf(vm.dialogParamsGet.method)!=-1  )
						if( vm.$h.typeOfObject(vm.dialogParamsGet.id) ==  'array'  )
							todo.id=vm.dialogParamsGet.id
						else 
							todo.id=[vm.dialogParamsGet.id]
					

					if (! await vm.modalCheckFuncs(todo))
						return vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} )					
					todo = await vm.modalPrepereFuncs(todo)

					console.log(todo, vm.dialogParamsGet)
					response = await vm.$h.sendRequest({href:vm.$h.nvl(vm.dialogParamsGet.href,'/data_command'), method:vm.dialogParamsGet.method, data:todo, hrefBack:vm.dialogParamsGet.hrefBack, headers:vm.dialogParamsGet.headers })
					
					await vm.modalFinishFuncs({response, todo})
				}
				finally {await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} )}
			},
		},
		async created (){
			let vm=this,
				inputsLen=vm.paramConfigGroup('inputs', vm.dialogParamsGet.inputGroup ).length,
				inputSize={height:48/*input*/+5/*ma*/+16/*pt*/, width: 300/*input*/+10/*mlr*/},
				additionSize={height:125, width: 32},
				workSize= {
					height: Math.min( Math.abs(vm.$h.nvl(vm.dialogConfigGet.height,9999)), parseInt(vm.$vuetify.breakpoint.height) -120/*край*/), 
					width: Math.min(  Math.abs(vm.$h.nvl(vm.dialogConfigGet.width,9999)), parseInt(vm.$vuetify.breakpoint.width) -100/*край*/),
				},
				dialogTitleWidth = Math.min( vm.$h.nvl(vm.$vuetify.lang.t(vm.dialogConfigGet.title),'').length*14+20/*buttons*/ , workSize.width),
				inputCntMin = 4,
				rowCntMax = ( (workSize.height-additionSize.height)/inputSize.height)  ^ 0, 
				rowCntRes=inputsLen,
				colCntMax = ( (workSize.width-additionSize.width)/inputSize.width)  ^ 0,
				colCntRes=1, 
				resDiff= 99,
				tmpRow=0
				console.log(inputsLen, vm.paramConfigGroup('inputs', vm.dialogParamsGet.inputGroup ));
			if( inputsLen>inputCntMin  )
				for(let i=1; i<=colCntMax; i++){
					tmpRow = Math.ceil(inputsLen/i)
					console.log(rowCntMax,tmpRow);
					if(/*rowCntMax>=tmp &&*/ resDiff>= Math.abs(i-tmpRow) )
						[colCntRes,rowCntRes, resDiff]=[i,tmpRow,  Math.abs(i-tmpRow)]
				}
			vm.modalHeight= vm.dialogConfigGet.height>0 ? vm.dialogConfigGet.height : 	rowCntRes*inputSize.height + additionSize.height //+3-6 
			vm.modalWidth= vm.dialogConfigGet.width>0 ? vm.dialogConfigGet.width : Math.max(dialogTitleWidth, colCntRes*inputSize.width+ additionSize.width)
			vm.iputInitParams= Object.assign({}, vm.iputInitParams, {href:vm.dialogParamsGet.href, method:'get', id:vm.dialogParamsGet.id }) 
			if(vm.dialogParamsGet.method!='post' &&  vm.$h.typeOfObject(vm.dialogParamsGet.id) ==  'array'  &&   vm.dialogParamsGet.id.length>1 )
				vm.multiIdInit=true
			await vm.initFields({name:'main', form:vm.dialogParamsGet.inputGroup, type:'inputs' })
			vm.$root.$on(vm.formFieldsForm.main+'_Send', ()=>{
				vm.save_click()
			})
		},
	}
</script>