<template>
	<v-dialog :value="value"  v-on:input="$emit('input', false)"  v-bind="dialogConf"  >
		<v-card>
			<v-toolbar dark color="primary">
				<v-btn icon dark @click="$emit('input', false) ">
					<v-icon>close</v-icon>
				</v-btn>
				<v-toolbar-title>{{$vuetify.lang.t('$vuetify.system.simple.labels.filter')}}</v-toolbar-title>
				<v-spacer/>
				<v-toolbar-items>
					<v-btn dark text @click="$emit('input', false)">{{$vuetify.lang.t('$vuetify.system.simple.actions.save')}}</v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<v-form v-model="inputsValid" :ref="filterName"  > 
				<v-list subheader class="height-auto">
					<!--<v-subheader>{{$vuetify.t('$vuetify.system.searchPage.education')}}</v-subheader> -->
					<v-list-item >
						<v-list-item-content  >
							<c-input-cols :inputs="inputs"  :paramsForm="filterName" :dialogId="dialogId"  :maxCols="getFilColCnt" :needCheckBox="true" :needSign="true" :listItemMin="true" allPT />
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-form>
		</v-card>
	</v-dialog>
</template>
<script>
	import CInputCols from '@/components/c-input-cols'
	import XStore from '@/mixins/x-store'
    export default {
		name:'c-filter-dialog',
		data:() => ({
			inputsValid:false,
			dialogId:0,
		}),
		props:{
			value:{type:  Boolean, required: true},
			filterName:{type:  String, required: true},
			dialogConf: {type: Object, default: () => {return {fullscreen:true, hideOverlay:true, transition:'dialog-bottom-transition'} } },
			//:dialoSaveFunc = "formSave"
		},
		computed:{
			getFilColCnt(){
				let vm=this
				return ['xs'].indexOf(vm.$vuetify.breakpoint.name)!=-1 ? 1 :
					['sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1 ? 2 : 3
			},
			inputs() {
				let vm=this
				return Object.values( vm.paramConfigGroupFilter( vm.filterName ) ).sort( (a, b) =>{return vm.$h.sort(a, b, 'sort_seq', 'sort_seq')})
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
			vm.dialogId = vm.$h.getNewId() 
			vm.paramInit( {form: vm.filterName, params:vm.inputs })
		},
    }
</script>

<style lang="scss">
	.check-size           		{max-width: 90%;   margin-left: 5%;}
	.v-form.filter>.container 	{padding: 2px;}
</style>