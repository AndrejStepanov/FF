<template> 
	<v-layout align-center  >
		<div class='input-contaner' @click="onClick">
			<component  :is="currentInput" v-model="value" :label="columnName" :hint="columnDesc" :rules="rules" :disabled="disableGet" :readonly="readonly"  :required="!!nullable" ref="input"
				:multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="typeGet" :items="curItems"  
				:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :color="checkBoxColor"
				@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow"/>
		</div>
		<v-checkbox v-if="!!needCheckBox" v-model="checked" hide-details class="shrink ml-2 mb-2" @change="changeChecked" :color="checkBoxColor"></v-checkbox>
	</v-layout>
</template>
//:append-outer-icon="appendOuterIconGet" 
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
	import XStore from '../mixins/x-store'
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
			type: 'type',
			nullable: false,
			columnType: '',
			columnSize: 0,
			cssClass: '',
			sortSeq: 0,
			mask: null,
			maskFin: '',
			error: 'Некорректное значение',
			items: [],
			lastTimeSend: 0,
			checkBoxColor:'white',//переопределяется в created
		}),
/*
:id="row.id" :code="row.code" :columnName="row.column_name" :columnDesc="row.column_desc" :dialogId="dialogId"
:type="row.proc_type" :nullable="row.nullable" :columnType="row.column_type" :columnSize="row.column_size" :cssClass="row.css_class" :sortSeq="row.sort_seq"
:changeEvent="inputChangeEvent" :items="row.items" :maskFin="row.mask_fin" :mask="row.mask" :error="row.error"
*/
		props:{
			data:{type: Object, required: true, default:()=>{return {}}},
			dialogId: {type:  Number,default:0},
			paramsForm: {type: String, defuault:''},
			needCheckBox:{type:  Boolean, default:false},
		},
		computed: {
			curItems(){
				return this.type=='LIST'?this.items: []			
			},
			typeGet(){
				return this.type!='PASSWORD'?this.type:this.show?'text':'password'
			},
			appendIconGet(){
				return this.type!='PASSWORD'?(this.type=='LIST'?'$vuetify.icons.dropdown':''): this.show ? 'visibility_off' : 'visibility'
			},
			clearableGet(){
				return this.type!='PASSWORD'
			},
			disableGet(){
				return !this.needCheckBox?false:!this.checked
			},	
		},
		watch: {
		},
		mixins: [
			XStore,
		],		
		methods: {
			setNewVal(value){
				this.checkRefresh()
			},
			changeShow(){
				this.show = !this.show;
			},
			submit(){
				let vm=this
				vm.checkRefresh()
				if(vm.dialogId>0)
					vm.$root.$emit('dialog'+vm.paramsForm+'Send',{param:vm.code,value:vm.value} )
			},
			changeChecked(){
				let vm=this
				vm.setVal()
			},	
			onClick(){
				let vm=this
				vm.checked=true
				vm.setVal()
				setTimeout(()=>{vm.$refs.input.onClick()},100)
			},
			onBlur(){
				this.checkRefresh()
			},
			async checkRefresh(value){
				let vm=this
				let curTime = new Date().getTime()
				vm.checked=nvl(vm.value,'')==''?false:true
				if ( curTime<vm.lastTimeSend+500 )
					return
				vm.lastTimeSend=curTime
				vm.setVal()
			},
			async setVal(){
				let vm=this
				if(vm.needCheckBox && vm.isNeed ){
					vm.$refs.input.validate()
					//if (!vm.checked)
						vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
				}
				await  vm.paramSet( {num: vm.paramsForm, code: vm.code, value:vm.value , view:vm.value, checked:vm.checked, })
			},				
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=appTheme.checkBox||vm.checkBoxColor
			vm.id=vm.data.id||vm.id
			vm.value=vm.data.value||vm.value
			vm.code=vm.data.code||vm.code
			vm.columnName=vm.data.column_name||vm.columnName
			vm.columnDesc=vm.data.column_desc||vm.columnDesc
			vm.type=vm.data.type||vm.type
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
			vm.currentInput= vm.type=='LIST'?'v-select':vm.type=='BOOL'?'v-checkbox':'v-text-field'
			vm.readonly=vm.type=='READONLY'
			if(!vm.nullable){
				vm.isNeed =true
				vm.rules.push(v => !!v || 'Поле обязательное')
				vm.columnName='❗ '+vm.columnName//⭐
			}
			if(vm.needCheckBox && !vm.nullable)
				vm.rules.push(v => !!vm.checked || 'Поле обязательное1')
			let tmp = new RegExp(vm.maskFin)
			if(tmp!='')//надо помнить про экранирование
				vm.rules.push(v => tmp.test(v) || vm.error)
			vm.paramSet( {num: vm.paramsForm, code: vm.code, value:vm.value , view:vm.value, checked:(vm.needCheckBox?vm.checked:1), })
		},
	}
</script>
<style>
	div.input-contaner {-webkit-box-align: start;	-ms-flex-align: start;	align-items: flex-start;	display: -webkit-box;	display: -ms-flexbox;	display: flex;	-webkit-box-flex: 1;	-ms-flex: 1 1 auto;	flex: 1 1 auto;}
</style>