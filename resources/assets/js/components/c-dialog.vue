<template>
	<v-dialog v-model="dialog2" max-width="500px">
		<slot>
		</slot>
	</v-dialog>
</template>

<script>
    export default {
		name:'c-dialog',
        data: () => ({
        }),
    }
</script>