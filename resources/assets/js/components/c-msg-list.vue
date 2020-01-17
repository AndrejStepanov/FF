<template>
    <div id="block_message" :style="sizeTotal">
        <c-msg v-for="msg in msgAllMsg"  :key="msg.id" :msg="msg" @traceDialogShow="traceDialogShow"  />
        <component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>  
    </div>
</template>

<script>
    import XStore from '../mixins/x-store'
    import XDialog from '../mixins/x-dialog'
    import CMsg from "../components/c-msg"
    export default {
        name:"c-msg-list",
        data: () => ({
			dialogsConfig: {
				errorTrace:{
					id: getNewId(),  title:"$vuetify.texts.modals.traceShow.title",	module:'m-error-desc', width:1024, height:600,	buttons:[],
				}
			},					
        }),
        computed: {
            sizeTotal(){
                return {
					//height:this.msgAllMsg.length*25+"px",
					width: (this.$vuetify.breakpoint.width>450? 450:this.$vuetify.breakpoint.width)+'px'
				}
            },
        },
        components: {
            CMsg,
            MErrorDesc: (resolve) => require(["../modules/m-error-desc.vue"], resolve),
        },
		mixins: [
			XStore,XDialog,
		],
        methods: {         
            traceDialogShow(id){
                let vm=this
                let tmp = vm.msgAllMsg.find((msg)=>{ return msg.id==id })
                if(!tmp)
                    showMsg( getErrDesc('traceNotFound'));
                vm.dialogSetAllParams({ name:"errorTrace", params:{id,msg:tmp} });
                vm.dialogShow(vm.dialogsConfig.errorTrace.id)
            }
		},
		created: function (){
			let vm=this
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