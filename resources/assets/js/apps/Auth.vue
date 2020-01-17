<template>
	<c-app :curentSystem="$vuetify.lang.t('$vuetify.texts.simple.labels.auth')" :panelLeft="{drawer:false}"   >

	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
    export default {
        data: () => ({
        }),
		mixins: [
			XApp,XStore,
		],
		created: function (){
		},
		mounted: function(){
			let vm=this 
			setTimeout(()=>vm.$root.$emit('openAuthDialog') )
		}
    }
</script>