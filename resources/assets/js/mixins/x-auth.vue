<script>
	import XStore from '../mixins/x-store'
	export default {
		data: () => ({
			userTicket:'',
			dialogsConfig: {
				authLogin:{
					id: getNewId(),  title:"$vuetify.texts.modals.auth.title", module:'m-input-fields', width:300, 
					params:{ socetHref:"/login", socetEvent:"auth.login", saveButtonProp: {title:'$vuetify.texts.simple.actions.logIn', icon:'input'}, }, 
				},
			},
		}),		
		mixins: [
			XStore,
		],
		methods: {
			login(){
				let vm=this,
				 	_hrefBack=getLocationParam('auth_href_back')
				if(vm.profileUserName()!='')
					return
				_hrefBack=_hrefBack!=null?_hrefBack:window.location.origin+'\\user'
				window.location.href = "\\auth?auth_href_back="+_hrefBack
			},			
			logout () {
				sendRequest({href:'/logout', type:'logout', needSucess:'Y', hrefBack:'/' } )
			},
			subscribeTicket(newTicket){
				let vm=this,
				 	_hrefBack=getLocationParam('auth_href_back')
				if(vm.userTicket!='' )
					window.echo.connector.channels['channel.AuthChange.'+vm.userTicket].unsubscribe()
				vm.userTicket=newTicket
				window.echo.channel('channel.AuthChange.'+vm.userTicket )
				.listen('.session.open', (e) => {
					vm.profileLog({userName:e.data.name,userId:e.data.userId, isRoot:e.data.isRoot, avatar:e.data.avatar})
					vm.subscribeTicket(e.data.newTicket)
					showMsg({...getMsgDesc('loginSucsess'),   msgParams:[e.data.name],}	)
					if(_hrefBack!=null)
						window.location.href = decodeURIComponent(_hrefBack)
				})
				.listen('.session.close', (e) => {
					if(vm.profileUserId()!='' && vm.profileUserId()==e.data.userId)
						vm.profileLogout()
					vm.subscribeTicket(e.data.newTicket)
					showMsg(getMsgDesc('logoutSucsess') )
				});
			},
		},
		created: function (){
			let vm=this
			vm.$root.$on('systemLogin', ()=>{
				vm.login();
			});
			vm.$root.$on('systemLogout', ()=>{
				vm.logout();
			});
		},
	 	mounted: function (){	
			let vm=this
			let userInfo = window.userInfo||{}
			if(nvl(userInfo.name)!='')
				vm.profileLog({userName:userInfo.name, userId:userInfo.userId, isRoot:userInfo.isRoot, avatar:userInfo.avatar})
			else
				vm.profileLogout()
			vm.subscribeTicket(window.laravel.ticket)
		},
	}
</script>