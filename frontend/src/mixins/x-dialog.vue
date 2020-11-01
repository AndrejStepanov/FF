<script>
	import XStore from '../mixins/x-store'
	export default {
		data: () => ({
			dialogRes:null,
			dialogIdOpened:0,
			dialogNameOpened:'',
			dialogModule:'',	
			dialogsConfig: {
				/* оставил для примера, в результирующей компоненте должна быть описана эта структура
				authLogin:{
					id: getNewId(),  
					module:'m-input-fields',  
					title:"$vuetify.system.modals.auth.title", 
					buttons:[{id:1, title:'$vuetify.system.simple.actions.logIn', icon:'input', allig:'right', click:'dialogSave' , needCheck:true}],
					params:{ socetHref:"/login", socetEvent:"auth.login"}, 
				},
				*/
			},	
		}),
		computed: {
		},
		mixins: [
			XStore,
		],
		methods: {
			dialogIsShowen(dialogId){return this.dialogIsShow(dialogId)},	
			openDialog({dialogId, name}){
				let vm=this
				if( this.$h.nvl(dialogId)=='' &&  this.$h.nvl(name)=='')
					vm.$h.showMsg(  vm.$h.getErrDesc('noDialogInitId'))
				if (this.$h.nvl(name)=='')
					for ( let configName in vm.dialogsConfig)
						if(vm.dialogsConfig[configName].id==dialogId )
							name=configName
				if(vm.dialogsConfig[name] == undefined )
					vm.$h.showMsg(  vm.$h.getErrDesc('noDialogOpen'))
				dialogId=vm.dialogsConfig[name].id
				if(vm[name+'_getParams']!=undefined)
					vm.dialogSetParamByName({id:dialogId, params: vm[name+'_getParams']()   }  )
				vm.dialogIdOpened= dialogId 
				vm.dialogModule=vm.dialogsConfig[name].module||'m-input-fields'
				vm.dialogShowChange({id:dialogId, isShow:true}  )
			},
			saveDialog({id,payload}){
				let vm=this,
					name = vm.dialogById(id).config.name
				if(vm[name+'_saveDialog']!=undefined)
					vm[name+'_saveDialog'](payload)
			},
		},
		created: function (){
			let vm=this
			for (let dialog in vm.dialogsConfig){
				if(vm.$h.nvl(vm.dialogsConfig[dialog].id,-1)==-1)
					vm.dialogsConfig[dialog].id= vm.$h.getNewId()
				vm.dialogInit({
					config:{id:vm.dialogsConfig[dialog].id, name:dialog, title:vm.dialogsConfig[dialog].title, width:vm.dialogsConfig[dialog].width, height:vm.dialogsConfig[dialog].height, buttons:vm.dialogsConfig[dialog].buttons, }, 
					params:vm.dialogsConfig[dialog].params 
				})
			}
		},
	}
</script>