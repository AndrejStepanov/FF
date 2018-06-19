<template>
	<v-speed-dial v-model="fab"  :direction="direction" :open-on-hover="hover" :transition="transition"      >
		<v-btn slot="activator" class="k_second" dark  hover v-model="fab">
			<v-icon>account_circle</v-icon>
			&nbsp;{{UserName}}
		</v-btn>
		<v-btn v-if="UserName=='Гость' "  small color="green" href='\Авторизация'>
			<v-icon>edit</v-icon>
			Авторизоваться
		</v-btn>
		<v-btn  v-if="UserName!='Гость' " small color="indigo" href='\register'> 
			<v-icon>add</v-icon>
			Изменить пароль
		</v-btn>
		<v-btn v-if="UserName!='Гость' " small color="red" @click='logout'>
			<v-icon>delete</v-icon>
			Выйти
		</v-btn>
	</v-speed-dial>
</template>

<script>
    export default {
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
			logout () {
				// Native form submission is not yet supported
				window._Vue.axios.post('/logout', {
					_token: window.Laravel.csrfToken
				}).then((response) => {
					if(response.statusText=='OK'){
						window.location.href = '/';
					}
					else{
						this.$root.bus.$emit('show-message', {title:'Ошибка при завершении сеанса',text:'Завершить сеанс не удалось!'});
					}
				}).catch((error) => {
					this.$root.bus.$emit('show-message', {title:'Ошибка при завершении сеанса',text:'Завершить сеанс не удалось!'});
				});
			},
        },
    }
</script>

<style lang="scss">
    
</style>