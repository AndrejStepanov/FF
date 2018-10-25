<template> 
	<v-layout v-if="type!='HIDDEN'" align-center :class="classCss"  row>
		<v-tooltip  class='input-contaner' :disabled="tip==''" bottom>
			<template slot='activator'>
				<div class='input-contaner'>
					<v-btn  icon v-if="needSign" @click="changeSign" small class="sign-box cursor-pointer" >
						<v-icon small :disabled="disableGet" :class="signClassGet">{{signCur}}</v-icon>
					</v-btn>
					<div class='input-contaner main-contaner' @click="onClick">
						<div class='input-contaner slider-label' v-if="isSliderLike">
							<span :class="labelColorGet" >{{name+(placeholder!=''?' ('+placeholder+')':'')}}</span>
						</div>
						<div :class="templateClassGet">
							<template v-if="isSliderLike">
								<v-flex shrink style="width: 60px" v-if="type=='RANGE' && isNumeric" >
									<v-text-field v-model="valueRange[0][0]" class="mt-0 min-width-35px body-1" hide-details single-line :disabled="disableGet" type="number" @change="setNewVal" :min="min" :max="max" :step="step"/>
								</v-flex>
								<v-flex>
									<component v-if="type=='RANGE'"  :is="currentInput" v-model="valueRange[0]" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
										:multi-line="columnSize>50"  :tabindex="sortSeq" :type="typeGet" :color="checkBoxColor"
										:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
										:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"   :min="min" :max="max" :step="step" 
										@change="setNewVal" @keyup.enter="submit"  @blur="onBlur"   >
										<template v-if="!isNumeric"	slot="thumb-label"	slot-scope="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" slot="thumb-label"	slot-scope="props">
											<slot name="thumb-label" />
										</template>
									</component>

									<component v-else :is="currentInput" v-model="value" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
										:multi-line="columnSize>50" :tabindex="sortSeq" :type="typeGet"  :color="checkBoxColor"
										:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
										:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :min="min" :max="max" :step="step" 
										@change="setNewVal" @keyup.enter="submit"  @blur="onBlur"  >
										<template v-if="!isNumeric"	slot="thumb-label"	slot-scope="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" slot="thumb-label"	slot-scope="props">
											<slot name="thumb-label" />
										</template>
									</component>
								</v-flex>
								<v-flex shrink style="width: 60px" v-if="isNumeric" >
									<v-text-field  class="mt-0 min-width-35px body-1" hide-details single-line type="number" :disabled="disableGet" v-if="type=='RANGE'" v-model="valueRange[0][1]"  @change="setNewVal" :min="min" :max="max" :step="step"/>
									<v-text-field  class="mt-0 min-width-35px body-1" hide-details single-line type="number" :disabled="disableGet" v-else v-model="value" @change="setNewVal" :min="min" :max="max" :step="step"/>
								</v-flex>
							</template>
							<template v-else>
								<component v-if="!multy && !isDateTimeLike" :is="currentInput" v-model="value" :label="name" :hint="placeholder" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
									:multi-line="columnSize>50" :tabindex="sortSeq" :type="typeGet" :items="getListItems" dense :counter="getCounter"
									:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :min="min" :max="max" :step="step"
									@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow" 
									:class="componentClassGet" />
								<component v-else-if="multy && type=='LIST'" :is="currentInput" v-model="valueArr" :label="name" :hint="placeholder" :rules="rules" :disabled="disableGet" :readonly="!editable"  :required="!!nullable" ref="input"
									:multi-line="columnSize>50" :tabindex="sortSeq" :type="typeGet" :items="getListItems" dense
									:append-icon="appendIconGet" :clearable="clearableGet" :mask="mask"  :min="min" :max="max" :step="step"
									@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow" multiple chips deletable-chips small-chips
									:class="componentClassGet" />
								<v-dialog v-else-if="!multy && isDateTimeLike"	ref="modalWindow" v-model="modalWindow" :return-value.sync="value" persistent lazy full-width	:width="getmodalWindowWidth" @show='changeChecked' 
										@update:returnValue="setNewVal" >
									<v-text-field slot="activator" v-model="valueView" :label="name" :hint="placeholder" :rules="rules" :disabled="disableGet"  :required="!!nullable" prepend-icon="event" readonly ref="input" 
										:tabindex="sortSeq"  :clearable="clearableGet"   :min="min" :max="max" 
										@change="setNewVal" @input="setNewVal"  @keyup.enter="submit" @blur="onBlur" @click:append="changeShow" />
									<template>
										<v-date-picker v-if="modalWindowWithDate"  v-model="valueDateArr[0][0]" scrollable locale="ru" class='v-date-picker-more-height' ref="datePicker"/>
										<v-time-picker v-if="modalWindowWithTime"  v-model="valueDateArr[0][1]" scrollable locale="ru" format="24hr"/>
										<v-spacer/>
										<v-toolbar dense  color="primary" >	
											<v-btn flat class="accent"  @click="modalWindow = false">Отмена</v-btn>
											<v-spacer/>
											<v-btn flat class="accent"  @click="$refs.modalWindow.save(getValueDatetimeFromArr({check:true,}))">Принять</v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="multy && type=='DATE'"	ref="modalWindow" v-model="modalWindow" :return-value.sync="valueArr" persistent lazy full-width	:width="getmodalWindowWidth" @show='changeChecked' 
										@update:returnValue="setNewVal" >
									<v-combobox slot="activator" v-model="valueArrView" :label="name" :hint="placeholder" :rules="rules" :disabled="disableGet"  :required="!!nullable" prepend-icon="event" readonly ref="input" 
										:tabindex="sortSeq"  :clearable="clearableGet"   :min="min" :max="max" multiple chips deletable-chips small-chips
										@change="setNewVal"  @keyup.enter="submit" @blur="onBlur" @click:append="changeShow" />
									<template>
										<v-date-picker v-if="modalWindowWithDate"  v-model="valueArrViewTMP" multiple  scrollable locale="ru" class='v-date-picker-more-height' ref="datePicker" />
										<v-spacer/>
										<v-toolbar dense color="primary" >	
											<v-btn flat class="accent" @click="modalWindow = false">Отмена</v-btn>
											<v-spacer/>
											<v-btn flat class="accent"  @click="saveModalWindowWithDateMulty()">Принять</v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
							</template>
						</div>
					</div>
				</div>
			</template>
			<span >{{tip}}</span>
		</v-tooltip>
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
			checkBoxColor:'white',//переопределяется в created
			checked:false,
			code: 'code',
			columnSize: 0,
			columnType: '',
			classCss: [],//[ "class1","class2",]
			currentInput:'v-text-field',
			editable:true,
			error: 'Некорректное значение!',
			hasError: false,
			hasInput: false,
			id: 0,
			isNeed:false,
			isDateTimeLike:false,
			isNumeric:true,
			isSliderLike:false,
			listItemLenght: 18,
			lastTimeSend: 0,
			mask: null,
			maskFin: '',
			max:40,
			maxLen:0,
			maxLenTypes:['INPUT','NUMBER', 'PASSWORD'],
			min:0,
			modalWindow:false,
			modalWindowWithDate:false,
			modalWindowWithTime:false,
			multy:false,
			name: '',
			nullable: false,
			placeholder: '',
			readonly:false,
			rules:[],
			show:false,
			sign:0,
			signList:[
				{code:'=',icon:'pause'},
				{code:'!=',icon:'code'},
				{code:'>',icon:'chevron_right'},
				{code:'>=',icon:'last_page'},
				{code:'<',icon:'chevron_left'},
				{code:'<=',icon:'first_page'},
			],
			sortSeq: 0,
			step:"1",
			tableValues: [],//для листов [{value:'cur',text:'На текущем уровне'}], для TAB [{param1:1, param2:2, }]
			tableHeader: [],//для TAB [{value:'param1',text:'Параметра1'},{value:'param2',text:'Параметра2'}]
			thumbLabelNeed:false,
			thumbSize:10,
			tickLabels: [],
			tickSize:0,
			ticksNeed:false,
			tip:'',
			type: 'type',
			value:'',// предпологаю число
			valueDateArr:[],//[ ['2018-10-03', '12:52'],  ]
			valueView:'',
			valueRange:[],//[ [1,0], [1, 2] ]
			valueRangeView:[],
			valueArr:[],//['Петя','Вася','Катя',]
			valueArrView:[],
			valueArrViewTMP:[],
		}),
		props:{
			data:{type: Object, required: true, default:()=>{return {}}},
			dialogId: {type:  Number,default:0},
			paramsForm: {type: String, defuault:''},
			needCheckBox:{type:  Boolean, default:false},
			needSign:{type:  Boolean, default:false},
			listItemMin:{type:  Boolean, default:false},
		},
		computed: {
			typeGet(){
				return this.type!='PASSWORD' ?this.type:
					this.type=='PASSWORD'?this.show?'text':'password':
					'text'
			},
			signCur(){
				return !this.needSign?'':this.signList[this.sign].icon
			},
			appendIconGet(){
				return this.type!='PASSWORD'?this.type=='LIST'?'$vuetify.icons.dropdown':'':
					this.type!='PASSWORD'? this.show ? 'visibility_off' : 'visibility':
					''
			},
			clearableGet(){
				return this.type!='PASSWORD'
			},
			templateClassGet(){
				return [
					{"input-contaner": true},
					{"slider-upper": this.isSliderLike && this.isNumeric},
				]
			},
			labelColorGet(){
				return [
					{"disabled-label": !this.checked},
					{"error--text": ( this.hasError && this.$refs.input.validations!='' )},					
				]
			},
			signClassGet(){
				return [
					{"rotate-90": this.needSign && this.signList[this.sign].icon=='pause' && this.signList[this.sign].code=='='},
				]
			},
			componentClassGet(){
				return [
					{"body-1":this.needSign},
				]
			},
			disableGet(){
				return !this.needCheckBox?false:!this.checked
			},	
			getCounter(){
				return this.maxLenTypes.indexOf(this.type)!=-1 && this.maxLen>0?this.maxLen:false
			},
			getListItems(){
				let vm=this
				return 	vm.tableValues.map(element => {
					return {value:element.value, text: (['LIST'].indexOf(vm.type)!=-1 && vm.listItemMin ? element.text : element.textFull)}
				});
			},
			getmodalWindowWidth(){
				let vm=this
				return vm.type=='DATE'? '290px' : vm.type=='TIME'? '290px' : vm.type=='DATETIME' ? '584px' :''
			},
		},
		watch: {
		},
		mixins: [
			XStore,
		],		
		methods: {
			getValueDatetimeFromArr({check, num}){
				let vm=this
				check=check||false
				num=num||0
				if(check){
					if(vm.modalWindowWithDate && vm.valueDateArr[num][0]==null)
						showMsg( {title:'Ошибка при указании данных',text:'Перед сохранением, укажите дату!'});
					if(vm.modalWindowWithTime && vm.valueDateArr[num][1]==null)
						showMsg( {title:'Ошибка при указании данных',text:'Перед сохранением, укажите время!'});
				}
				return (vm.valueDateArr[num][0]!=null?vm.valueDateArr[num][0]:'')+(vm.valueDateArr[num][0]!=null && vm.valueDateArr[num][1]?' ':'') + (vm.valueDateArr[num][1]!=null?vm.valueDateArr[num][1]:'')
			},
			parseToDateArr(str){
				let vm=this,
					e = str.split(' ')
				if(e.length>0 && e[0]!='' && e[0].match(/^\d\d:\d\d$/)!=null){
					e[1]=e[0]
					e[0]=null
				}
				e[0]= (e.length>0 && nvl(e[0])!='' && e[0].match(/^\d\d\d\d-\d\d-\d\d$/)==null) ? null : e[0]
				e[1]= (e.length>1 && nvl(e[1])!='' &&e[1].match(/^\d\d:\d\d$/) ==null) ? null : e[1]
				vm.valueDateArr.push( [e[0],e[1]] )
			},
			setNewVal(value){
				let vm=this
				if(vm.multy && vm.type=='DATE'){
					vm.valueDateArr.splice (0,vm.valueDateArr.length)
					value.forEach(row=>{
						vm.parseToDateArr(row)
					})
					vm.valueArr.splice (0,vm.valueArr.length)
					vm.valueDateArr.forEach((row,i)=>{
						vm.valueArr.push(vm.getValueDatetimeFromArr({num:i}))
					})
					vm.valueArrView.splice (0,vm.valueArrView.length)
					vm.valueArr.forEach(row=>{
						vm.valueArrView.push(dateFormater(row))
					})
				}
				else{
					vm.value = value
					if(['DATE', 'TIME', 'DATETIME'].indexOf(vm.type)!=-1)
						vm.valueView = dateFormater(vm.value)
				}
				vm.checkRefresh()
			},
			saveModalWindowWithDateMulty(){
				let vm=this
				if(vm.modalWindowWithDate && vm.valueArrViewTMP.length==0)
					showMsg( {title:'Ошибка при указании данных',text:'Перед сохранением, укажите дату!'});
				vm.$refs.modalWindow.save(vm.valueArrViewTMP)
			},
			changeSign(){
				let vm=this
				if(vm.checked)
					vm.sign=(vm.sign+1)%vm.signList.length
				vm.checkRefresh()
			},
			changeShow(){
				let vm=this
				if(vm.type=='PASSWORD')
					vm.show = !vm.show
				else if (vm.type=='LIST' || (!vm.multy && vm.isDateTimeLike))
					vm.$refs.input.onClick()
			},
			hasErrorSet(){
				this.hasError = true;
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
				let vm=this, tmp1, tmp2,
					value = vm.value,
					valueView =  vm.value,
					valueArr = vm.type=='RANGE' || vm.multy?[]:null,
					valueArrView = vm.type=='RANGE' || vm.multy?[]:null
				if(vm.type=='RANGE'){
					value=valueView=null
					if( vm.isNumeric ){
						vm.valueRange.forEach(function(row) {
							valueArr.push(row.slice(0))
						})
						valueArrView = valueArr.slice(0)
					}
					else
						vm.valueRange.forEach(function(row) {
							valueArrView.push([nvlo(vm.tableValues[row[0]]).textFull,  nvlo(vm.tableValues[row[1]]).textFull ])
							valueArr.push([nvlo(vm.tableValues[row[0]]).value,  nvlo(vm.tableValues[row[1]]).value ])
						})
					if(!checkedFx)
						vm.checked=	valueArr.length>0 ?true : false
				}
				else if(vm.hasInput && vm.multy){
					value=valueView=null
					valueArr=vm.valueArr.slice(0)
					if (vm.type=='LIST')
						vm.tableValues.forEach(function(row) {
							valueArr.forEach(function(rowVal) {
								if(row.value==rowVal)
									valueArrView.push(row.textFull)
							})
						})
					else if (vm.type=='DATE')
						valueArrView = vm.valueArrView.slice(0)
					else
						valueArrView = valueArr.slice(0)
					if(!checkedFx)
						vm.checked=	valueArr.length>0 ?true : false
				}
				else if(vm.hasInput) {// работа просто с value
					if(vm.isSliderLike &&  !vm.isNumeric ){
						valueView = nvlo(vm.tableValues[value]).textFull				
						value = nvlo(vm.tableValues[value]).value
					}
					else if (vm.type=='LIST')
						vm.tableValues.forEach(function(row) {
							if(row.value==value)
								valueView = row.textFull
						})
					else if (vm.modalWindowWithDate)
						valueView = vm.valueView
					if(!checkedFx)
						vm.checked=	 (value==='' || value==null) ?false:true
				}
				vm.setVal(value, valueView,valueArr, valueArrView)

				if(vm.multy && vm.type=='DATE' && valueArr.length==0 )
					vm.valueArrViewTMP.splice(0, vm.valueArrViewTMP.length)
				if(['DATE', 'TIME', 'DATETIME'].indexOf(vm.type)!=-1 && !vm.multy && value=='')
					vm.valueDateArr[0][0]=vm.valueDateArr[0][1]=null	

			},
			async setVal(value, value_view, value_arr, value_arr_view){
				let vm=this
				if(vm.hasInput && vm.needCheckBox){
					vm.hasError= !vm.$refs.input.validate()
					vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
				}
				await  vm.paramSet( {num: vm.paramsForm, code: vm.code, data:{value ,value_view,  value_arr, value_arr_view, checked:vm.checked, sign:vm.signList[vm.sign].code, } })
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
			vm.code=vm.data.code||vm.code
			vm.name=vm.data.name||vm.name
			vm.tip=vm.data.tip||vm.tip
			vm.placeholder=vm.data.placeholder||vm.placeholder
			vm.type=vm.data.type||vm.type
			vm.nullable=vm.data.nullable||vm.nullable
			vm.columnType=vm.data.column_type||vm.columnType
			vm.columnSize=vm.data.column_size||vm.columnSize
			vm.sortSeq=vm.data.sort_seq||vm.sortSeq
			vm.mask=vm.data.mask||vm.mask
			vm.maskFin=vm.data.mask_fin||vm.maskFin
			vm.error=vm.data.error||vm.error
			vm.checked=!!vm.data.checked||vm.checked
			vm.editable=!!vm.data.editable||vm.editable
			vm.multy=!!vm.data.multy||vm.multy
			vm.min=vm.data.min||vm.min
			vm.max=vm.data.max||vm.max
			vm.maxLen=vm.data.max_len||vm.maxLen
			vm.step=vm.data.step||vm.step
			vm.ticksNeed=!!vm.data.ticks_need||vm.ticksNeed
			vm.tickSize=vm.data.tick_size||vm.tickSize
			vm.thumbLabelNeed=vm.data.thumb_label_need||vm.thumbLabelNeed

			if(vm.data.table_values!=undefined && vm.data.table_values.length>0)
				vm.data.table_values.forEach(element => {
					vm.tableValues.push(
						{value:element.value, textFull:element.text, text:(['LIST'].indexOf(vm.type)==-1?element.text : element.text.length>vm.listItemLenght? element.text.substring(0,vm.listItemLenght)+'...':element.text ),}
					);
					if(isNaN(element.value))
						vm.isNumeric=false
				});

			if(vm.data.sign_list!=undefined && vm.data.sign_list.length>0){
				vm.signList.splice(0,vm.signList.length)
				vm.data.sign_list.forEach(element => {
					vm.signList.push(element);
				});
			}

			if(vm.data.table_header!=undefined && vm.data.table_header.length>0)
				vm.data.table_header.forEach(element => {
					vm.tableHeader.push(element);
				});

			if(vm.data.class!=undefined && vm.data.class.length>0)
				vm.data.class.forEach(element => {
					vm.classCss.push({element:true});
				});

			if(vm.data.value_arr!=undefined && vm.data.value_arr.length>0)
				vm.data.value_arr.forEach(element => {
					vm.valueArr.push(element);
				});

			vm.currentInput= vm.type=='LIST'?'v-select':
				vm.type=='BOOL'?'v-checkbox':
				vm.type=='SLIDER'?'v-slider':
				vm.type=='RANGE'?'v-range-slider':
				vm.type=='DATE'?'v-date-picker':
				vm.type=='TIME'?'v-time-picker':
				'v-text-field'	

			if(['DATE', 'TIME', 'DATETIME'].indexOf(vm.type)!=-1){
				vm.valueArr.forEach(row=>{
					vm.parseToDateArr(row)
				})
				if(vm.valueDateArr.length==0)//подходит только для одной вводимой даты или диапазона из 2 дат, несколько диапазонов или множество дат должны формироваться отдельно
					vm.valueDateArr.push([null,null]);
				if(['DATE', 'DATETIME'].indexOf(vm.type)!=-1)
					vm.modalWindowWithDate=true
				if(['TIME', 'DATETIME'].indexOf(vm.type)!=-1)
					vm.modalWindowWithTime=true
				if(vm.multy){
					vm.valueArr.splice(0,vm.valueArr.length)
					vm.valueDateArr.forEach((row,i)=>{
						let e = vm.getValueDatetimeFromArr({num:i})
						if (e =='')
							return
						vm.valueArrViewTMP.push(e)
						vm.valueArrView.push(dateFormater(e))
						vm.valueArr.push(e)
					})
				}
				else{
					vm.value=vm.getValueDatetimeFromArr({})
					vm.valueView=dateFormater(vm.value)
				}
			}	

			vm.isSliderLike=['SLIDER', 'RANGE'].indexOf(vm.type)!=-1
			vm.thumbLabelNeed =  vm.isSliderLike && vm.thumbLabelNeed?'always':''
			if(vm.isSliderLike ){
				if( vm.tableValues.length>0){
					vm.tableValues.forEach(item=>{
						vm.tickLabels.push(item.text)
					})
					vm.max=vm.tableValues.length-1 
					vm.min=0
					if(!vm.isNumeric){
						vm.step=1
						vm.ticksNeed=true
						vm.tickSize=vm.data.tick_size||2
					}
				}
				vm.value=vm.value||vm.min
				if(vm.valueArr!=undefined && vm.valueArr.length>0)
					vm.valueArr.forEach((element,i) => {
						element[0]=nvl(element[0],vm.min)
						element[1]=nvl(element[0],vm.max)
						if( element[0]>vm.max)
							element[0]=vm.max
						if( element[0]<vm.min)
							element[0]=vm.min
						if( element[1]>vm.max)
							element[1]=vm.max
						if( element[1]<vm.min)
							element[1]=vm.min
						if( element[1]<element[1])
							[element[0], element[1]] = [element[1], element[0]]
						vm.valueRange.push([element[0] , element[1]])
					})
				else
					vm.valueRange.push([vm.min , vm.min])
			}
			if(['SLIDER','RANGE','LIST','NUMBER'].indexOf(vm.type)==-1)
				vm.isNumeric=false
			
			if(['HIDDEN','INFO','NBSP','LINE'].indexOf(vm.type)==-1)
				vm.hasInput=true

			if(['DATE', 'DATE_RANGE', 'DATETIME', 'DATETIME_RANGE', 'TIME', 'TIME_RANGE'].indexOf(vm.type)!=-1)
				vm.isDateTimeLike=true		

			if(vm.hasInput && !vm.nullable){
				vm.isNeed =true
				vm.rules.push(v => v!=undefined && (v!='' || v===0) || 'Поле обязательное!')
				vm.name='❗ '+vm.name//⭐
			}

			if(vm.hasInput && vm.needCheckBox && !vm.nullable)
				vm.rules.push(v => !!vm.checked || 'Поле должно быть использовано!')

			if(vm.hasInput && vm.isNumeric && !isNaN(vm.min) && vm.type!='RANGE' )//Границы должны быть цифрой!
				vm.rules.push(v => v>=vm.min|| !vm.checked || 'Значение должно быть не меньше '+vm.min+'!')

			if(vm.hasInput && vm.isNumeric && !isNaN(vm.max) && vm.type!='RANGE' )
				vm.rules.push(v => v<=vm.max || !vm.checked || 'Значение не должно превышать '+vm.max+'!')

			if(vm.hasInput && vm.maxLenTypes.indexOf(vm.type)!=-1 && vm.maxLen>0)
				vm.rules.push(v => v.length <= vm.maxLen  || !vm.checked || 'Количество символов не должно превышать '+vm.maxLen+'!')

			let tmp = new RegExp(vm.maskFin)
			if(vm.hasInput && tmp!='')//надо помнить про экранирование
				vm.rules.push(v => tmp.test(v) || vm.error)
			vm.paramSetData( {num: vm.paramsForm, data:{...vm.data,value :null, value_view :null, value_arr :null, value_arr_view:null,  } })
			setTimeout(()=>{vm.checkRefresh(true)},500) 
		},
	}
</script>
<style>
	div.input-contaner,
	span.input-contaner>span,
	span.input-contaner										{-webkit-box-align: start;	-ms-flex-align: start;	align-items: flex-start;	display: -webkit-box;	display: -ms-flexbox;	display: flex;	-webkit-box-flex: 1;	-ms-flex: 1 1 auto;	flex: 1 1 auto;}
	.min-width-35px 										{min-width: 35px;}
	i.rotate-90												{-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg);-ms-transform: rotate(90deg);transform: rotate(90deg); }
	.sign-box												{top: 15px;    margin-left: 0px;    margin-right: 0px; }
	.v-input__append-inner .v-input__icon--clear i			{font-size: 15px; }
	.main-contaner 											{display: block !important;}
	.slider-label 											{font-size: 11px;}
	.slider-upper 											{margin-top: -12px;}
	.disabled-label 										{color: hsla(0,0%,100%,.5);}
	.v-slider__ticks-container>.v-slider__ticks>span		{font-size: 12px;}
	.theme--dark.v-chip.v-chip--disabled					{background: #737373;}
	.v-date-picker-more-height								{height: 392px;}
	/*i    border-bottom-color: #2c353f;
    border-bottom-style: groove;
    border-bottom-width: 0.5px;*/
</style>