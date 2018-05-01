<template>
    <v-snackbar dense v-bind:class="{k_info: k_type=='info', k_success: k_type=='success',k_warning: k_type=='warning',k_danger: k_type=='danger'}" 
            :timeout="timeout" :top="y === 'top'" :bottom="y === 'bottom'" :right="x === 'right'" :left="x === 'left'" 
            :multi-line="mode_line === 'multi-line'" :vertical="mode_line === 'vertical'" v-model="snackbar"  >
        <span>
            <span class='col_white bold'>{{title}}</span><br>
            <span class='col_white' >{{text}}</span>
        </span>
        <v-flex xs12 sm3>
            <v-btn flat icon class="k_second" @click.native="snackbar = false">
                <v-icon>close</v-icon>
            </v-btn>
        </v-flex>
    </v-snackbar>
</template>

<script>
    export default {
        name:'k-msg',

        data: () => ({     
            snackbar: false,      
            timeout:6000,
            y:'top',
            x:'right',
            mode_line:'multi-line',
            k_type:'danger',
            title:'Титул',
            text:'Текст сообщения',
        }),
        mounted :function(){
            this.$root.$on('show-message', function (obj) {
                this.$root.$refs.msg.snackbar= false;   
                this.$nextTick(function () {
                    this.$root.$refs.msg.timeout_=obj.timeout||6000;
                    this.$root.$refs.msg.title=obj.title||'Титул';
                    this.$root.$refs.msg.text=obj.text||'Текст сообщения';
                    this.$root.$refs.msg.k_type=obj.k_type||'danger';
                    this.$root.$refs.msg.x=obj.x||'right';
                    this.$root.$refs.msg.y=obj.y||'top';
                    this.$root.$refs.msg.mode_line=obj.mode_line||'multi-line';
                    this.$root.$refs.msg.snackbar=true;                
                });    
            });
        }
    }
</script>

<style lang="scss">
    
</style>