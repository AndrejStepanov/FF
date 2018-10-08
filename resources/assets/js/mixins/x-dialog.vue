<script>
	export default {
		data: () => ({
			dialogIdOpened:0,
			dialogModule:'',	
			dialogsConfig: {
				/*
				trace:{id: getNewId(),  module:'m-input-fields',  name:"object-tree-add", title:"Параметры объекта", width:1024, height:600, params:{socetHref:"/data_command", socetEvent:"object.tree.add"},kyes:{treeId:0}, }
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
						vm.dialogModule=vm.dialogsConfig[name].module
						break
					}
				if(res==0)
					showMsg( {title:'Ошибка при открытии окна',text:'Идентификатор запрашиваемого окна не найден!'});
			},
		},
		created: function (){
			let vm=this
			for (let dialog in vm.dialogsConfig)
				vm.dialogInit({
					config:{id:vm.dialogsConfig[dialog].id, name:vm.dialogsConfig[dialog].name, title:vm.dialogsConfig[dialog].title, width:vm.dialogsConfig[dialog].width, height:vm.dialogsConfig[dialog].height}, 
					params:vm.dialogsConfig[dialog].params })
		},
	}
</script>