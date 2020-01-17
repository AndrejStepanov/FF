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
					title:"$vuetify.texts.modals.auth.title", 
					buttons:[{id:1, title:'$vuetify.texts.simple.actions.logIn', icon:'input', allig:'right', click:'dialogSave' , needCheck:true}],
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
				for (name in vm.dialogsConfig)
					if(vm.dialogsConfig[name].id==dialogId ){
						res=1
						vm.dialogModule=vm.dialogsConfig[name].module||'m-input-fields'
						break
					}
				if(res==0)
					showMsg(  getErrDesc('noDialogOpen'));
			},
		},
		created: function (){
			let vm=this
			for (let dialog in vm.dialogsConfig)
				vm.dialogInit({
					config:{id:vm.dialogsConfig[dialog].id, name:dialog, title:vm.dialogsConfig[dialog].title, width:vm.dialogsConfig[dialog].width, height:vm.dialogsConfig[dialog].height, buttons:vm.dialogsConfig[dialog].buttons, }, 
					params:vm.dialogsConfig[dialog].params 
				})
		},
	}
</script>