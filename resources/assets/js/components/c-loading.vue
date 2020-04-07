<template>
	<v-container  fluid class="text-xs-center max-height" > 
		<v-layout  class='max-height' row wrap>
			<v-flex column >
				<v-progress-circular :size="size" :width="width" indeterminate color="primary" :style="' top: calc(50% - '+(size/2+topKx)+'px); left: calc(50% - '+size/2+'px);'"/>
			</v-flex>					
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		name:'c-loading',
		data: () => ({     
		}),
		props: {
			size:{type: Number,  default: 70 },
			width:{type: Number,  default: 7 },
			topKx:{type: Number,  default: 0 },
		},
    }
</script>