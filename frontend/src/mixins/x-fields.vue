<script>
	import XStore from '@/mixins/x-store'
	export default {
		data: () => ({
			formFields:{}, // /* {form: 'formName', type:'inputs' } */
			formFieldsForm:{}, // /* {main: 'formName' } */
		}),
		props:{
		},
		computed: {
		},
		components: { 
		},
		mixins: [
			XStore, 
		],
		methods: {
			async initFields(config){ //{name: 'main', form:'formName', type:'inputs' }
				let vm=this
				vm.clearFields()
				if( vm.$h.typeOfObject(config) ==  'array'  )
					config.addField( row=> vm.initField(row) )
				else
					vm.addField(config) 				
			},
			async addField(config){ //{name: 'main', form:'formName', type:'inputs' }
				let vm=this,tmp={}
				if( vm.$h.nvl(config.name,'')=='' )
					vm.$h.showMsg( {...vm.$h.getErrDesc('fieldsInitWrongParam'), textParams:[ 'name', config.name  ] } )
				if( vm.$h.nvl(config.form,'')=='' )
					vm.$h.showMsg( {...vm.$h.getErrDesc('fieldsInitWrongParam'), textParams:[ 'form', config.form  ] } )
				if( vm.$h.nvl(config.type,'')=='' )
					vm.$h.showMsg( {...vm.$h.getErrDesc('fieldsInitWrongParam'), textParams:[ 'type', config.type  ] } )
				tmp  = {formOrig: config.form, id:vm.$h.getNewId(), type: config.type  }
				await vm.paramInit( {form: tmp.formOrig, id:tmp.id, type:tmp.type })
				tmp.form= tmp.formOrig +vm.$h.idSep+tmp.id
				vm.$set( vm.formFields, config.name, tmp)
				vm.$set( vm.formFieldsForm, config.name, tmp.form)
			},
			clearFields(){
				let vm = this
				for( let form in  vm.formFields)
					vm.paramClear({ form: vm.formFields[form].form})	
				vm.formFields={}
				vm.formFieldsForm={}
			},
		},
		created (){
		},
		beforeDestroy (){
			this.clearFields()
		},
	}
</script>