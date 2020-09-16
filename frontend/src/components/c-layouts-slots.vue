<template>
	<c-layouts  :name="layoutName" :size="parentLayoutConfig.sizePx">
		<template  v-for="(slotName, index) in slotNames"    v-slot:[slotName]  >
			<div :key="index" >
				<slot  :name="slotName" />
			</div>
		</template>
	</c-layouts>
</template>
<script>
	import CLayouts from './c-layouts'
	import XStore from '../mixins/x-store'
	export default {
		name:'c-layouts-slots',
		data:() => ({
			layoutsCurName: ''
		}),
		props:{
			layoutName:{type:  String, required: true},	
			parentLayoutName:{type:  String, required: true},	
			layoutsConfigs:{type:  Object, required: true},	
		},
		computed:{
			parentLayoutConfig(){
				return this.layoutByHead(this.parentLayoutName)
			},
			slotNames(){
				let vm=this
				return Object.keys(vm.layoutDescByHead(this.layoutName))
			},
		},
		watch: {
			layoutsConfigs(val, valOld){
				let vm = this
				vm.layoutInit({[vm.layoutName]:{...val, sizePx:vm.parentLayoutConfig.sizePx}})
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
			vm.layoutInit({[vm.layoutName]:{...vm.layoutsConfigs, sizePx:vm.parentLayoutConfig.sizePx}})
			vm.layoutLinkSet({head:vm.layoutName, parentHead:vm.parentLayoutName, })
		},
	}
</script>

<style lang="scss">

</style>