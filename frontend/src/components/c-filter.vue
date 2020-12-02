<template>
	<div  style="display: contents;">
		<v-toolbar-title class="text-xs-center check-size flex--inherit">{{ $vuetify.lang.t('$vuetify.system.simple.labels.filters') }} </v-toolbar-title> 
		<v-btn block  small class="check-size accent flex--inherit" @click="filterSet()"  > <v-icon>search</v-icon> {{$vuetify.lang.t('$vuetify.system.simple.actions.search')}}</v-btn>
		<hr>
		<v-responsive class="overflow-y-auto flex--99 pl-1" width = '100%'>
			<v-form  :ref="filterName" class="filter">
				<c-input-cols  :inputs="inputs" :paramsForm="filterName" :maxCols="1" :needCheckBox="true" :needSign="true" :listItemMin="true" allPT />
			</v-form>
		</v-responsive>
	</div>
</template>
<script>
	import CInputCols from '@/componentsc-input-cols'
	import XStore from '@/mixins/x-store'
    export default {
		name:'c-filter',
		data:() => ({
		}),
		props:{
			filterName:{type:  String, required: true},
		},
		computed:{
			inputs() {
				let vm=this
				return Object.values( vm.paramConfigGroupFilter( vm.dfilterName ) ).sort( (a, b) =>{return vm.$h.sort(a, b, 'sort_seq', 'sort_seq')})
			},
		},
        components: {
			CInputCols,
		},
		mixins: [
			XStore,
		],
		methods: {
			filterSet(){
				let vm = this
				if (!vm.$refs[vm.filterName].validate())
					return;
				console.log( vm.paramTodo(vm.filterName ) )
			},
		},
		created: function (){
			let vm= this
			vm.paramInit( {form: vm.filterName, params:vm.inputs })
		},
    }
</script>

<style lang="scss">
	.check-size           		{max-width: 90%;   margin-left: 5%;}
	.v-form.filter>.container 	{padding: 2px;}
</style>