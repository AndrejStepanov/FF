<template>
	<c-layouts  :name="layoutName" :size="parentLayout.sizePx">
		<template  v-for="(slotName, index) in slotNames"    v-slot:[slotName]  >
			<div :key="index" >
				<slot  :name="slotName" />
			</div>
		</template>
	</c-layouts>
</template>
<script>
	import CLayouts from '@/components/c-layouts'
	import XStore from '@/mixins/x-store'
	export default {
		name:'c-layouts-slots',
		data:() => ({
			layoutsCurName: ''
		}),
		props:{
			layoutName:{type:  String, required: true},	
			parentLayoutConfig:{type:  Object, required: true},	//head:'', name:''
			layoutsConfigs:{type:  Object, required: true},	
		},
		computed:{
			parentLayout(){
				return this.layoutDescByName(this.parentLayoutConfig.head,this.parentLayoutConfig.name)
			},
			slotNames(){
				let vm=this
				return Object.keys(vm.layoutDescByHead(this.layoutName))
			},
		},
		watch: {
			layoutsConfigs(val, valOld){
				let vm = this
				vm.layoutInit({[vm.layoutName]:{...val, sizePx:vm.parentLayout.sizePx}})
			},
		},
		components: {
			CLayouts,
		},
		mixins: [
			XStore,
		],
		methods: {
			
		},
		created: function (){
			let vm = this
			vm.layoutInit({[vm.layoutName]:{...vm.layoutsConfigs, sizePx:vm.parentLayout.sizePx}})
			vm.layoutLinkSet({head:vm.layoutName, parentHead:vm.parentLayoutConfig.head,  parentName:vm.parentLayoutConfig.name, })
		},
	}
</script>

<style lang="scss">

</style>