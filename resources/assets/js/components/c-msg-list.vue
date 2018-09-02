<template>
    <div id="block_message" style="sizeTotal">
        <c-msg v-for="msg in msgCurrent"  :key="msg.id" :msg="msg" @traceDialogShow="traceDialogShow"  />
        <m-error-desc v-if="isShowenDialog(traceDialogId)" :dialogId="traceDialogId"/>
    </div>
</template>
<script>
//:msg="msgCur"
//
    import {mapActions, mapGetters} from "vuex"
    import CMsg from "../components/c-msg";
    export default {
        name:"c-msg-list",
        data: () => ({
            traceDialogId:Math.floor(Math.random() * MAX_ID),  
        }),
        computed: {
			...mapGetters({
				msgCurrent: "msg/getAllMsg", dialogIsShow:"dialog/getShow",
            }),
            sizeTotal:()=>{
                return "height:"+this.msgCurrent.length*25+"px"
            },
        },
        components: {
            CMsg,MErrorDesc: (resolve) => require(["../modules/m-error-desc.vue"], resolve),
        },
        methods: {
            isShowenDialog(dialogId){return this.dialogIsShow(dialogId)},	
			...mapActions({
				dialogSetAllParamsAndShow:'dialog/doSetAllParamsAndShow',
			}),            
            traceDialogShow(id){
                let vm=this
                let tmp = vm.msgCurrent.find((msg)=>{ return msg.id==id })
                if(!tmp)
                    showMsg({title: "Ошибка отображения трассировки", text:"Трассировка не найдена"});
                vm.dialogSetAllParamsAndShow({ name:"errorTrace", params:{id,msg:tmp} });
            }
		},
		created: function (){
			let vm=this
            vm.$store.dispatch('dialog/doInit',{config:{id:vm.traceDialogId, name:"errorTrace", title:"Трассировка", width:1024, height:600}})
		},
    }
</script>