<script>
	import XContentConfig from '@/mixins/x-content-config'
	import CDialog from '@/components/c-dialog'
	export default {
		data: () => ({
			componentName:'',
			modalWidth:null,
			modalHeight:null,
		}),
		props:{
			dialogLink: {type: Object, required: true, validator: (val)=>{ return val.comp!= undefined &&  val.dialog!= undefined }}, 
			value:  {type:Object, default: () => {} },
		},
		computed: {
			dialogConfigGet(){
				let vm=this
				return vm.compDialogConfig(vm.dialogLink.comp, vm.dialogLink.dialog)
			},
			dialogParamsGet(){
				let vm=this
				return vm.compDialogParams(vm.dialogLink.comp, vm.dialogLink.dialog)
			},
			modalSize(){
				return {width : this.$h.nvl(this.modalWidth, this.dialogConfigGet.width, 500), height : this.$h.nvl(this.modalHeight, this.dialogConfigGet.height, 500) }
			}
		},
		watch: {
		},
		components: {
			CDialog,
		},
		mixins: [
			XContentConfig, 
		],
		methods: {
			async modalCheckFuncs(todo){
				return  typeof(this.dialogParamsGet.checkFunc)=='function' ?  await this.dialogParamsGet.checkFunc(todo) :true
			},	
			async modalPrepereFuncs(todo){
				return  typeof(this.dialogParamsGet.prepereFunc)=='function' ?  await this.dialogParamsGet.prepereFunc(todo) : todo
			},
			async modalFinishFuncs(res){
				let vm=this
				if(typeof(vm.dialogParamsGet.finishFunc)=='function')
					vm.dialogParamsGet.finishFunc(res)
				vm.$root.$emit(vm.componentName+'Finish', res)
				await vm.compDialogShowChange({...vm.dialogLink, isShow:false})
			},
			async close_click(){
				let vm=this
				await this.compDialogShowChange({...vm.dialogLink, isShow:false})
			},
			async save_click(){
				let vm=this
				await this.compDialogShowChange({...vm.dialogLink, isShow:false})
			},			
		},
		async created (){
			let vm=this
			vm.componentName= vm.$h.camelize(vm.$h.nvl(vm.componentName, vm.$vnode.tag.replace( /(vue-component-\d+-)(\w+)/ ,'$2') ) )+vm.$h.idSep+vm.$h.getNewId()
			vm.componentName= vm.componentName[0].toUpperCase()+vm.componentName.slice(1)
			if( vm.$h.nvlo(vm.dialogParamsGet.saveButtonProp,'')!='' && vm.buttonsConfig.save!= undefined ){
				vm.buttonsConfig.save.title=vm.dialogParamsGet.saveButtonProp.title||'$vuetify.system.actions.save'
				vm.buttonsConfig.save.icon=vm.dialogParamsGet.saveButtonProp.icon||'save'
				//vm.buttonsConfig.save.needCheck=vm.$h.nvl(vm.dialogParamsGet.saveButtonProp.needCheck,true)
			}
			await vm.initButtons(vm.buttonsConfig)
			await vm.initDialogs(vm.dialogsConfig)
			await vm.initTables(vm.tablesConfig)
		},
	}
</script>