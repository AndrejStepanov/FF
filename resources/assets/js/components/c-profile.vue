<template>
	<v-speed-dial v-model="fab"  direction="bottom" :open-on-hover="hover" transition="scale-transition" >
		<v-btn slot="activator" class="accent"  hover v-model="fab">									<v-icon>account_circle</v-icon> &nbsp;{{profileUserName()}}		</v-btn>
		<v-btn v-if="profileUserName()=='Гость' "  	small class="secondary"	@click='login' >			<v-icon>edit</v-icon>			&nbsp;Авторизоваться			</v-btn>
		<v-btn v-if="profileUserName()=='Гость' "  	small class="secondary"	@click='registration' >		<v-icon>person_add</v-icon>		&nbsp;Зарегистрироваться		</v-btn>		
		<v-btn v-if="profileUserName()!='Гость' " 	small class="secondary"	href='\register'> 			<v-icon>add</v-icon>			&nbsp;Изменить пароль			</v-btn>
		<v-btn v-if="profileUserName()!='Гость' " 	small class="secondary"	@click='logout'>			<v-icon>delete</v-icon>			&nbsp; Выйти					</v-btn>
	</v-speed-dial>
</template>

<script>
	import XStore from '../mixins/x-store'
	export default {
		name:'c-profile',
		data: () => ({
			fab: false,
			hover: false,//открывать при наведении
			userTicket:'',
		}),		
		mixins: [
			XStore,
		],
		methods: {
			login(){
				let vm=this
				vm.dialogShowChange({name:"auth-login", isShow:true})
			},
			registration(){
				window.location.href = "\\Регистрация?href_back="+window.location.href;
			},			
			logout () {
				sendRequest({href:'/logout', type:'logout', needSucess:'Y', hrefBack:'/', def:{title:'Ошибка при завершении сеанса',text:'Завершить сеанс не удалось!'}} )
			},
			subscribeTicket(newTicket){
				let vm=this
				if(vm.userTicket!='' )
					window.echo.connector.channels['channel.AuthChange.'+vm.userTicket].unsubscribe()
				vm.userTicket=newTicket
				window.echo.channel('channel.AuthChange.'+vm.userTicket )
				.listen('.session.open', (e) => {
					vm.profileLog({userName:e.data.name,userId:e.data.userId, sysId:e.data.sysId, isRoot:e.data.isRoot});
					vm.subscribeTicket(e.data.newTicket)
					showMsg({title:'Авторизация',text:'Выполнен вход под пользователем '+e.data.name+'!',  type:'success'});
				})
				.listen('.session.close', (e) => {
					if(vm.profileUserId()!='' && vm.profileUserId()==e.data.userId || vm.profileSysId()!='' && vm.profileSysId()==e.data.sysId)
						vm.profileLogout();
					vm.subscribeTicket(e.data.newTicket)
					showMsg({title:'Авторизация',text:'Пользователь завершил свой сеанс!',  type:'success'  });
				});
			},
		},
	 	mounted: function (){	
			let vm=this
			let userInfo = window.userInfo||{}
			if(nvl(userInfo.name)!='')
				vm.profileLog({userName:userInfo.name, userId:userInfo.userId, sysId:userInfo.sysId, isRoot:userInfo.isRoot})
			vm.subscribeTicket(window.laravel.ticket)
		},
	}
</script>