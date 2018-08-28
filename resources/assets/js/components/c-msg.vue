<template>
    <v-slide-x-transition>
        <div v-show="visibility">
            <v-snackbar  transition="scale-transition" dense v-model="snackbar" :class="msg.type+'--content'"  :timeout="timeoutCur" :top="msg.y === 'top'" :bottom="msg.y === 'bottom'" :right="msg.x === 'right'" :left="msg.x === 'left'" 
                    :multi-line="msg.modeLine === 'multi-line'" :vertical="msg.modeLine === 'vertical'" @click="snackClcik" >
                <span>
                    <span class='bold'>{{msg.title}}</span><br>
                    <span >{{msg.text}}</span>
                </span>
                <v-flex xs12 sm3 >
                    <v-btn flat icon class="accent" @click.native="snackbar = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-btn v-if="traceAble" icon class="accent" @click.native="$emit('traceDialogShow', msg.id) ">
                        <v-icon>description</v-icon>
                    </v-btn>
                </v-flex>
            </v-snackbar>
        </div>
    </v-slide-x-transition>
</template>
 
<script>
    export default {
        name:'c-msg',
        data: () => ({
            snackbar:true,
            timeoutCur:0,
            visibility:false,
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
                let vm=this
                vm.visibility=false;
                setTimeout(()=>{vm.$store.dispatch('msgDeleting',vm.msg.id);},1000);                
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
            setTimeout(()=>{vm.visibility=true;},10);
		},
    }
</script>