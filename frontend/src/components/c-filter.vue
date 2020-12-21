<template>
	<div  style="display: contents;">
		<v-toolbar-title class="text-xs-center check-size flex--inherit">{{ $vuetify.lang.t('$vuetify.system.labels.filters') }} </v-toolbar-title> 
		<v-btn block  small class="check-size accent flex--inherit" @click="filterSet()"  > <v-icon>search</v-icon> {{$vuetify.lang.t('$vuetify.system.actions.search')}}</v-btn>
		<hr>
		<v-responsive class="overflow-y-auto flex--99 pl-1" width = '100%'>
			<v-form  :ref="formFieldsForm.main" class="filter">
				<c-input-cols   :paramsForm="formFieldsForm.main" :maxCols="1" :needCheckBox="true" :needSign="true" :listItemMin="true" allPT />
			</v-form>
		</v-responsive>
	</div>
</template>
<script>
	import XStore from '@/mixins/x-store'
	import XFields from '@/mixins/x-fields'
	import CInputCols from '@/componentsc-input-cols'
    export default {
		name:'c-filter',
		data:() => ({
		}),
		props:{
			filterName:{type:  String, required: true},
		},
		computed:{
		},
        components: {
			CInputCols,
		},
		mixins: [
			XStore, XFields,
		],
		methods: {
			filterSet(){
				let vm = this
				if (!vm.$refs[vm.formFieldsForm.main].validate())
					return;
				console.log( vm.paramTodo(vm.formFieldsForm.main ) )
			},
		},
		created: function (){
			let vm= this
			await vm.initFields({name:'main', form:vm.filterName, type:'filters' })
		},
    }
</script>

<style lang="scss">
	.check-size           		{max-width: 90%;   margin-left: 5%;}
	.v-form.filter>.container 	{padding: 2px;}
</style>