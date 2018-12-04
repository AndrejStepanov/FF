<template>
	<c-app :curentSystem="$vuetify.t('$vuetify.texts.main.links.obgView.name')" :panelRight="{show:true, class:'display--flex flex-direction--column', filter:true}" :mainPanelConfig="mainPanelConfig">
		<template slot="panelRight">
			<c-filter filterName="object-tree-add" />
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