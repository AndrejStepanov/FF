<template>
	<c-app :curentSystem="$vuetify.lang.t('$vuetify.texts.main.links.obgView.name')" :panelRight="{show:true, class:'display--flex flex-direction--column', filter:true}" :mainPanelConfig="mainPanelConfig">
		<template v-slot:panelRight>
			<div class='display--flex flex-direction--column max-height'>
				<c-filter filterName="object-tree-add" />
			</div>
		</template>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
	import CFilter from '../components/c-filter'
	export default {
		data: () => ({
			mainPanelConfig: {  name: 'first',   width:'100%',	height:'100%',  layout: 'vertical' },
		}),
		computed: {
		},
		components: {
			CFilter
		},
		mixins: [
			XApp,XStore,
		],
		methods: {

		},
		created: function (){
			let vm= this
		},
	}
</script>

<style lang="scss">
</style>