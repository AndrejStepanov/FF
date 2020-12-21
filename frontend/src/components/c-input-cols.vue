<template>
	<v-container grid-list-md :fluid="fluidContainer" >
		<v-layout row wrap>
			<template v-for="(row, num) in inputs" >
				<div class='input-col-row-breaker'  :key="row.id+'_rb_u'" v-if ="['LINE', 'INFO'].indexOf(row.type)!=-1 " />
				<c-input class='input-col-fix-size pt-4' :key="row.id"  :ref="row.code"   :data="row" :needCheckBox="multiIdInit || needCheckBox" :needSign="needSign"  :multiIdInit="multiIdInit"
					:paramsForm="paramsForm" :listItemMin="listItemMin" :needPT="allPT||num>0" :outsideInit="outsideInit" :outsideInitLoading="outsideInitLoading"/>
				<div class='input-col-row-breaker'  :key="row.id+'_rb_b'" v-if ="['LINE', 'INFO'].indexOf(row.type)!=-1 " />
			</template>
		</v-layout>
	</v-container>	
</template>

<script>
	import XStore from '@/mixins/x-store'
	import CInput from '@/components/c-input'
	export default {
		name:'c-input-cols',
		data: () => ({	
			colsCnt:0,
			outsideInit:false,
			outsideInitLoading:false,
		}),
		props:{
			paramsForm: {type: String, required: true},
			maxCols: {type: Number, defuault:4},
			maxInputCountInCol:{type: Number, defuault:0},
			fixColCnt:{type: Number, defuault:0},
			needCheckBox:{type:  Boolean, default:false},
			needSign:{type:  Boolean, default:false},
			listItemMin:{type:  Boolean, default:false},
			allPT:{type:  Boolean, default:false},
			fluidContainer:{type:  Boolean, default:false},
			multiIdInit:{type:  Boolean, default:false},
			initParams:{type:  Object, default:()=>{return {href:'api/', method:'get', id:[]} }, },
		},
		computed: {
			inputs() {
				return this.paramGroup( this.paramsForm )
			},
		},
		components: {
			CInput,
		},
		mixins: [
			XStore,
		],
		methods: {
			async runInit(){
			let vm=this, id=vm.initParams.id, idType=vm.$h.typeOfObject(id), response={}
			if( id == undefined || idType == 'array' && id.length==0 || id==0)
				return
			vm.outsideInit=true
			vm.outsideInitLoading=true
			if ( idType  ==  'array' )
				id=id[0]
			response= await vm.$h.sendRequestForData( {href:vm.initParams.href+'/data', method:'get', data:{ filter:{ id:id } }} )
			if ( vm.$h.typeOfObject(response)   ==  'array' )
				response=response[0]
			await vm.paramSetSeveralValOutside({form: vm.paramsForm, value:response, data:{defaultInit:true,  }}) // серванадо дать время на проработку новых данных
			if(vm.multiIdInit){
				let tmp = {}
				for (let name in response)
					tmp[name]={checked:false,}
				await vm.paramSetSeveral( {form: vm.paramsForm, params:tmp } )//и только потом серить
			}
			vm.outsideInitLoading=false
			console.log(response);
			},
		},
		created(){
			this.runInit()
		},
	}
</script>
<style scoped>
	.input-col-fix-size 	{    /* background-color: antiquewhite;*/    min-width: 290px;    margin-right: 5px;    margin-left: 5px; margin-bottom: 5px; flex: 1 1 0px}
	.input-col-row-breaker 	{     background-color: antiquewhite; flex-basis: 100%;    height: 0; }
</style>