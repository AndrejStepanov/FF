<template>
    <div id="block_message" style="sizeTotal">
        <c-msg  v-for="msg in msgCurrent"  v-bind:key="msg.id" :msg="msg" @traceDialogShow="traceDialogShow"  />
        <m-error-desc v-if="traceDialogIsShow" :dialogId="traceDialogId"  :dialogWidth="traceDialogWidth" :dialogHeight="traceDialogHeight"  :msg="msgCur" />
    </div>
</template>
<script>
//:msg="msgCur"
//
    import {mapActions, mapGetters} from 'vuex'
    import CMsg from '../components/c-msg';
    export default {
        name:'c-msg-list',
        data: () => ({
            traceDialogWidth:1024,
            traceDialogHeight:600,
            traceDialogId:Math.floor(Math.random() * MAX_ID),  
            msgCur:{'id':0,'title': '', 'text':'', 'trace':'', 'status':0, 'file':'', 'line':0 },
        }),
        computed: {
			...mapGetters({
				msgCurrent: 'msgCurrent', dialogIsShow:'dialogIsShow',
            }),
            sizeTotal:()=>{
                return "height:"+this.msgCurrent.length*25+"px"
            },
            traceDialogIsShow(){return this.dialogIsShow(this.traceDialogId)},	
        },
        components: {
            CMsg,MErrorDesc: (resolve) => require(['../modules/m-error-desc.vue'], resolve),
        },
        methods: {
			...mapActions({
				dialogShowChange:'dialogShowChange',dialogInit:'dialogInit',
			}),            
            traceDialogShow(id){
                let vm=this
                let tmp = vm.msgCurrent.find((msg)=>{ return msg.id==id })
                if(!tmp)
                    window._Vue.$store.dispatch('msgAdding', {title: 'Ошибка отображения трассировки', text:'Трассировка не найдена'})
                vm.msgCur={id,...tmp};
                if(!vm.traceDialogIsShow )
                    vm.dialogShowChange({daiologId_:vm.traceDialogId,isShow:true})
            }
		},
		created: function (){
			let vm=this
            vm.dialogInit({daiologId:vm.traceDialogId, daiologTitle:"Трассировка", dialogName:'trace_'+vm.traceDialogId})
		},
    }
</script>