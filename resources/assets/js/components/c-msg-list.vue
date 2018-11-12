<template>
    <div id="block_message" style="sizeTotal">
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
				trace:{id: getNewId(),  module:'m-error-desc',  name:"errorTrace", title:"$vuetify.texts.modals.traceShow.title", width:1024, height:600}
			},	
        }),
        computed: {
            sizeTotal:()=>{
                return "height:"+this.msgAllMsg.length*25+"px"
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
                vm.dialogShow(vm.dialogsConfig.trace.id)
            }
		},
		created: function (){
			let vm=this
		},
    }
</script>