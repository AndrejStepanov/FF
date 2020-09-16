<script>
	export default {
		data: () => ({
			dialogIdOpened:0,
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
		methods: {
			dialogIsShowen(dialogId){return this.dialogIsShow(dialogId)},	
			dialogShow(dialogId){
				let vm=this
				vm.dialogSelect(dialogId)
				vm.dialogShowChange({id:dialogId, isShow:true}  )
			},
			dialogSelect(dialogId){//что бы инициализировать компоненту шблонного окна
				let vm=this, res=0
				vm.dialogIdOpened=dialogId
				for ( let name in vm.dialogsConfig)
					if(vm.dialogsConfig[name].id==dialogId ){
						res=1
						vm.dialogModule=vm.dialogsConfig[name].module||'m-input-fields'
						break
					}
				if(res==0)
					vm.$h.showMsg(  vm.$h.getErrDesc('noDialogOpen'));
			},
		},
		created: function (){
			let vm=this
			for (let dialog in vm.dialogsConfig){
				if(vm.dialogsConfig[dialog].id==-1)
					vm.dialogsConfig[dialog].id= vm.$h.getNewId()
				vm.dialogInit({
					config:{id:vm.dialogsConfig[dialog].id, name:dialog, title:vm.dialogsConfig[dialog].title, width:vm.dialogsConfig[dialog].width, height:vm.dialogsConfig[dialog].height, buttons:vm.dialogsConfig[dialog].buttons, }, 
					params:vm.dialogsConfig[dialog].params 
				})
			}
		},
	}
</script>