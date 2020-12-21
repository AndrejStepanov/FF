<template> 
	
</template>

<script>
	//шаблон. икод не рабочий, интересна только структура и манера объявления полей
	import XStore from '@/mixins/x-store'
	import CLoading from '@/components/c-loading'
	import {VSelect,VSlider,VRangeSlider,VTextarea } from 'vuetify/lib' //из-за хитрого загрузчика, который анализирует только шаблон, динамические окмпоененты приходится импортировать руками. иначе они не подгрузятся
	
	export default {
		name:'c-input',
		data: () => ({
			checkBoxColor:'false',//переопределяется в created
			hasError: false,

		}),
		props:{
			data:{type: Object, required: true, default:()=>{return {}}},
			componentName: {type:  String,default:''},
			paramsForm: {type: String, defuault:''},
			needCheckBox:{type:  Boolean, default:false},
			fieldsList:  {type:Array, default: () => [] },
		},
		computed: {
			getDialogClass(){
				let vm=this
				return "overflow-hidden "
			},
			value: {	
				
				set:function (val)	{
					this.setValue(val)
				},
				get:function()	{
					let vm=this,
						tmp =vm.paramData.value
					return tmp
				},
			},
		},
		watch: {
			servicesGivenParam(val, valOld){
				this.getDataFromServiceGiven()
			},
		},
		components: {
			CTable: (resolve) =>{ require(['@/components/c-table.vue'], resolve) },
			VSelect,VSlider,VRangeSlider,VTextarea,CLoading,
		},
		mixins: [
			XStore,
		],
		methods: {
			hasErrorSet(){
				this.hasError = true;
				if( vm.$h.nvl(config.type,'')=='' )
					vm.$h.showMsg( {...vm.$h.getErrDesc('fieldsInitWrongParam'), textParams:[ 'type', config.type  ] } )
				vm.iputInitParams= Object.assign({}, vm.iputInitParams, {href:'api/', method:'get', id:0, multiSelect:false}) 
				vm.$set( vm.buttonsConfigCheckDisable, tmp.var, [])
			},
			async submit(){
				let vm=this
				vm.postWork()
			},
		},
		created (){
			let vm=this
			vm.checkBoxColor=vm.$h.appTheme.checkBox||vm.checkBoxColor
			vm.valueArrDateViewChangeLastTime= new Date().getTime()
			vm.getDataFromServiceGiven()
			vm.getDataFromServiceDefault()
		},
		mounted(){
			let vm=this
			vm.isMounted = true;
		},
		beforeDestroy (){
			this.clearWatch()
		},
	}
</script>
<style>
	.min-width-35px 										{min-width: 35px;}
</style>