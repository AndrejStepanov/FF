<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="componentName" :parentLayoutConfig="parentLayoutConfig"  >
		<template #main >
			<v-container class='height--100pr display--flex flex-direction--column' >
				<div class='flex--99 position--relative' >
					<v-alert	prominent	type="error"	>
						<v-row align="center">
							<v-col class="grow">
								{{$vuetify.lang.t(msg)}}
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
		name:'p-no-acces',
		data: () => ({
			armName:'Доступ ограничен',
		}),
		props:{			
			msg: {type: String,	 require:true	},
		},
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