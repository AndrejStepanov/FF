<template> <!--:counter="columnSize"-->
    <v-text-field v-model="value" :label="columnName" :hint="columnDesc"  clearable  :rules="rules"
        :disabled="disabled" :readonly="readonly"  :required="isNeed"  :multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="columnType"/>
</template>

<script>
    export default {
        name:'c-input',
        data: () => ({
            value:'',
            rules:[],
            isNeed:false,
            isNeedIcon:'',
            disabled:false,
            readonly:false,
        }),
        watch: {
        },
        props:{
            id: {type:  Number, required: true},
            columnCode: {type:  String, required: true},
            columnName: {type:  String, required: true},
            columnDesc: {type:  String, required: true},
            procType: {type:  String, required: true},
            isNull: {type:  String, required: true},
            columnType: {type:  String, required: true},
            columnSize: {type:  Number, required: true},
            cssClass: {type:  String, required: true},
            sortSeq: {type:  Number, required: true},
            dialogId: {type:  Number},
        },
        computed: {
        },
        created: function (){
            let vm=this
            vm.disabled=vm.type=='DISABLED'
            vm.readonly=vm.type=='READONLY'
            if(vm.isNull=='N'){
			    //vm.isNeedIcon ='report'
			    vm.isNeed =true
                vm.rules.push(v => !!v || 'Поле обязательное');
            }
            if(vm.dialogId>0)
                vm.$root.$on('dialogClose'+vm.dialogId, (obj)=>{vm.$children[0].reset() });              
        },
    }
</script>