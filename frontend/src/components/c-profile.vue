<template>
		<v-btn v-if="profileUserLogin()==''" 	
			class="accent"   @click="$root.$emit('systemLogin')" > 		&nbsp;{{$vuetify.lang.t('$vuetify.system.labels.auth')}}&nbsp;				<v-icon >account_circle</v-icon> 	</v-btn>	
		<v-btn v-else-if="profileUserLogin()==guestLogin" 
			class="accent"   @click="$root.$emit('systemLogin')" > 		&nbsp;{{profileUserName()}}&nbsp;											<v-icon >account_circle</v-icon> 	</v-btn>	
		<v-btn v-else 							 
			class="accent"   @click="$root.$emit('systemLogout')" > 	&nbsp;{{profileUserName()}}&nbsp;											<v-icon >close</v-icon>  			</v-btn>	
</template>

<script>
//
	import XStore from '@/mixins/x-store'
	export default {
		name:'c-profile',
		data: () => ({
			guestLogin:process.env.VUE_APP_API_GUEST_LOGIN,
			hover: false,//открывать при наведении
		}),		
		mixins: [
			XStore,
		],
		methods: {
		},
		created: function (){
		},
		mounted: function (){	
		},
	}
</script>