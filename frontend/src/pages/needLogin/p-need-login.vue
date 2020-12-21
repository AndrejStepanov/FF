<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="componentName" :parentLayoutConfig="parentLayoutConfig"  >
		<template #main >
			<v-container class='height--100pr display--flex flex-direction--column' >
				<div class='flex--99 position--relative' >
					<v-alert	prominent	type="error"	>
						<v-row align="center">
							<v-col class="grow">
								{{$vuetify.lang.t('$vuetify.system.msgs.needLogin')}}
							</v-col>
							<v-col class="shrink">
								<v-btn @click=" $root.$emit('systemLogin')">{{$vuetify.lang.t('$vuetify.system.actions.logIn')}}  <v-icon class='ml-2' v-text="'account_circle'"	/> </v-btn>
							</v-col>
						</v-row>
					</v-alert>
				</div>
			</v-container>
		</template>
	</c-layouts-slots>
</template>
<script>
/*

*/
	import XPage from '@/mixins/x-page'
	export default {
		name:'p-need-login',
		data: () => ({
			armName:'Необходима авторизация',
		}),
		computed: {
		},
		mixins: [
			XPage,
		],
		methods: {
		},
		created: async function (){
			let vm = this
			vm.systemCurArmNameChange({name:vm.armName})
		},
	}
</script>