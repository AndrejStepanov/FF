<template>
	<v-container  fluid class="text-xs-center max-height" > 
		<v-layout  class='max-height' row wrap>
			<v-flex column >
				<v-progress-circular :size="70" :width="7" indeterminate color="primary" style=" top: calc(50% - 35px); left: calc(50% - 35px);"/>
			</v-flex>					
		</v-layout>
	</v-container>
</template>

<script>
    export default {
        name:'c-loading',
        data: () => ({     
        }),
    }
</script>