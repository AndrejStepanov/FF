<template>
	<c-app :curentSystem="$vuetify.lang.t('$vuetify.texts.simple.labels.auth')" :panelLeft="{drawer:false}"   >

	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
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