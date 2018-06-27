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
        </v-flex>
    </v-snackbar>
</template>

<script>
    export default {
        name:'c-msg',
        data: () => ({
            snackbar:true,
        }),
        watch: {
            // эта функция запускается при любом изменении вопроса
            snackbar: function (newsnackbar) {
                if(newsnackbar!=false)
                    return;
                this.$store.dispatch('msgDeleting',this.id);
            }
        },
        props:{
            id: {type:  Number, required: true},
            timeout: {type:  Number, required: true},
            y: {type:  String, required: true},
            x: {type:  String, required: true},
            modeLine: {type:  String, required: true},
            type: {type:  String, required: true},
            title: {type:  String, required: true},
            text: {type:  String, required: true},
        },
    }
</script>