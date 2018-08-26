<template>
    <v-snackbar dense :class="type"  :timeout="timeout" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" 
            :multi-line="modeLine === 'multi-line'" :vertical="modeLine === 'vertical'" v-model="snackbar"  >
        <span>
            <span class='bold'>{{title}}</span><br>
            <span >{{text}}</span>
        </span>
        <v-flex xs12 sm3>
           <v-btn flat icon class="primary" @click.native="snackbar = false">
                <v-icon>close</v-icon>
            </v-btn>
            <v-btn v-if="trace!=''" icon class="primary" @click.native="traceDialogShow({daiologId_:traceDialogId,isShow:true})">
                <v-icon>description</v-icon>
            </v-btn>
        </v-flex>
        <m-error-desc v-if="showTraceDialog(traceDialogId)" :dialogId="traceDialogId" :id="id" :type="type" :title="title" :text="text" :trace="trace"  :status="status"  :file="file"  :line="line" 
            :dialogWidth="traceDialogWidth" :dialogHeight="traceDialogHeight"   />
    </v-snackbar>
</template>
 
<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name:'c-msg',
        data: () => ({
            snackbar:true,
            traceDialogWidth:1024,
            traceDialogHeight:600,
            traceDialogId:Math.floor(Math.random() * MAX_ID),
        }),
        props:{
            id: {type:  Number, required: true},
            timeout: {type:  Number, required: true},
            y: {type:  String, required: true},
            x: {type:  String, required: true},
            modeLine: {type:  String, required: true},
            type: {type:  String, required: true},
            title: {type:  String, required: true},
            text: {type:  String, required: true},
            trace: {type:  String, required: true},
            status: {type:  Number, required: true},
            file: {type:  String, required: true},
            line: {type:  Number, required: true},
        },
        watch: {
            // эта функция запускается при любом изменении вопроса
            snackbar: function (newsnackbar) {
                if(newsnackbar!=false)
                    return;
                this.$store.dispatch('msgDeleting',this.id);
            },
        },
        components: {
			MErrorDesc: (resolve) => require(['../modules/m-error-desc.vue'], resolve),
        },
		computed: {
			showTraceDialog(traceDialogId){return this.dialogIsShow(traceDialogId)},			
        },
        methods: {
			...mapActions({
				traceDialogShow:'dialogShowChange',dialogInit:'dialogInit',
			}),
			 ...mapGetters({
				dialogIsShow:'dialogIsShow',
			}),
		},
		created: function (){
			let vm=this
			vm.dialogInit({daiologId:vm.traceDialogId, daiologTitle:"Трассировка", dialogName:'trace_'+vm.traceDialogId})
		},
    }
</script>