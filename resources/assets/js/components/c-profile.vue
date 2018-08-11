<template>
	<v-speed-dial v-model="fab"  :direction="direction" :open-on-hover="hover" :transition="transition"      >
		<v-btn slot="activator" class="accent"  hover v-model="fab">
			<v-icon>account_circle</v-icon>
			&nbsp;{{UserName}}
		</v-btn>
		<v-btn v-if="UserName=='Гость' "  small class="secondary"  @click='login' >
			<v-icon>edit</v-icon>
			Авторизоваться
		</v-btn>
		<v-btn  v-if="UserName!='Гость' " small class="secondary" href='\register'> 
			<v-icon>add</v-icon>
			Изменить пароль
		</v-btn>
		<v-btn v-if="UserName!='Гость' " small class="secondary" @click='logout'>
			<v-icon>delete</v-icon>
			Выйти
		</v-btn>
	</v-speed-dial>
</template>

<script>
    export default {
		name:'c-profile',
        data: () => ({
            direction: 'bottom',
            fab: false,
            hover: false,
            UserName: false,
            transition: 'scale-transition',
			
		}),
        created: function (){			
			this.UserName=  window.User_info.name||'Гость';
			
		},
        methods: {
			login(){
				window.location.href = "\\Авторизация?href_back="+window.location.href;
			},
			logout () {
				let vm = this;
				// Native form submission is not yet supported
				sendRequest({href:'/logout', type:'logout', needSucess:'Y', hrefBack:'/', def:{title:'Ошибка при завершении сеанса',text:'Завершить сеанс не удалось!'}} )
			},
        },
    }
</script>