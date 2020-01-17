<template>
		<v-btn v-if="profileUserName()==''" class="accent"   @click="$root.$emit('openAuthDialog')" > 	&nbsp;{{$vuetify.lang.t('$vuetify.texts.simple.labels.auth')}}&nbsp;		<v-icon >account_circle</v-icon> 	</v-btn>	
		<v-btn v-else 						class="accent"   @click="$root.$emit('systemLogout')" > 	&nbsp;{{profileUserName()}}&nbsp;											<v-icon >close</v-icon>  			</v-btn>	
</template>

<script>
//
	import XStore from '../mixins/x-store'
	export default {
		name:'c-profile',
		data: () => ({
			fab: true,
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