<template>
	<v-footer padless :fixed="fixed" :app="fixed" :dark="dark" :light="light"> <!---->
		<span >&nbsp;&nbsp;&nbsp;{{ $vuetify.lang.t('$vuetify.system.labels.os.name') }}</span>
		<v-spacer ></v-spacer>
		<span>&copy;  {{ $vuetify.lang.t('$vuetify.system.labels.os.year') }}&nbsp;&nbsp;&nbsp;</span>
	</v-footer>
</template>

<script>
	export default {
		name:'c-footer',
			data: () => ({
		}),
		props:{			
			fixed: {type:  Boolean,  default: false},
			dark: {type:  Boolean, default: false},	
			light: {type:  Boolean, default: false},	
		},
	}
</script>