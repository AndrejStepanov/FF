<template>
    <div id="block_message" style="sizeTotal">
        <c-msg  v-for="msg in msgCurrent"  v-bind:key="msg.id" v-bind:id="msg.id" v-bind:timeout="msg.timeout" v-bind:y="msg.y" v-bind:x="msg.x" v-bind:modeLine="msg.modeLine" v-bind:type="msg.type" v-bind:title="msg.title" 
            v-bind:text="msg.text"  v-bind:trace="msg.trace" v-bind:status="msg.status" v-bind:file="msg.file" v-bind:line="msg.line" />
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import CMsg from '../components/c-msg';
    export default {
        name:'c-msg-list',

        data: () => ({     
        }),
        computed: {
			...mapGetters({
				msgCurrent: 'msgCurrent'
            }),
            sizeTotal:()=>{
                return "height:"+this.msgCurrent.length*25+"px"
            },
        },
        components: {
            CMsg,
        },
    }
</script>