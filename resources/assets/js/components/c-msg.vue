<template>
    <v-snackbar dense v-model="snackbar" :class="msg.type"  :timeout="timeoutCur" :top="msg.y === 'top'" :bottom="msg.y === 'bottom'" :right="msg.x === 'right'" :left="msg.x === 'left'" 
            :multi-line="msg.modeLine === 'multi-line'" :vertical="msg.modeLine === 'vertical'" @click="snackClcik" >
        <span>
            <span class='bold'>{{msg.title}}</span><br>
            <span >{{msg.text}}</span>
        </span>
        <v-flex xs12 sm3>
           <v-btn flat icon class="primary" @click.native="snackbar = false">
                <v-icon>close</v-icon>
            </v-btn>
            <v-btn v-if="traceAble" icon class="primary" @click.native="$emit('traceDialogShow', msg.id) ">
                <v-icon>description</v-icon>
            </v-btn>
        </v-flex>
    </v-snackbar>
</template>
 
<script>
    export default {
        name:'c-msg',
        data: () => ({
            snackbar:true,
            timeoutCur:0,
        }),
        props:{
            msg: {
				type: Object, default: function () {return {id:0, 'timeout':0, 'y': 'bottom', 'x': 'right', 'modeLine':'multi-line', 'type':'error', 'title':'', 'text':'', 'line':0, 'trace':'', } }
			},
        },
		computed: {
            traceAble(){return this.msg.trace!=''}
        },
        watch: {
            // эта функция запускается при любом изменении вопроса
            snackbar: function (newsnackbar) {
                if(newsnackbar!=false)
                    return;
                this.$store.dispatch('msgDeleting',this.msg.id);
            },
        },
        components: {
        },
        methods: {
            snackClcik(){
                let vm=this
                vm.timeoutCur=999999
            }
		},
		created: function (){
			let vm=this
            vm.timeoutCur=vm.msg.timeout
		},
    }
</script>