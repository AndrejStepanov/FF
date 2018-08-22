<template>
    <c-app curentSystem="Регистрация"  >
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
						<v-toolbar   class='primary'>
							<v-toolbar-title>Регистрация нового пользователя</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form v-model="valid" ref="form">
								<v-text-field name="Name" prepend-icon="star_border" v-model="name" label="Имя" :rules="[fieldRules.req,fieldRules.min]" type="text" @keyup.enter="submit"></v-text-field>
								<v-text-field name="Login" prepend-icon="person" v-model="login" label="Логин" :rules="[fieldRules.req,fieldRules.min]" type="text" @keyup.enter="submit"></v-text-field>
								<v-text-field name="Password"  prepend-icon="lock" v-model="password"  label="Пароль" :rules="[fieldRules.req,fieldRules.min]" id="password" type="password" @keyup.enter="submit"></v-text-field>
								<v-text-field name="passwordConfirmation"  prepend-icon="lock" v-model="passwordConfirmation"  label="Подтверждение" :rules="[fieldRules.req, fieldRules.passMatch]" id="passwordConfirmation" type="password" @keyup.enter="submit"></v-text-field>
							</v-form>
						</v-card-text>
						<v-layout row justify-center color="primary" >
							<v-flex xs12>
								<v-toolbar slot='header' dense  color="primary" >		
									<v-spacer/>
									<v-btn class='accent' @click="submit "   :disabled="!valid"><v-icon>input</v-icon>&nbsp;Зарегистрироваться</v-btn>
								</v-toolbar>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</c-app>
</template>

<script>
    import CApp from '../components/c-app';

    export default {
        data: () => ({
			valid: false,
			name: '',
			login: '',
			password: '',
			passwordConfirmation: '',
			fieldRules: {
				req: v => !!v || 'Поле обязательное',
				min: v => v.length >= 4 || 'Минимум 4 знаков!',
				passMatch : ()=> password.value == passwordConfirmation.value || 'Не совпадает с паролем!' ,
			},
        }),
        components: {
			CApp,
		},
        methods: {
			submit () {
				let vm = this;
				if (!vm.$refs.form.validate()) 
					return;
				let href_back=window.location.search.match(new RegExp('href_back=([^&=]+)'));
				sendRequest({href:'/register', type:'register', needSucess:'Y', hrefBack:(href_back!=null?href_back[1]:'/'), def:{title:'Ошибка регистрации', text:'Указаны не корректные данные!'},
					data:{name: vm.name, login: vm.login, password: vm.password, password_confirmation: vm.passwordConfirmation,	_token: window.Laravel.csrfToken},  })
			},
		},
    }
</script>