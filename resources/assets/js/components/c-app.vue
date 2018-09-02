<template>
    <v-app dark>
		<v-content>
			<slot />
		</v-content>
		<c-head :curentSystem='curentSystem' :showLeft="showLeft" :showRight="showRight" />
		<c-footer />
		<c-msg-list />
		
		<m-input-fields v-if="isShowenDialog(loginDialogId)" :dialogId="loginDialogId" />
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
			 ...mapGetters({
				dialogIsShow:'dialog/getShow',
			}),	
		},
        components: {
			CHead, CFooter,CMsgList,
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
		},
        methods: {
			isShowenDialog(dialogId){return this.dialogIsShow(dialogId)},	
		},
		created: function (){
			let vm=this
			vm.$store.dispatch('dialog/doInit',{config:{id:vm.loginDialogId, name:"auth-login", title:"Авторизация"}, params:{hrefBack:vm.authHrefBack, socetHref:"/login", socetEvent:"auth.login"} })
		},
    }
</script>