<script>
	import XStore from '@/mixins/x-store'
	export default {
		data: () => ({
			buttonsConfig:{
			},
			buttonsConfigCheckDisable:{},
			buttonsConfigListeners:{},	
		}),
		computed: {
			compButtonsGet(){
				return this.compButtonByName(this.componentName)
			}
		},
		watch: {
			buttonsConfig(val, valOld){
				this.initButtons(val)
			},
		},
		components: {
		},
		mixins: [
			XStore,
		],
		methods: {
			buttonDisableCheck(variable,valArr){
				let vm=this
				vm.$h.nvl(vm.buttonsConfigCheckDisable[variable],[]).forEach( row=>{
					vm.compButtonSetDisable({ comp: vm.componentName , button: row.name , value: row.checkDisable.type=='multy' && !(valArr.length>0) || row.checkDisable.type=='one' && !(valArr.length==1) 	})
				})
			},
			async initButtons(config){
				let vm = this, storeButtons ={}
				vm.clearButtons()
				
				await vm.compButtonInit({ comp: vm.componentName , buttons:config	})				
				for(let button in config ) {
					let tmp =config[button].checkDisable
					if(tmp== undefined)
						continue
					if(vm.buttonsConfigCheckDisable[tmp.var]== undefined)
						vm.$set( vm.buttonsConfigCheckDisable, tmp.var, [])
					vm.buttonsConfigCheckDisable[tmp.var].push({...config[button], name: button,})
				}

				for(let variable in vm.buttonsConfigCheckDisable ) {
					vm.buttonsConfigCheckDisable[variable].unwatch = vm.$watch(variable , newVal=> vm.buttonDisableCheck(variable,newVal) )
					vm.buttonDisableCheck(variable,vm[variable])
				}
				storeButtons =  vm.compButtonByName(vm.componentName)
				for(let button in storeButtons ) {
					if(  storeButtons[button].eventOrig == 'openDialogUniversal' && vm.dialogsConfig!= undefined )
						vm.$set( vm.dialogsConfig, button, 
							{	id:-1,  ...storeButtons[button].dialogConfig,	params:storeButtons[button].dialogParams, 	} 
						) 
					console.log(vm.dialogsConfig );
					if(vm.buttonsConfigListeners[ storeButtons[button].event ] != undefined )
						continue
					if( typeof(vm[ storeButtons[button].eventOrig +'_click'])=='function' )
						vm.buttonsConfigListeners[ storeButtons[button].event ] = vm[ storeButtons[button].eventOrig +'_click']
					else if(  storeButtons[button].eventOrig == 'openDialogUniversal'  )
						vm.buttonsConfigListeners[ storeButtons[button].event ]	= (params)=>vm.openDialog({dialog:button, params})
					else
						continue
					vm.$root.$on(storeButtons[button].event , vm.buttonsConfigListeners[ storeButtons[button].event ] )
				}
			},
			clearButtons(){
				let vm = this
				for(let variable in vm.buttonsConfigCheckDisable ) 
					vm.buttonsConfigCheckDisable[variable].unwatch()
				for(let variable in vm.buttonsConfigListeners ) 
					vm.$root.$off(variable, vm.buttonsConfigListeners[variable] )
				vm.buttonsConfigListeners={}
				vm.buttonsConfigCheckDisable={}
				vm.compButtonClear({ comp: vm.componentName})	
			},
		},
		async created (){
			//let vm=this
			//vm.initButtons(vm.buttonsConfig)--должен быть в родительском криейте
		},
		beforeDestroy (){
			this.clearButtons()
		},
	}
</script>