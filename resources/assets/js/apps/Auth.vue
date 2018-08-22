<template>
	<c-app curentSystem="Авторизация" :authHrefBack="hrefBack" >

	</c-app>
</template>

<script>
    import CApp from '../components/c-app';

    export default {
        data: () => ({
			hrefBack:'/',
        }),
        components: {
			CApp,
		},
		created: function (){
			let vm=this
			let _hrefBack=window.location.search.match(new RegExp('href_back=([^&=]+)'));
			vm.hrefBack=_hrefBack!=null?_hrefBack[1]:'/'
		},
		mounted: function(){
			let vm=this
			setTimeout(()=>vm.$root.$emit('authNeedDialog'),500) 
		}
    }
</script>