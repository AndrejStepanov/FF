<template>
	<div>
		<button  v-on:click="curSystem='Clients'"> Clients </button >
		<button  v-on:click="curSystem='AuthorizedClients'"> AuthorizedClients </button >
		<button  v-on:click="curSystem='PersonalAccessTokens'"> PersonalAccessTokens </button >
		<Clients  v-if="curSystem='clients'" />
		<AuthorizedClients  v-if="curSystem='AuthorizedClients'" />
		<PersonalAccessTokens  v-if="curSystem='PersonalAccessTokens'" />

	</div>
</template>

<script>

	import Clients from './components/passport/Clients.vue'
	import AuthorizedClients from './components/passport/AuthorizedClients.vue'
	import PersonalAccessTokens from './components/passport/PersonalAccessTokens.vue'
	export default {
		data: () => ({
			curSystem:''
		}),
		components: {
			Clients,AuthorizedClients,PersonalAccessTokens,
		},
		mixins: [

		],
		methods: {
		},
		created: function (){
		},
	}
</script>