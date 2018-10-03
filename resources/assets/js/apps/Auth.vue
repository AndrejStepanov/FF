<template>
	<c-app curentSystem="Авторизация" :authHrefBack="hrefBack" >

	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	import XStore from '../mixins/x-store'
    export default {
        data: () => ({
			hrefBack:'/',
        }),
		mixins: [
			XApp,XStore,
		],
		created: function (){
			let vm=this
			let _hrefBack=window.location.search.match(new RegExp('href_back=([^&=]+)'));
			vm.hrefBack=_hrefBack!=null?_hrefBack[1]:'/'
		},
		mounted: function(){
			let vm=this
			setTimeout(()=>vm.dialogShowChange({name:"auth-login", isShow:true}))
		}
    }
</script>