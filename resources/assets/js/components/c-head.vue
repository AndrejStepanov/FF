<template>
	<v-app-bar class=' transparent  elevation-0 mt-0 no-clcik'   :app="fixed" :fixed="fixed"  :absolute="!fixed" dense :hideOnScroll="headHideOnScroll" :elevateOnScroll="headElevateOnScroll" >
		<v-app-bar-nav-icon @click="toolbarClicked('Left')"  v-if="showLeft" color='accent' class='get-clcik'  />
		<v-toolbar-title v-if="$vuetify.breakpoint.name!='xs' && needLabel" >{{curentSystem}}</v-toolbar-title>
		<v-spacer/>
		<v-icon v-if="profileUserName()!='' && withSearch" color='accent' class='get-clcik' @click="searchClick">search</v-icon>
		 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<c-profile class='get-clcik'/>
		<v-app-bar-nav-icon @click="toolbarClicked('Right')"  v-if="showRight" color='accent' class='get-clcik'/>
	</v-app-bar>
</template>

<script>
	import CProfile from './c-profile'
	import XStore from '../mixins/x-store'
	export default {
		name:'c-head',

		data: () => ({            
		}),
		props: {
			curentSystem:{type: String,  default: '' },
			showLeft:{type: Boolean,  default: false },
			showRight:{type: Boolean,  default: false },
			needLabel:{type: Boolean,  default: true },
			neeedSearch:{type: Boolean,  default: false },
			headHideOnScroll:{type: Boolean,  default: false },
			headElevateOnScroll:{type: Boolean,  default: false },
			fixed: {type:  Boolean,  default: false},
		},
		computed: {
			withSearch(){return this.neeedSearch && top.location.pathname!='/search'}
		},
		components: {
			CProfile,
		},
		mixins: [
			XStore,
		],
		methods:{
			toolbarClicked(side){
				this.$root.$emit('headDrawer'+side+'Click')
			},
			searchClick(){
				let vm=this
				window.location.href = "\\search"
			},
		}
	}
</script>
<style>
	.no-clcik       {pointer-events: none;}
	.get-clcik      {pointer-events: auto;}
</style>