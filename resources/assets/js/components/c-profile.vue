<template>
	<v-speed-dial v-model="fab"  direction="bottom" :open-on-hover="hover" transition="scale-transition"      >
		<v-btn slot="activator" class="accent"  hover v-model="fab">						<v-icon>account_circle</v-icon> &nbsp;{{userName()}}			</v-btn>
		<v-btn v-if="userName()=='Гость' "  small class="secondary"  @click='login' >			<v-icon>edit</v-icon>			&nbsp;Авторизоваться		</v-btn>
		<v-btn v-if="userName()=='Гость' "  small class="secondary"  @click='registration' >	<v-icon>person_add</v-icon>		&nbsp;Зарегистрироваться	</v-btn>		
		<v-btn  v-if="userName()!='Гость' " small class="secondary" href='\register'> 		<v-icon>add</v-icon>			&nbsp;Изменить пароль		</v-btn>
		<v-btn v-if="userName()!='Гость' " small class="secondary" @click='logout'>			<v-icon>delete</v-icon>			&nbsp; Выйти				</v-btn>
	</v-speed-dial>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex'
	export default {
		name:'c-profile',
		data: () => ({
			fab: false,
			hover: false,
			userTicket:'',
		}),
	 	mounted: function (){	
			let vm=this
			let User_info = window.User_info||{}
			if(nvl(User_info.name)!='')
				vm.$store.dispatch('userLogin',{userName:User_info.name,userId:User_info.userId, sysId:User_info.sysId, isRoot:User_info.isRoot})
			vm.subscribeTicket(window.Laravel.ticket)
		},		
		computed: {
			...mapGetters({
				userName: 'getUserName',
				userId: 'getUserId',
				sysId: 'getSysId',
			}),
		},
		methods: {
			login(){
				this.$root.$emit('authNeedDialog'); 
				//window.location.href = "\\Авторизация?href_back="+window.location.href;
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
					window.Echo.connector.channels['channel.AuthChange.'+vm.userTicket].unsubscribe()
				vm.userTicket=newTicket
				window.Echo.channel('channel.AuthChange.'+vm.userTicket )
				.listen('.session.open', (e) => {
					this.$store.dispatch('userLogin',{userName:e.data.name,userId:e.data.userId, sysId:e.data.sysId, isRoot:e.data.isRoot});
					vm.subscribeTicket(e.data.newTicket)
					vm.$store.dispatch('msgAdding', {title:'Авторизация',text:'Выполнен вход под пользователем '+e.data.name+'!', type:'success'});
				})
				.listen('.session.close', (e) => {
					if(this.userId()!='' && this.userId()==e.data.userId || this.sysId()!='' && this.sysId()==e.data.sysId)
						this.$store.dispatch('userLogout');
					vm.subscribeTicket(e.data.newTicket)
					vm.$store.dispatch('msgAdding', {title:'Авторизация',text:'Пользователь завершил свой сеанс!', type:'success'});
				});
			},
		},
	}
</script>