<template>
	<c-dialog>
		<v-card>
			<v-card-title>Dialog 2</v-card-title>
			<v-card-text>
				<v-btn color="primary" dark @click.stop="dialog3 = !dialog3">Open Dialog 3</v-btn>
				<v-select :items="select" label="A Select List"	item-value="text"	/>
			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
			</v-card-actions>
		</v-card>
	</c-dialog>
</template>

<script>
    import CDialog from '../components/c-dialog';

    export default {
		name:'m-input-fields',
        data: () => ({
        }),
        components: {
            CDialog
        },
        methods: {
        },
        created: function (){
        },
    }
</script>