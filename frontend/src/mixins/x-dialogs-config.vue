<script>
	import XStore from '@/mixins/x-store'
	import XButtonsConfig from '@/mixins/x-buttons-config'
	export default {
		data: () => ({	
			componentName:'',
			dialogsConfig: {
				/* оставил для примера, в результирующей компоненте должна быть описана эта структура
				authLogin:{
					id: getNewId(),  
					component:'m-input-fields',  
					title:"$vuetify.system.modals.auth.title", 
					buttons:[{id:1, title:'$vuetify.system.actions.logIn', icon:'input', allig:'right', click:'dialogSave' , needCheck:true}],
					params:{ socetHref:"/login", socetEvent:"auth.login"}, 
				},
				*/
			},	
		}),
		computed: {
			dialogsShowen(){
				return this.compDialogShowen(this.componentName )
			},
		},
		components: {
			MInputFields: () => import('@/modules/inputFields/m-input-fields'), 
			MAcceptProcess: () => import('@/modules/acceptProcess/m-accept-process'), 
		},
		mixins: [
			XStore, XButtonsConfig,
		],
		methods: {
			async openDialog({dialog, params}){
				let vm=this
				if( this.$h.nvl(dialog)=='')
					vm.$h.showMsg( {...vm.$h.getErrDesc('dialogInitNoParam'), textParams:[ 'dialog',  ] } )
				if(  vm.dialogsConfig[dialog]== undefined )
					vm.$h.showMsg( {...vm.$h.getErrDesc('dialogInitWrongName'), textParams:[ vm.componentName, dialog,  ] } )
				params={checkFunc:vm[dialog+'_checkTodo'], prepereFunc: vm[dialog+'_prepereTodo'], finishFunc: vm[dialog+'_finishDialog']||vm.contentRefresh, ...params }
				if(typeof(params.additionParam )=='function')
					params = {...params, ... await params.additionParam(vm)}
				delete params.additionParam
				if(typeof(vm[dialog+'_getParams'])=='function')
					params = {...params, ... await vm[dialog+'_getParams'](params)}
				await vm.compDialogSetParam({comp:vm.componentName, dialog,  params }  )
				await vm.compDialogShowChange({comp:vm.componentName, dialog, isShow:true}  )
			},
			async initDialogs(config){
				let vm=this
				vm.clearDialogs()
				vm.componentName=vm.$h.nvl(vm.componentName, vm.$h.camelize( vm.$vnode.tag.replace( /(vue-component-\d+-)(\w+)/ ,'$2')  )+vm.$h.idSep+vm.$h.getNewId() )
				vm.componentName= vm.componentName[0].toUpperCase()+vm.componentName.slice(1)
				console.log(config);
				for (let dialog in config){
					if(config[dialog].params.method != undefined && typeof(config[dialog].params.method)=='string' )
						config[dialog].params.method = config[dialog].params.method.toLowerCase()
					await vm.compDialogInit({comp:vm.componentName, dialog:dialog,
						config:{name:dialog, title:config[dialog].title, width:config[dialog].width, height:config[dialog].height, buttons:config[dialog].buttons, component:config[dialog].component, }, 
						params:config[dialog].params, parent:vm.dialogLink
					})
				}
			},
			clearDialogs(){
				let vm = this
				vm.compDialogClear({ comp: vm.componentName})	
			},
		},
		created (){
			//let vm=this
			//vm.initDialogs(vm.dialogsConfig) --должен быть в родительском криейте
		},
		beforeDestroy (){
			this.clearDialogs()
		},
	}
</script>