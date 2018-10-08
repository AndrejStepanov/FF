<template> 
	<v-layout align-center  row>
		<div class='input-contaner' @click="onClick">
			<template v-if="isSliderLike">
				<v-flex shrink style="width: 60px" v-if="type=='RANGE' && isNumeric" >
					<v-text-field v-model="valueArr[0]" class="mt-0 min-width-35px" hide-details single-line type="number"/>
        		</v-flex>
        		<v-flex>
					<component v-if="type=='RANGE'"  :is="currentInput" v-model="valueArr" :hint="columnName+(columnDesc!=''?' ('+columnDesc+')':'')" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
						:multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="typeGet"
						:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
						:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :color="checkBoxColor" :min="min" :max="max" :step="step" 
						@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow"  >
						<template v-if="!isNumeric"	slot="thumb-label"	slot-scope="props">
							<span> {{ getTitleByNum(props.value) }} </span>
						</template>
						<template v-if="isNumeric" slot="thumb-label"	slot-scope="props">
							<slot name="thumb-label" />
						</template>
					</component>

					<component v-else :is="currentInput" v-model="value" :hint="columnName+(columnDesc!=''?' ('+columnDesc+')':'')" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
						:multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="typeGet" 
						:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
						:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :color="checkBoxColor" :min="min" :max="max" :step="step" 
						@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow" >
						<template v-if="!isNumeric"	slot="thumb-label"	slot-scope="props">
							<span> {{ getTitleByNum(props.value) }} </span>
						</template>
						<template v-if="isNumeric" slot="thumb-label"	slot-scope="props">
							<slot name="thumb-label" />
						</template>
					</component>
       			 </v-flex>
        		<v-flex shrink style="width: 60px" v-if="isNumeric" >
        			<v-text-field  class="mt-0 min-width-35px" hide-details single-line type="number" v-if="type=='RANGE'" v-model="valueArr[1]" />
        			<v-text-field  class="mt-0 min-width-35px" hide-details single-line type="number" v-else v-model="value"/>
       			</v-flex>
			</template>

			<component v-else :is="currentInput" v-model="value" :label="columnName" :hint="columnDesc" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
				:multi-line="columnSize>50" :prepend-icon="isNeedIcon"  :tabindex="sortSeq" :type="typeGet" :items="tableValues"  
				:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :color="checkBoxColor" :min="min" :max="max" :step="step"
				@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow" />
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
			value2:'',
			valueArr:[],
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
			error: 'Некорректное значение!',
			tableValues: [],
			tickLabels: [],
			lastTimeSend: 0,
			checkBoxColor:'white',//переопределяется в created
			editable:true,
			multi:false,
			isSliderLike:false,
			min:0,
			max:40,
			step:"1",
			ticksNeed:false,
			tickSize:0,
			thumbLabelNeed:false,
			thumbSize:10,
			isNumeric:true,
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
			typeGet(){
				return this.type!='PASSWORD' ?this.type:
					this.type=='PASSWORD'?this.show?'text':'password':
					'text'
			},
			appendIconGet(){
				return this.type!='PASSWORD'?this.type=='LIST'?'$vuetify.icons.dropdown':'':
					this.type!='PASSWORD'? this.show ? 'visibility_off' : 'visibility':
					''
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
				let vm=this
				vm.checkRefresh()
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
				vm.checkRefresh(true)
			},	
			onClick(){
				let vm=this,
					tmp = vm.checked,
					curTime = new Date().getTime()
				if ( curTime<vm.lastTimeSend+500 )//для автоматической активации полей над ними висит следилка. что бы она не работала лишний раз - глушим ее
					return
				vm.lastTimeSend=curTime
				vm.checked=true
				if(!tmp)
					vm.checkRefresh(true)
				setTimeout(()=>{vm.$refs.input.onClick()},100)
			},
			onBlur(){
				this.checkRefresh()
			},
			async checkRefresh(checkedFx=false){
				let vm=this,
					value = vm.value
				if((value!='' || (  vm.type=='RANGE' && (vm.valueArr[0]!=''||vm.valueArr[1]!='') )) && vm.isSliderLike){
					let tmp1 = vm.type=='RANGE'?vm.valueArr[0]:value,
						tmp2 = vm.type=='RANGE'?vm.valueArr[1]:0
					if( !vm.isNumeric){
						tmp1 = vm.tableValues[tmp1].value
						if(vm.type=='RANGE')
							tmp2 = vm.tableValues[tmp2].value
					}
					value=tmp1
					if(vm.type=='RANGE')
						value+='--'+tmp2
				}
				if(!checkedFx)
					vm.checked=value===''?false:true
				vm.setVal(value)
			},
			async setVal(value){
				let vm=this
				if(vm.needCheckBox ){
					vm.$refs.input.validate()
					vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
				}
				await  vm.paramSet( {num: vm.paramsForm, code: vm.code, value:value , view:value, checked:vm.checked, })
			},
			getTitleByNum(value){
				return this.tickLabels[value]
			}			
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=appTheme.checkBox||vm.checkBoxColor
			vm.id=vm.data.id||vm.id
			vm.value=vm.data.value||vm.value
			vm.value2=vm.data.value2||vm.data.value||vm.value2
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
			vm.editable=!!vm.data.editable||vm.editable
			vm.multi=!!vm.data.multi||vm.multi
			vm.min=!!vm.data.min||vm.min
			vm.max=!!vm.data.max||vm.max
			vm.ticksNeed=!!vm.data.ticks_need||vm.ticksNeed
			vm.tickSize=vm.data.tick_size||vm.tickSize
			vm.thumbLabelNeed=vm.data.thumb_label_need||vm.thumbLabelNeed
			
			vm.currentInput= vm.type=='LIST'?'v-select':
				vm.type=='BOOL'?'v-checkbox':
				vm.type=='SLIDER'?'v-slider':
				vm.type=='RANGE'?'v-range-slider':
				'v-text-field'	

			if(nvl(vm.data.table_values!=undefined)>0)
				vm.data.table_values.forEach(element => {
					vm.tableValues.push(element);
					if(isNaN(element.value))
						vm.isNumeric=false
				});

			vm.isSliderLike= this.type=='SLIDER' || this.type=='RANGE'
			vm.thumbLabelNeed =  vm.isSliderLike && vm.thumbLabelNeed?'always':''
			if(vm.isSliderLike && vm.tableValues.length>0){
				vm.tableValues.forEach(item=>{
					vm.tickLabels.push(item.text)
				})
				if(!vm.isNumeric){
					vm.step=1
					vm.ticksNeed=true
					vm.min=0
					vm.max=vm.tickLabels.length-1
					vm.tickSize=vm.data.tick_size||2
				}
			}
			if(vm.type!='SLIDER' && vm.type!='RANGE' && vm.type!='LIST' && vm.type!='NUMBER' )
				vm.isNumeric=false

			if(!vm.nullable){
				vm.isNeed =true
				vm.rules.push(v => v!=undefined && v!='' || 'Поле обязательное!')
				vm.columnName='❗ '+vm.columnName//⭐
			}
			
			if(vm.type=='RANGE')
				vm.valueArr=[vm.value,vm.value2]

			if(vm.needCheckBox && !vm.nullable)
				vm.rules.push(v => !!vm.checked || 'Поле должно быть использовано!')

			if(vm.needCheckBox && !vm.nullable)
				vm.rules.push(v => !!vm.checked || 'Поле должно быть использовано!')

			if(vm.isNumeric && !isNaN(vm.min) && this.type!='RANGE' )//Границы должны быть цифрой!
				vm.rules.push(v => v>=vm.min|| !vm.checked || 'Значения должно быть больше либо равно '+vm.min+'!')

			if(vm.isNumeric && !isNaN(vm.max) && this.type!='RANGE' )
				vm.rules.push(v => v<=vm.max || !vm.checked || 'Значения должно быть меньше либо равно '+vm.max+'!')

			let tmp = new RegExp(vm.maskFin)
			if(tmp!='')//надо помнить про экранирование
				vm.rules.push(v => tmp.test(v) || vm.error)

			vm.paramSet( {num: vm.paramsForm, code: vm.code, value:vm.value , view:vm.value, checked:(vm.needCheckBox?vm.checked:1), })
		},
	}
</script>
<style>
	div.input-contaner {-webkit-box-align: start;	-ms-flex-align: start;	align-items: flex-start;	display: -webkit-box;	display: -ms-flexbox;	display: flex;	-webkit-box-flex: 1;	-ms-flex: 1 1 auto;	flex: 1 1 auto;}
	.min-width-35px 	{min-width: 35px;}
</style>