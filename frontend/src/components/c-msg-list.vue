<template>
	<div id="block_message" :style="sizeTotal">
		<c-msg v-for="msg in msgAllMsg"  :key="msg.id" :msg="msg" @traceDialogShow="traceDialogShow"  />
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>  
	</div>
</template>

<script>
	import XStore from '@/mixins/x-store'
	import XDialogConfig from '@/mixins/x-dialog-config'
	import CMsg from "@/components/c-msg"
	export default {
		name:"c-msg-list",
		data: () => ({
			dialogsConfig: {
				errorTrace:{
					id: -1,  title:"$vuetify.system.modals.traceShow.title",	module:'m-error-desc', width:1024, height:600,	buttons:[],
					params:{ id:null, msg: null}, 
				}
			},
		}),
		computed: {
			sizeTotal(){
				return {
					width: (this.$vuetify.breakpoint.width>450? 450:this.$vuetify.breakpoint.width)+'px'
				}
			},
		},
		components: {
			CMsg,
			MErrorDesc: (resolve) => require(["@/modules/errorDesc/m-error-desc.vue"], resolve),
		},
		mixins: [
			XStore,XDialogConfig,
		],
		methods: {
			traceDialogShow(id){
				let vm=this,
					tmp = vm.msgAllMsg.find((msg)=>{ return msg.id==id })
				if(!tmp)
					vm.$h.showMsg( vm.$h.getErrDesc('traceNotFound'))
				vm.openDialog({name:'errorTrace', params:{id,msg:tmp}})
			},
		},
		created: function (){
		},
	}
</script>
<style>
	DIV#block_message							{position: fixed;z-index: 800;right: 0px;bottom: 15px;padding: 10px;/*overflow: auto;*/ /*vertical-align: middle;text-valign: middle;*/} 
	DIV#block_message>Div,
	DIV#block_message>Div>Div					{display: block;position: relative;height: auto;margin-bottom: 5px;  background-color: transparent;} 
	DIV#block_message>Div>Div>Div				{border-radius: 20px;} 
	DIV#block_message>Div>Div>Div>Div			{padding: 0px; height: auto;} 
	DIV#block_message button.noMarginLeft		{margin-left: 7px;} 
</style>