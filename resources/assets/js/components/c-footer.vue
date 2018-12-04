<template>
	<v-footer class='primary bold padding-right--0 ' :fixed="fixed" :app="fixed"> <!---->
		<span >&nbsp;&nbsp;&nbsp;{{ $vuetify.t('$vuetify.texts.simple.labels.os.name') }}</span>
		<v-spacer ></v-spacer>
		<span>&copy;  {{ $vuetify.t('$vuetify.texts.simple.labels.os.year') }}&nbsp;&nbsp;&nbsp;</span>
	</v-footer>
</template>

<script>

    export default {
		name:'c-footer',
        	data: () => ({
		}),
		props:{			
			fixed: {type:  Boolean,  default: false},
		},
    }
</script>