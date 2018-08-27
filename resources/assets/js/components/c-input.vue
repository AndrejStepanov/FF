<template> <!--:counter="columnSize"-->
	<v-select v-if="procType=='AUTO::LIST'" v-model="value" :label="columnName" :hint="columnDesc"  clearable  :rules="rules" @change="setNewVal" @keyup.enter="submit"
		:disabled="disabled" :readonly="readonly"  :required="isNeed"  :multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="columnType" :items="curItems" />
	<v-checkbox v-else-if="procType=='BOOL'" v-model="value" :label="columnName" :hint="columnDesc"  clearable  :rules="rules" @change="setNewVal" @keyup.enter="submit"
		:disabled="disabled" :readonly="readonly"  :required="isNeed"  :multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="columnType" />
	<v-text-field v-else v-model="value" :label="columnName" :hint="columnDesc"    :rules="rules" @change="setNewVal" @keyup.enter="submit"
		:disabled="disabled" :readonly="readonly"  :required="isNeed"  :multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="typeGet"  
		:append-icon="procType!='PASSWORD'?'': show ? 'visibility_off' : 'visibility'" :clearable="procType!='PASSWORD'"  :appendIconCb="changeShow"/>
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
			show:false,
		}),
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
			changeEvent: {type:  String},
			items: {type:  Array},
		},
		computed: {
			curItems(){
				let vm=this
				if( vm.procType=='AUTO::LIST')
					return vm.items
				else
					return []			
			},
			typeGet(){
				let vm=this
				if(vm.procType!='PASSWORD')
					return vm.procType
				else if(vm.show)
					return 'text'
				else 
					return 'password'
			},
		},
		watch: {
		},
		methods: {
			setNewVal(value){
				let vm=this
				this.$root.$emit(this.changeEvent,{param:this.columnCode,value:value});
			},
			changeShow(){
				this.show = !this.show;
			},
			submit(){
				let vm=this
				vm.$root.$emit('dialog'+vm.dialogId+'Send',{param:this.columnCode,value:vm.value} )
			}
				
		},
		created: function (){
			let vm=this
			vm.disabled=vm.type=='DISABLED'
			vm.readonly=vm.type=='READONLY'
			if(vm.isNull=='N'){
				vm.isNeed =true
				vm.rules.push(v => !!v || 'Поле обязательное');
			}             
		},
	}
</script>