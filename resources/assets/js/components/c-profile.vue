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
				// Native form submission is not yet supported
				window._Vue.axios.post('/logout', {
					_token: window.Laravel.csrfToken
				}).then((response) => {
					if(response.statusText=='OK')
						window.location.href = '/';
					else
						this.$root.bus.$emit('show-message', {title:'Ошибка при завершении сеанса',text:'Завершить сеанс не удалось!'});
				}).catch((error) => {
					this.$root.bus.$emit('show-message', {title:'Ошибка при завершении сеанса',text:'Завершить сеанс не удалось!'});
				});
			},
        },
    }
</script>