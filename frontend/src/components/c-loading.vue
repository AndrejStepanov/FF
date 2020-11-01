<template>
	<v-container  fluid class="text-xs-center height--100pr overflow-hidden" > 
		<v-layout  class='height--100pr' row wrap>
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