<template>
    <v-app dark>
		<v-content>
			<slot />
		</v-content>
		<c-head :curentSystem='curentSystem' :showLeft="showLeft" :showRight="showRight" />
		<c-footer />
		<c-msg-list />
		<m-input-fields v-if="showLoginDialog(loginDialogId)" :dialogId="loginDialogId" :hrefBack="authHrefBack" socetHref="/login" socetEvent="auth.login" />
    </v-app>
</template>

<script>
    import CHead from '../components/c-head';
    import CFooter from '../components/c-footer';
    import CMsgList from '../components/c-msg-list';
	import {mapActions, mapGetters} from 'vuex'

    export default {
		data:() => ({
			loginDialogId: Math.floor(Math.random() * MAX_ID),
		}),
		props:{
			curentSystem: {type:  String, required: true},
			authHrefBack: {type:  String},
			showLeft: {type:  Boolean,  default: false},
			showRight: {type:  Boolean,  default: false},
		},
		computed: {
			showLoginDialog(loginDialogId){return this.dialogIsShow(loginDialogId)},			
		},
        components: {
			CHead, CFooter,CMsgList,
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
		},
        methods: {
			...mapActions({
				dialogShow:'dialogShowChange',dialogInit:'dialogInit',
			}),
			 ...mapGetters({
				dialogIsShow:'dialogIsShow',
			}),
		},
		created: function (){
			let vm=this
			vm.dialogInit({daiologId:vm.loginDialogId, daiologTitle:"Авторизация", dialogName:"auth-login"})
			vm.$root.$on('authNeedDialog', (obj)=>{
				vm.dialogShow({daiologId_:vm.loginDialogId,isShow:true})
			}); 
		},
    }
</script>