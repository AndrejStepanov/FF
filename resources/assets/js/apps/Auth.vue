<template>
    <v-app dark>
        <k-head :cur_sys='cur_sys' > </k-head>
		<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
					<v-toolbar dark class='nav_head'>
						<v-toolbar-title>Авторизация</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form v-model="valid" ref="form">
							<v-text-field name="Login" prepend-icon="person" v-model="login" label="Пользователь" :rules="nameRules" type="text" @keyup.enter="submit"></v-text-field>
							<v-text-field name="Password" prepend-icon="lock" v-model="password"  label="Пароль" :rules="emailRules" id="password" type="password" @keyup.enter="submit"></v-text-field>
							<v-checkbox name="remember" label="Запомнить мои данные"  v-model="remember" @keyup.enter="submit" ></v-checkbox>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class='k_second' @click="submit "   :disabled="!valid">Войти</v-btn>
					</v-card-actions>
					</v-card>
				</v-flex>
				</v-layout>
			</v-container>
		</v-content>
        <k-footer  > </k-footer>
		<k-msg ref='msg'></k-msg>
    </v-app>
</template>

<script>
    import head from '../components/k-head';
    import footer from '../components/k-footer';
    import msg from '../components/k-msg';
	
    export default {
        data: () => ({
			valid: false,
			cur_sys: 'Авторизация',
			remember: '',
			login: '',
			nameRules: [
				v => !!v || 'Поле обязательное',
			],
			password: '',
			emailRules: [
				v => !!v || 'Поле обязательное',
			],
        }),
        components: {
            'k-head': head,
            'k-footer':footer,
            'k-msg':msg,
        },
        methods: {
			submit () {
				if (!this.$refs.form.validate()) 
					return;
				// Native form submission is not yet supported
				window._Vue.axios.post('/login', {
					login: this.login,
					password: this.password,
					remember: this.remember,
					_token: window.Laravel.csrfToken
				}).then((response) => {
					if(response.data=='sucsess')
						window.location.href = '/';
					else{
						this.$root.$emit('show-message', {title:'Ошибка автороизации',text:'Указанные логин или пароль не найдены!'});
					}
				}).catch((error) => {
					this.$root.$emit('show-message', {title:'Ошибка автороизации',text:'Указанные логин или пароль не найдены!'});
				});
			},
        },
    }
</script>

<style lang="scss">
    
</style>