<template>
    <v-app dark>
		<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
					<v-toolbar   class='primary'>
						<v-toolbar-title>Авторизация</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form v-model="valid" ref="form">
							<v-text-field name="Login" prepend-icon="person" v-model="login" label="Пользователь" :rules="nameRules" type="text" @keyup.enter="submit"></v-text-field>
							<v-text-field name="Password"  prepend-icon="lock" v-model="password"  label="Пароль" :rules="emailRules" id="password" type="password" @keyup.enter="submit"></v-text-field>
							<v-checkbox name="remember" label="Запомнить мои данные"  v-model="remember" @keyup.enter="submit" ></v-checkbox>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class='accent' @click="submit "   :disabled="!valid"><v-icon>input</v-icon>&nbsp;Войти</v-btn>
					</v-card-actions>
					</v-card>
				</v-flex>
				</v-layout>
			</v-container>
		</v-content>

		<c-head :curentSystem='curentSystem' />
		<c-footer app/>
		<c-msg-list />
    </v-app>
</template>

<script>
    import CHead from '../components/c-head';
    import CFooter from '../components/c-footer';
    import CMsgList from '../components/c-msg-list';
	
    export default {
        data: () => ({
			valid: false,
			curentSystem: 'Авторизация',
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
            CHead, CFooter,CMsgList,
        },
        methods: {
			submit () {
				let vm = this;
				if (!vm.$refs.form.validate()) 
					return;
				let href_back=window.location.search.match(new RegExp('href_back=([^&=]+)'));
				sendRequest({href:'/login', type:'login', needSucess:'Y', hrefBack:(href_back!=null?href_back[1]:'/'), def:{title:'Ошибка авторизации', text:'Указанные логин или пароль не найдены!'},
					data:{login: vm.login, password: vm.password,	remember: vm.remember,	_token: window.Laravel.csrfToken},  })
			},
        },
    }
</script>