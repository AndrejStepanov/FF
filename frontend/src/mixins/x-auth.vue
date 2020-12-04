<script>
	export default {
		data: () => ({
			userTicket:'',
			logoutDoing:false,
			dialogsConfig: {
				authLogin:{
					id:-1,  title:'$vuetify.system.modals.auth.title', module:'m-input-fields', width:300, 
					params:{href:'oauth/token',  method:'post', headers:{Authorization:''},
						todoExt:{grant_type: process.env.VUE_APP_API_GRANT_TYPE, client_id: process.env.VUE_APP_API_CLIENT_ID, client_secret: process.env.VUE_APP_API_CLIENT_SECRET},
						saveButtonProp: {title:'$vuetify.system.simple.actions.logIn', icon:'input', }, 
						inputGroup:'authLogin',
					}, 
				},
			},
		}),		
		mixins: [
		],
		methods: {
			clearStorageAuth(){
				localStorage.authAccessToken = ''
				localStorage.authExpiresIn = 0
				localStorage.authRefreshToken = ''
				localStorage.authTokenType = ''
				localStorage.authRemember = 0
				localStorage.authIsRoot = false
				localStorage.authIsGuest = true
			},
			async initProfile(){
				let vm=this,
					now=new Date().getTime()/1000
				if(vm.$h.nvl(localStorage.authAccessToken)==''){
					await vm.loginGuest()
					if(vm.$h.nvl(localStorage.authAccessToken)=='')
						vm.$h.showMsg(vm.$h.getErrDesc('loginGuestFail') )
					return
				}
				else if(now>localStorage.authExpiresIn){
					vm.clearStorageAuth()
					await vm.initProfile() // логин гостем
					return
				}
				else
					vm.profileSetToken({token:localStorage.authAccessToken, expiresIn:localStorage.authExpiresIn, refreshToken:localStorage.authRefreshToken, tokenType:localStorage.authTokenType, tokenRemember:localStorage.authRemember,} )
				await vm.retrieveUserInfo()
			},
			async loginGuest(){
				let vm=this
				await vm.login({username:process.env.VUE_APP_API_GUEST_LOGIN, password:process.env.VUE_APP_API_GUEST_PASSWORD, })
			},
			async login({username, password, remember }){
				let vm=this,
					response={}
				response = await vm.$h.sendRequest( { href:'oauth/token', method:'post', data:{ username, password, grant_type: process.env.VUE_APP_API_GRANT_TYPE, client_id: process.env.VUE_APP_API_CLIENT_ID, client_secret: process.env.VUE_APP_API_CLIENT_SECRET} } )
				if(!response)
					return
				await vm.loginResponseProcess({response, remember})
			},
			async loginResponseProcess({response, todo, remember}){
				let vm=this,
					now=new Date().getTime()/1000
				todo=todo||{}
				remember= remember || vm.$h.nvl(todo.remember,'')
				if(localStorage.authAccessToken !='' && localStorage.authExpiresIn > now)
					await vm.logout()
				localStorage.authAccessToken = response.data.access_token
				localStorage.authExpiresIn = response.data.expires_in + now
				localStorage.authRefreshToken = response.data.refresh_token
				localStorage.authTokenType = response.data.token_type
				localStorage.authRemember = remember
				vm.profileSetToken({token:localStorage.authAccessToken, expiresIn:localStorage.authExpiresIn, refreshToken:localStorage.authRefreshToken, tokenType:localStorage.authTokenType, tokenRemember:localStorage.authRemember,} )
				await vm.retrieveUserInfo()
				vm.$root.$emit('loginProcessed')
				vm.$h.showMsg({...vm.$h.getMsgDesc('loginSucsess'),   textParams:[ vm.profileUserName ]}	)
			},
			async retrieveUserInfo(){
				let vm=this,
					response={}
				response = await vm.$h.sendRequest( { href:'api/user' } )
				if(!response)
					return
				vm.profileLog({userName:response.data.name, userId:response.data.id, isRoot:response.data.is_root, avatar:response.data.avatar, 
					login:response.data.login, email:response.data.email, firstname:response.data.firstname, lastname:response.data.lastname, systemLanguage:response.data.systemLanguage })
				localStorage.authIsRoot = response.data.is_root
				localStorage.authIsGuest = response.data.login=='guest'
				vm.$vuetify.lang.current=response.data.systemLanguage
				vm.$root.$emit('userInfoRetrieved')				
			},
			async logout(){
				let vm = this,
					isGuest= vm.profileUserLogin==process.env.VUE_APP_API_GUEST_LOGIN
				await vm.$h.sendRequest( { href:'api/user/logout' } )
				vm.clearStorageAuth()
				vm.profileLogout()
				vm.$root.$emit('logoutProcessed')				
				if(!isGuest)
					vm.$h.showMsg(vm.$h.getMsgDesc('logoutSucsess') )
			},
			async authLogin_finishDialog({response, todo}){
				await this.loginResponseProcess({response, todo})
			},
		},
		created: async function (){
			let vm=this
			vm.$root.$on('systemLogin', ()=>{
				vm.openDialog({name:'authLogin'})
			})
			vm.$root.$on('systemLogout', async ()=>{
				if(vm.logoutDoing)
					return
				vm.logoutDoing=true
				await vm.logout()
				await vm.loginGuest()
				vm.logoutDoing=false
			})
			vm.initProfile()
		},
		mounted: function (){	

			//localStorage.
			/*let userInfo = window.userInfo||{}
			if(nvl(userInfo.name)!='')
				vm.profileLog({userName:userInfo.name, userId:userInfo.userId, isRoot:userInfo.isRoot, avatar:userInfo.avatar})
			else
				vm.profileLogout()
			vm.subscribeTicket(window.laravel.ticket)*/
		},
	}
</script>