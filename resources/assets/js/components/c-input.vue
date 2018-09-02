<template> 
	<div @click="onClick" >
		<component :is="currentInput" v-model="value" :label="columnName" :hint="columnDesc" :rules="rules" :disabled="disableGet" :readonly="readonly"  :required="!!!nullable" ref="input"
			:multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="typeGet" :items="curItems"  
			:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :append-outer-icon="appendOuterIconGet" 
			@change="setNewVal" @keyup.enter="submit" @click:append-outer="appendOuterIconClick" @click:append="changeShow" @blur="onBlur"/>
	</div>
</template>

/*
Masks
#	Any digit
A	Any capital letter
a	Any small letter
N	Any capital alphanumeric character
n	Any small alphanumeric character
X	Any special symbol (-!$%^&*()_+|~=`{}[]:";'<>?,./\) or space
Pre-made
credit-card	#### - #### - #### - ####
date-with-time	##/##/#### ##:##
phone	(###) ### - ####
social	###-##-####
time	##:##
time-with-seconds	##:##:##
*/

<script>
	export default {
		name:'c-input',
		data: () => ({
			value:'',
			rules:[],
			isNeed:false,
			isNeedIcon:'',
			checked:false,
			readonly:false,
			show:false,
			currentInput:'v-text-field',
			id: 0,
			code: 'code',
			columnName: 'columnName',
			columnDesc: 'columnDesc',
			procType: 'procType',
			nullable: 0,
			columnType: '',
			columnSize: 0,
			cssClass: '',
			sortSeq: 0,
			mask: null,
			maskFin: '',
			error: 'Некорректное значение',
			items: [],
		}),
/*
:id="row.id" :code="row.code" :columnName="row.column_name" :columnDesc="row.column_desc" :dialogId="dialogId"
:procType="row.proc_type" :nullable="row.nullable" :columnType="row.column_type" :columnSize="row.column_size" :cssClass="row.css_class" :sortSeq="row.sort_seq"
:changeEvent="inputChangeEvent" :items="row.items" :maskFin="row.mask_fin" :mask="row.mask" :error="row.error"
*/
		props:{
			data:{type: Object, required: true, default:()=>{return {}}},
			dialogId: {type:  Number},
			paramsId: {type: Number},
			needCheckBox:{type:  String, default:'N'},
		},
		computed: {
			curItems(){
				let vm=this
				return vm.procType=='AUTO::LIST'?vm.items: []			
			},
			typeGet(){
				let vm=this
				return vm.procType!='PASSWORD'?vm.procType:vm.show?'text':'password'
			},
			appendIconGet(){
				let vm=this
				return vm.procType!='PASSWORD'?(vm.procType=='AUTO::LIST'?'$vuetify.icons.dropdown':''): vm.show ? 'visibility_off' : 'visibility'
			},
			clearableGet(){
				let vm=this
				return vm.procType!='PASSWORD'
			},
			appendOuterIconGet(){
				let vm=this
				return vm.needCheckBox=='N'?'': vm.checked ? 'check_box' : 'check_box_outline_blank'
			},
			disableGet(){
				let vm=this
				return vm.needCheckBox=='N'?false:!vm.checked
			},	
		},
		watch: {
		},
		methods: {
			setNewVal(value){
				let vm=this
				vm.checkRefresh()
			},
			changeShow(){
				this.show = !this.show;
			},
			submit(){
				let vm=this
				vm.checkRefresh()
				vm.$root.$emit('dialog'+vm.dialogId+'Send',{param:vm.code,value:vm.value} )
			},
			appendOuterIconClick(){
				let vm=this
				vm.checked=!vm.checked
			},	
			onClick(){
				let vm=this
				vm.checked=true
				setTimeout(()=>{vm.$refs.input.onClick()},100)
			},
			onBlur(){
				let vm=this
				vm.checkRefresh()
			},
			async checkRefresh(value){
				let vm=this
				vm.checked=nvl(vm.value,'')==''?false:true	
				if(vm.checked)
					await  vm.$store.dispatch('param/doSet', {num: vm.paramsId, code: vm.code, value:vm.value , view:vm.value })
				else
					await  vm.$store.dispatch('param/doSet', {num: vm.paramsId, code: vm.code, value:undefined, view:undefined })
			}
				
		},
		created: function (){
			let vm=this
			vm.id=vm.data.id||vm.id
			vm.value=vm.data.value||vm.value
			vm.code=vm.data.code||vm.code
			vm.columnName=vm.data.column_name||vm.columnName
			vm.columnDesc=vm.data.column_desc||vm.columnDesc
			vm.procType=vm.data.proc_type||vm.procType
			vm.nullable=vm.data.nullable||vm.nullable
			vm.columnType=vm.data.column_type||vm.columnType
			vm.columnSize=vm.data.column_size||vm.columnSize
			vm.cssClass=vm.data.css_class||vm.cssClass
			vm.sortSeq=vm.data.sort_seq||vm.sortSeq
			vm.mask=vm.data.mask||vm.mask
			vm.maskFin=vm.data.mask_fin||vm.maskFin
			vm.error=vm.data.error||vm.error
			vm.checked=!!vm.data.checked||vm.checked
			if(nvl(vm.data.items!=undefined)>0){
				vm.data.items.forEach(element => {
					vm.items.push(element);
				});
			}
			vm.currentInput= vm.procType=='AUTO::LIST'?'v-select':vm.procType=='BOOL'?'v-checkbox':'v-text-field'
			vm.readonly=vm.type=='READONLY'
			if(vm.nullable==0){
				vm.isNeed =true
				vm.rules.push(v => !!v || 'Поле обязательное')
			}
			let tmp = new RegExp(vm.maskFin)
			if(tmp!='')//надо помнить про экранирование
				vm.rules.push(v => tmp.test(v) || vm.error)
			vm.$store.dispatch('param/doSet', {num: vm.paramsId, code: vm.code, value:vm.value , view:vm.value })
		},
	}
</script>