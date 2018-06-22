<template>
    <v-snackbar dense :class="type"  :timeout="timeout" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" 
            :multi-line="mode_line === 'multi-line'" :vertical="mode_line === 'vertical'" v-model="snackbar"  >
        <span>
            <span class='col_white bold'>{{title}}</span><br>
            <span class='col_white' >{{text}}</span>
        </span>
        <v-flex xs12 sm3>
            <v-btn flat icon class="primary" @click.native="snackbar = false">
                <v-icon>close</v-icon>
            </v-btn>
        </v-flex>
    </v-snackbar>
</template>

<script>
    export default {
        name:'c-msg',

        data: () => ({     
            snackbar: false,      
            timeout:6000,
            y:'top',
            x:'right',
            mode_line:'multi-line',
            type:'error',
            title:'Титул',
            text:'Текст сообщения',
        }),
        mounted :function(){
            this.$root.$on('show-message', function (obj) {
                this.$root.$refs.msg.snackbar= false;   
                this.$nextTick(function () {
                    this.$root.$refs.msg.timeout_=obj.timeout||6000;
                    this.$root.$refs.msg.title=obj.title||'Титул';
                    this.$root.$refs.msg.text=(obj.status==401?'Необходимо авторизоваться!':obj.text)||'Текст сообщения';
                    this.$root.$refs.msg.type=obj.type||'error';
                    this.$root.$refs.msg.x=obj.x||'right';
                    this.$root.$refs.msg.y=obj.y||'top';
                    this.$root.$refs.msg.mode_line=obj.mode_line||'multi-line';
                    this.$root.$refs.msg.snackbar=true;                
                });    
            });
        }
    }
</script>