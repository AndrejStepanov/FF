<template>
	<c-app curentSystem="Авторизация" >

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