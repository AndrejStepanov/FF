<template> 
	<v-row v-if="type!='HIDDEN'" align-center  :class="[needPT?'pt-2':'',  'flex-nowrap']" row>
		<div  v-if="type=='INFO'"  class="text-xs-center" style="width:90%; display:block; margin-left: 5%;">
			<v-chip   style="width:100%; display:block; ">
				{{name}}
			</v-chip>
		</div>
		<div  v-else-if="type=='NBSP'">
			&nbsp;
		</div>
		<div  v-else-if="type=='LINE'" style="width:100%; margin-top: 10px; margin-bottom: 10px; " >
			<hr>
		</div>
		<v-tooltip v-else  class='input-contaner' :disabled="tip==''" bottom>
			<template v-slot:activator="{ on:onEnable }">
				<div class='input-contaner flex-grow--99' v-on="onEnable">
					<v-btn  icon v-if="needSign" @click="changeSign" small class="sign-box cursor-pointer" >
						<v-icon small :disabled="getDisable" :class="getSignClass">{{getSign}}</v-icon>
					</v-btn>
					<div class='input-contaner main-contaner' @click="onClick">
						<div class='input-contaner slider-label' v-if="isSliderLike">
							<span :class="getLabelClass" >{{name+(placeholder!=''?' ('+placeholder+')':'')}}</span>
						</div>
						<div :class="getInputContanerTemplateClass">
							<template v-if="isSliderLike">
								<v-flex  v-if="type=='RANGE' && isNumeric" shrink style="width: 60px" >
									<v-text-field v-model="valueArrFst" class=" min-width-35px body-1" hide-details single-line :disabled="getDisable" type="number" min max step :id="id+'_sub_left'"/>
								</v-flex>
								<v-flex>
									<component v-if="type=='RANGE'"  :is="currentInput" v-model="valueArrView" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
											:multi-line="isMultiLine"  :tabindex="sortSeq" :type="getComponentType" :color="checkBoxColor" :id="id"
											:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
											:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask" :min="min" :max="max" :step="step" 
											@keyup.enter="submit"  @blur="onBlur"  @focus="onFocus" dense >
										<template v-if="!isNumeric"	v-slot:thumb-label="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" v-slot:thumb-label="props">
											<slot name="thumb-label" />
										</template>
									</component>

									<component v-else :is="currentInput" v-model="valueView" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
											:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType"  :color="checkBoxColor" :id="id"
											:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
											:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask"  :min="min" :max="max" :step="step" 
											@keyup.enter="submit"  @blur="onBlur" @focus="onFocus" dense >
										<template v-if="!isNumeric"	v-slot:thumb-label="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" v-slot:thumb-label="props">
											<slot name="thumb-label" />
										</template>
									</component>
								</v-flex>
								<v-flex shrink style="width: 60px" v-if="isNumeric" >
									<v-text-field  v-if="type=='RANGE'" v-model="valueArrScnd" class=" min-width-35px body-1" hide-details single-line type="number" :disabled="getDisable"    :min="min" :max="max" :step="step" :id="id+'_sub_right'"/>
									<v-text-field  v-else v-model="valueView" class=" min-width-35px body-1" hide-details single-line type="number" :disabled="getDisable"   :min="min" :max="max" :step="step" :id="id+'_sub_right'"/>
								</v-flex>
							</template>
							<template v-else>
								<component v-if="!multy && !isDateTimeLike && !isNeedTab" :is="currentInput" v-model="value" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
									:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType" :items="getListItems" dense :counter="getCounter"
									:error="inputErrorState"  :error-messages="inputErrorText" :id="id" v-bind="vInputProp"
									:append-icon="getAppendIcon" :clearable="getClearable"    :min="min" :max="max" :step="step" auto-grow rows="1"
									@keyup.enter="submit"  @blur="onBlur" @focus="onFocus" @click:append="appendClick"
									:class="getComponentClass" />
								<component v-else-if="multy && type=='LIST'" :is="currentInput" v-model="valueArr" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
									:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType" :items="getListItems" dense :id="id" v-bind="vInputProp"
									:append-icon="getAppendIcon" :clearable="getClearable"  :min="min" :max="max" :step="step"
									@keyup.enter="submit"  @blur="onBlur" @focus="onFocus" multiple chips deletable-chips small-chips
									:class="getComponentClass" />
								<v-dialog v-else-if="!multy && isDateTimeLike " ref="dialog" v-model="isDialog" :return-value.sync="valueArr" persistent	:width="getDialogWidth"
										class="max-width" :content-class="getDialogClass" >
									<template v-slot:activator="{ on:onDialog }">
										<v-text-field  v-model="valueArrViewFst" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"  readonly ref="input" 
											:tabindex="sortSeq"  :clearable="getClearable"  :min="min" :max="max" :append-icon="getAppendIcon"  :id="id+'_activator'"
											@keyup.enter="submit" @blur="onBlur" @focus="onFocus" v-on="onDialog" :class="['body-1', ['DATETIME_RANGE'].indexOf(type)!=-1?'smallFont':'' ]" />
									</template> <!-- v-mask="vMaskDateTime"  --> 
									<template>
										<div  :style="getDialogMainDivStyle" ref="dialogDiv">
											<v-toolbar  class="fixedDiv dateDialogHeadInput" >	
												<v-text-field  :value="valueArrDateView" :label="name" :hint="placeholder"  :required="!!nullable"  ref="inputDate" :id = "'inputDate_'+id"
													clearable  :min="min" :max="max"  :error="valueArrDateViewError!=''" v-mask="vMaskDateTime" :error-messages="valueArrDateViewError"
													@keydown.enter="saveDialog(valueArrDate)" @input="valueArrDateViewChange" />
											</v-toolbar>
											<v-date-picker v-if="dialogWithDate"  v-model="valueArrDateFstFst" scrollable :locale="profileLanguage()" :max="max" :min="min" ref="date1"  no-title
												@dblclick:date="saveDialog(valueArrDate)" :class="['with-append-on-right',  'v-date-picker-more-height','higher-z-index']" />
											<c-time-picker v-if="dialogWithTime" v-model="valueArrDateFstScnd"  ref="timer1" :useSeconds="timeWithSeconds" :width="dataPickerTimeWidth"
												@dblclick:time="saveDialog(valueArrDate)" :class="[ 'higher-z-index', 'v-date-picker-more-height',  ['DATETIME','DATETIME_RANGE'].indexOf(type)!=-1?'dateDialogTimeLeftBorder':'' ]"  />
											<template v-if="dialogWithRange ">
												<div :class="getDialogSeparatorClassDateRange" >
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
												</div>
												<v-date-picker v-if="['DATE_RANGE','DATETIME_RANGE'].indexOf(type)!=-1" v-model="valueArrDateScndFst" scrollable :locale="profileLanguage()" ref="date2" no-title
													@dblclick:date="saveDialog(valueArrDate)" :class="['with-append-on-right',  'v-date-picker-more-height','higher-z-index']"/>
												<c-time-picker v-if="['TIME_RANGE','DATETIME_RANGE'].indexOf(type)!=-1" v-model="valueArrDateScndScnd"   ref="timer2" :useSeconds="timeWithSeconds" :width="dataPickerTimeWidth"
													@dblclick:time="saveDialog(valueArrDate)" :class="['higher-z-index', 'v-date-picker-more-height',  ['DATETIME_RANGE'].indexOf(type)!=-1?'dateDialogTimeLeftBorder':'' ]" />
											</template>
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-btn small class="accent"  @click="saveDialog(valueArrDate)" :disabled="valueArrDateViewError!=''"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.texts.simple.actions.accept') }} </v-btn>
											<v-spacer/>
											<v-btn small class="accent"  @click="isDialog = false">{{ $vuetify.lang.t('$vuetify.texts.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="multy && type=='DATE'"	ref="dialog" v-model="isDialog" :return-value.sync="valueArr" persistent :width="getDialogWidth"
										class="max-width" :content-class="getDialogClass">
									<template v-slot:activator="{ on:onDialog }">
										<v-combobox   :value="valueArrView" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"   ref="input" 
											:tabindex="sortSeq"  :clearable="getClearable"   :min="min" :max="max" multiple chips  small-chips  :append-icon="getAppendIcon" 
											@keyup.enter="submit" @blur="onBlur" @focus="onFocus" v-on="onDialog" class=" body-1" />
									</template>
									<template>
										<div  :style="getDialogMainDivStyle">
											<v-date-picker v-if="dialogWithDate"  v-model="valueArrDate" multiple  scrollable :locale="profileLanguage()" class='v-date-picker-more-height' />
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-btn small class="accent"  @click="saveDialog(valueArrDate)"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.texts.simple.actions.accept') }} </v-btn>
											<v-spacer/>
											<v-btn small class="accent"  @click="isDialog = false">{{ $vuetify.lang.t('$vuetify.texts.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="isNeedTab"	ref="dialog" v-model="isDialog" :return-value.sync="value" persistent :width="getDialogWidth"
										class="max-width" :content-class="getDialogClass" overlay-color="white" overlay-opacity="1">
									<template v-slot:activator="{ on }">
										<v-text-field  v-model="valueView" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"  readonly ref="input"
											:tabindex="sortSeq"  :clearable="getClearable"   :min="min" :max="max" :append-icon="getAppendIcon"
											@keyup.enter="submit" @blur="onBlur" @focus="onFocus" v-on="isAuto?{on}:{'click:append':on.click}" class=" body-1" />
									</template>
									<template>
										<div  :style="getDialogMainDivStyle">
											<c-table tableTitle="$vuetify.texts.modals.treeAdd.title" :searchNeed="true" :headers="getTabHeader"	:items="getTabValues" v-model="tabSelectedRows"  ref="table"  
												:vDataTableProp="{showSelect:true, singleSelect:!multy}"  withRowNum	:hideDefaultFooter="false"  :height="getDialogMainDivHeight" />
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-btn small class="accent"  @click="saveDialog(tabSelectedRows)"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.texts.simple.actions.accept') }} </v-btn>
											<v-spacer/>
											<v-btn small class="accent"  @click="isDialog = false">{{ $vuetify.lang.t('$vuetify.texts.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
							</template>
						</div>
					</div>
				</div>
			</template>
			<span >{{ $vuetify.lang.t(tip)}}</span>
		</v-tooltip>
		<v-checkbox v-if="!!needCheckBox && hasInput" v-model="checked" hide-details class="shrink ml-2 mb-2" @change="postWork(true)" :color="checkBoxColor"></v-checkbox>
	</v-row>
</template>

<script>
	import XStore from '../mixins/x-store'
	import CTimePicker from './c-time-picker'
	import {VSelect,VSlider,VRangeSlider,VTextarea } from 'vuetify/lib' //из-за хитрого загрузчика, который анализирует только шаблон, динамические окмпоененты приходится импортировать руками. иначе они не подгрузятся
	export default {
		name:'c-input',
		data: () => ({
			checkBoxColor:'false',//переопределяется в created
			hasError: false,
			dataPickerHeight: 369,
			dataPickerWith: 290,
			dataPickerTimeColumnWidth: 52,
			inputErrorState:false,
			inputErrorText:'',
			isMounted:false,
			listItemLenght: 18,
			lastTimeSend: 0,
			maxLenTypes:['INPUT','NUMBER', 'PASSWORD'],
			show:false,
			inputDateInsertInit:false,
			isFocus:false,
			isDialog:false,
			sign:0,
			tabSelectedRows:[],
			thumbSize:10,
			valueArrDate:['',''],
			valueArrDateView:'',
			valueArrDateViewError:'',
			valueArrDateViewChangeLastTime:0,
			valueArrDateViewChanging:false,
		}),
		props:{
			data:{type: Object, required: true, default:()=>{return {}}},
			dialogId: {type:  Number,default:0},
			paramsForm: {type: String, defuault:''},
			needCheckBox:{type:  Boolean, default:false},
			needSign:{type:  Boolean, default:false},
			needPT:{type:  Boolean, default:false},
			listItemMin:{type:  Boolean, default:false},
		},
		computed: {
			getComponentType(){
				return this.type!='PASSWORD' ?this.type:
					this.type=='PASSWORD'?this.show?'text':'password':
					'text'
			},
			getSign(){
				return !this.needSign?'':this.signList[this.sign].icon
			},
			getAppendIcon(){
				return this.isWithDialog && !this.isAuto? 'more_vert':
					this.type=='PASSWORD'? (this.show ? 'visibility_off' : 'visibility'):
					this.type=='LIST'?'$vuetify.icons.dropdown':''
			},
			getClearable(){
				return this.type!='PASSWORD'
			},
			getInputContanerTemplateClass(){
				return {
					"input-contaner": true,
					"slider-upper": this.isSliderLike && this.isNumeric,
				}
			},
			getLabelClass(){
				return {
					"disabled-label": this.needCheckBox && !this.checked,
					"error--text": ( this.hasError && this.$refs.input.validations!='' ),					
				}
			},
			getSignClass(){
				return {
					"rotate-90": this.needSign && this.signList[this.sign].icon=='pause' && this.signList[this.sign].code=='=',
				}
			},
			getComponentClass(){
				return {
					"body-1":this.needSign,
				}
			},
			getDisable(){
				return !this.needCheckBox? !this.editable  : !this.checked
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
			getDialogScrollY(){
				let vm=this
				return ['DATETIME','TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1 && (vm.dialogDatePanelCnt==1 || vm.$vuetify.breakpoint.height<481) || 
					vm.dialogDatePanelCnt==2 && ['DATETIME_RANGE'].indexOf(vm.type)!=-1 ||
					vm.type=='DATETIME_RANGE' && vm.dialogDatePanelCnt<=2 || 
					vm.dataPickerHeight+48>vm.$vuetify.breakpoint.height *0.9 ||  
					vm.isNeedTab || 
					vm.type=='TEXT'
			},
			getDialogWidth(){
				let vm=this,
					width= vm.isNeedTab?'max':
						Math.ceil(
							(vm.dataPickerWith*(vm.dialogWithDate?(['DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1?2:1):0)+  
								vm.dataPickerTimeWidth*(vm.dialogWithTime ?(['TIME_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1?2:1):0)+
								(['DATETIME'].indexOf(vm.type)!=-1?1:0)+
								(['DATETIME_RANGE'].indexOf(vm.type)!=-1?1:0)
							) / (vm.dialogDatePanelCnt==2&& ['TIME_RANGE','DATETIME','DATE','TIME'].indexOf(vm.type)==-1?2:1) +
							(['TIME_RANGE'].indexOf(vm.type)!=-1 || vm.dialogDatePanelCnt==4 && ['DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1?24+9:0)
						) + 
						(vm.getDialogScrollY && !vm.isNeedTab? 17:0) //скрол плашка
				return width+'px'
			},
			getDialogClass(){
				let vm=this
				return "overflow-hidden "
			},
			getDialogMainDivHeight(){
				let vm=this
				return vm.getDialogScrollY  ?  vm.$vuetify.breakpoint.height *0.9 -48-15:	vm.dataPickerHeight /*стандартная высота одного элемента управления для дат*/
			},
			getDialogMainDivStyle(){
				let vm=this,
					height=vm.dataPickerHeight/*стандартная высота одного элемента управления*/,
					overflowY='hidden'
				if( vm.getDialogScrollY ){
					height = vm.getDialogMainDivHeight
					overflowY='auto'
				}
				return {
					height: height + 'px' ,
					overflowY: overflowY,
					overflowX: 'hidden',
				}
			},
			getDialogSeparatorClassDateRange(){
				let vm=this
				return {
					"v-date-picker-more-height": vm.dialogDatePanelCnt>2 || ['TIME_RANGE','DATETIME'].indexOf(vm.type)!=-1,
					"dialog-display-inline-grid": vm.dialogDatePanelCnt>2 || ['TIME_RANGE','DATETIME'].indexOf(vm.type)!=-1 ,
					"dialog-narrow-display-div-arrow": vm.dialogDatePanelCnt<=2  && ['TIME_RANGE','DATETIME'].indexOf(vm.type)==-1,	
					"flex-direction--row":vm.dialogDatePanelCnt<=2 && ['TIME_RANGE','DATETIME'].indexOf(vm.type)==-1,
					"flex-direction--column":vm.dialogDatePanelCnt>2 && ['TIME_RANGE','DATETIME'].indexOf(vm.type)!=-1,				
					"separator-dark-bc": vm.$vuetify.theme.dark,
					"separator-light-bc": !vm.$vuetify.theme.dark,
					"v-picker": true,
					"v-card": true,			
					"v-card": true,			
					"overflow-hidden":true,
				}
			},
			getDialogSeparatorDateRangeArrowClass(){
				let vm=this
				return {
					"rotate-90": vm.dialogDatePanelCnt<=2 && ['TIME_RANGE','DATETIME'].indexOf(vm.type)==-1,					  
					"dialog-narrow-display-arrow-width": vm.dialogDatePanelCnt<=2 && ['TIME_RANGE','DATE_RANGE','DATETIME'].indexOf(vm.type)==-1,					  
					"dialog-narrow-display-arrow-width-min": vm.dialogDatePanelCnt<=2 &&	['DATE_RANGE'].indexOf(vm.type)!=-1,		
					'accent-color':true,	
					'flex--99 ':true,  
				}
			},
			dialogDatePanelCnt(){
				let vm = this
				return vm.$vuetify.breakpoint.lgAndUp ? 4: 2
			},
			getTabHeader(){
				let vm = this
				if(!vm.isMounted)
					return[];
				return vm.$parent.$refs[vm.tabGroup]? vm.$parent.$refs[vm.tabGroup][0].tabHeader:[]
			},	
			getTabValues(){
				let vm = this
				if(!vm.isMounted)
					return[];
				return vm.$parent.$refs[vm.tabGroup]?vm.$parent.$refs[vm.tabGroup][0].tabValues:[]
			},
			//переход на вьюэкс
			checked: {
				set:function (val)	{ if(this.isMounted && this.needCheckBox && this.checked!=val) this.paramSet( {num: this.paramsForm, code:this.code, data:{checked:val  } }) 		},
      			get:function() 		{	return nvlo(this.paramData).checked==undefined? false:!!this.paramData.checked&&this.isMounted								},
			},
			code()				{	return nvlo(this.data).code||'code'																								},
			paramData()			{	return this.paramByCode(this.paramsForm, this.code)																				},
			callBackEval()		{	return nvlo(this.paramData).after_edit_script||''																				},
			id()				{	return ''+(nvlo(this.paramData).id||this.paramsForm+'_'+this.code)																},
			tip()				{	return nvlo(this.paramData).tip||''																								},
			placeholder()		{	return nvlo(this.paramData).placeholder||''																						},
			type()				{	return nvlo(this.paramData).type||'type'																						},
			nullable()			{	return nvlo(this.paramData).nullable==undefined? false:!!this.paramData.nullable												},
			columnType()		{	return nvlo(this.paramData).columnType||''																						},
			columnSize()		{	return nvlo(this.paramData).columnSize||0																						},
			sortSeq()			{	return nvlo(this.paramData).sort_seq||0																							},
			vMask()				{	return nvlo(this.paramData).vMask||''																							},
			maskFin()			{	return nvlo(this.paramData).mask_fin||''																						},
			maskFinRegExp()		{	return this.maskFin==''?'':new RegExp(this.maskFin)																				},
			error()				{	return nvlo(this.paramData).error||'$vuetify.texts.msgs.incorrectValue.title'													},
			editable()			{	return nvlo(this.paramData).editable==undefined? true:!!this.paramData.editable													},
			isAuto()			{	return nvlo(this.paramData).isAuto==undefined? false:!!this.paramData.isAuto													},
			isDateTimeLike()	{	return ['DATE', 'DATE_RANGE', 'DATETIME', 'DATETIME_RANGE', 'TIME', 'TIME_RANGE'].indexOf(this.type)!=-1						},
			dialogWithDate()	{	return ['DATE', 'DATETIME', 'DATE_RANGE', 'DATETIME_RANGE'].indexOf(this.type)!=-1												},
			dialogWithTime()	{	return ['TIME', 'DATETIME','TIME_RANGE', 'DATETIME_RANGE'].indexOf(this.type)!=-1												},
			dialogWithRange()	{	return ['DATE_RANGE', 'TIME_RANGE', 'DATETIME_RANGE'].indexOf(this.type)!=-1													},
			hasInput()			{	return ['HIDDEN','INFO','NBSP','LINE'].indexOf(this.type)==-1																	},
			isSliderLike()		{	return ['SLIDER', 'RANGE'].indexOf(this.type)!=-1																				},
			multy()				{	return !this.isSliderLike && (nvlo(this.paramData).multy==undefined? false:!!this.paramData.multy	)							},
			timeWithSeconds()	{	return nvlo(this.paramData).seconds==undefined? false:!!this.paramData.seconds													},
			maxLen()			{	return nvlo(this.paramData).maxLen||0																							},
			tabGroup()			{	return nvlo(this.paramData).tab_group||""																						},
			isNeedTab()			{	return this.tabGroup!='' && !!nvlo(this.paramData).withTab																		},
			tickSize()			{	return nvlo(this.paramData).tickSize||0																							},
			thumbLabelNeed()	{	return nvlo(this.paramData).thumb_label_need==undefined?'':!!this.paramData.thumb_label_need && this.isSliderLike?'always':''	},
			isBirthDate()		{	return nvlo(this.paramData).isBirthDate==undefined? false:!!this.paramData.isBirthDate											},
			isMultiLine()		{	return this.columnSize>50																										},
			isWithArray()		{	return this.isDateTimeLike || ['RANGE'].indexOf(this.type)!=-1 || this.type=='LIST' && this.multy								},
			isWithDialog()		{	return this.isDateTimeLike || this.isNeedTab																					},
			rangeSeparator()	{	return this.$vuetify.lang.t('$vuetify.texts.simple.labels.dateRangeSeparator' )													},
			maskDateTime()		{	return new RegExp(!this.isDateTimeLike || this.multy?'': [
					this.dialogWithDate?'\\d\\d.\\d\\d.\\d\\d\\d\\d':'', this.dialogWithTime?'\\d\\d:\\d\\d'+(this.timeWithSeconds?':\\d\\d':''):'', 
					this.dialogWithRange?this.rangeSeparator.trim():'',  
					this.dialogWithRange&&this.dialogWithDate?'\\d\\d.\\d\\d.\\d\\d\\d\\d':'', this.dialogWithRange&&this.dialogWithTime?'\\d\\d:\\d\\d'+(this.timeWithSeconds?':\\d\\d':''):'', 
				].filter(row=>row!='').join(' ') )
			},
			vMaskDateTime()		{	return !this.isDateTimeLike || this.multy?'': [
					this.dialogWithDate?'##.##.####':'', this.dialogWithTime?'##:##'+(this.timeWithSeconds?':##':''):'', 
					this.dialogWithRange?this.rangeSeparator.trim():'',  
					this.dialogWithRange&&this.dialogWithDate?'##.##.####':'', this.dialogWithRange&&this.dialogWithTime?'##:##'+(this.timeWithSeconds?':##':''):'', 
				].filter(row=>row!='').join(' ')
			},
			dataPickerTimeColumnCnt(){
				return !this.dialogWithTime?0:this.timeWithSeconds?3:2
			},
			dataPickerTimeWidth(){
				return ['DATETIME', 'DATETIME_RANGE'].indexOf(this.type)!=-1? this.dataPickerTimeColumnCnt * this.dataPickerTimeColumnWidth:
					this.dataPickerWith / (this.type=='TIME_RANGE'?2:1)-(this.type=='TIME_RANGE'?17:0)+1
			},
			vInputProp()		{
				let vm = this
				return {
					//...(!vm.dialogWithRange&&vm.dialogWithTime ?{ "type":'time'}:{}) 
					//,...(!vm.dialogWithRange&&vm.dialogWithDate ?{ "type":'date'}:{}) 
					//,...(!vm.dialogWithRange&&vm.dialogWithTime&&vm.dialogWithDate ?{ "type":'datetime-local'}:{})
					/*, ...(['TEXT', 'INPUT', 'NUMBER'].indexOf(vm.type)!=-1?{ "v-mask":vm.vMask}:{})*/
				}
			},
			tabHeader()			{	//для TAB [{value:'param1',text:'Параметра1',visible:true},{value:'param2',text:'Параметра2',visible:true}]
				let vm = this
				return 'tab_header' in vm.paramData && vm.paramData.tab_header.length>0	? vm.paramData.tab_header.slice() : [] 
			},
			tabValues()			{
				let vm = this
				return 'tab_values' in vm.paramData  && vm.paramData.tab_values.length>0 ? vm.paramData.tab_values.slice() : [] 
			},
			signList()			{
				let vm = this
				return 'sign_list' in vm.paramData && vm.paramData.sign_list.length>0	? vm.paramData.sign_list.slice() :
					[
						{code:'=',icon:'pause'},
						{code:'!=',icon:'code'},
						{code:'>',icon:'chevron_right'},
						{code:'>=',icon:'last_page'},
						{code:'<',icon:'chevron_left'},
						{code:'<=',icon:'first_page'},
					] 
			},
			classCss() {//[ "class1","class2",]
				let vm = this
				return 'class' in vm.paramData && vm.paramData.class.length>0	? vm.paramData.class.slice() : [] 
			},
			currentInput()		{
				let vm = this
				return vm.type=='LIST'?'v-select':
				vm.type=='BOOL'?'v-checkbox':
				vm.type=='SLIDER'?'v-slider':
				vm.type=='RANGE'?'v-range-slider':
				vm.type=='DATE'?'v-date-picker':
				vm.type=='TIME'?'v-time-picker':
				vm.type=='TEXT'?'v-textarea':
				vm.type=='INPUT' && vm.isMultiLine?'v-textarea':
				'v-text-field'
			},
			tableValues(){ //для листов [{value:'cur',text:'На текущем уровне'}], для TAB [{param1:1, param2:2, }]
				let vm=this
				if (!('table_values' in vm.paramData) || vm.paramData.table_values.length==0)
					return []
				return vm.paramData.table_values.map(row=>{
					let text = nvl(row.text,row.value)
					return {value:row.value, textFull:text, text:(['LIST'].indexOf(vm.type)==-1?text : text.length>vm.listItemLenght? text.substring(0,vm.listItemLenght)+'...':text ),}
				})
			},
			tickLabels()		{ 	return this.tableValues.map(row=>{return row.text}) 																															},
			isNumeric()			{ 	return this.tableValues.equals([])?['SLIDER','RANGE','LIST','NUMBER'].indexOf(this.type)!=-1 : this.tableValues.findIndex(row=>(!isNumeric(row.value)))==-1						},
			min()				{ 	let vm=this, tmp = nvlo(vm.paramData).min||null; return vm.isDateTimeLike?( !isNumeric(tmp)?tmp:null ):vm.isSliderLike&&vm.tableValues.length>0?0 : tmp							},
			max()				{ 	let vm=this, tmp = nvlo(vm.paramData).max||null; return vm.isDateTimeLike?( !isNumeric(tmp)?tmp:null ):vm.isSliderLike&&vm.tableValues.length>0?vm.tableValues.length-1:tmp		},
			isSliderString()	{	return this.isSliderLike && this.tableValues.length>0 && !this.isNumeric																										},
			step()				{	return this.isSliderString? 1 : nvlo(this.paramData).step||1																													},
			ticksNeed()			{	return this.isSliderString? true : nvlo(this.paramData).ticksNeed==undefined? false:!!this.paramData.ticksNeed																	},
			tickSize()			{	return nvlo(this.paramData).tickSize|| this.isSliderString? 2 :0																												},
			rules(){
				let vm=this,
					rules=[]
				if(vm.hasInput && vm.isNumeric && isNumeric(vm.min) && vm.type!='RANGE' && vm.min!=null )//Границы должны быть цифрой!
					rules.push(v => v>=vm.min|| !vm.checked || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.valMoreOrEq', ...([vm.min]) ) )

				if(vm.hasInput && vm.isNumeric && isNumeric(vm.max) && vm.type!='RANGE' && vm.max!=null )
					rules.push(v => v<=vm.max || !vm.checked || 'Значение не должно превышать '+vm.max+'!')

				if(vm.hasInput && vm.maxLenTypes.indexOf(vm.type)!=-1 && vm.maxLen>0)
					rules.push(v => v.length <= vm.maxLen  || !vm.checked || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.valLessOrEq', ...([vm.maxLen]) ) )

				if(vm.hasInput && vm.maskFinRegExp!='')//надо помнить про экранирование
					rules.push(v => vm.maskFinRegExp.test(v) || vm.$vuetify.lang.t( vm.error ))

				if(vm.hasInput && vm.maskDateTime!='')
					rules.push(v => vm.maskDateTime.test(v) || vm.$vuetify.lang.t( '$vuetify.texts.simple.msgs.dateForamatWrong' ))
				

				if(vm.hasInput && !vm.nullable)
					rules.push(v => v!=undefined && (v!='' || v===0) || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.fieldIsNecessary' ) )

				if(vm.hasInput && vm.needCheckBox && !vm.nullable)
					rules.push(v => !!vm.checked || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.fieldMustUsed' ) )

				return rules
			},
			dateTimeRules(){
				let vm=this,
					rules=[]
				if(vm.hasInput && vm.maskDate!='')
					rules.push(v => vm.maskDate.test(v) || vm.$vuetify.lang.t( '$vuetify.texts.simple.msgs.dateForamatWrong' ))
				rules.push(v => v!=undefined && (v!='' || v===0) || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.fieldIsNecessary' ) )
				return rules
			},
			isNeed()			{	return this.hasInput && !this.nullable																												},
			name()				{	return (this.isNeed?'⭐ ':'')+ nvlo(this.paramData).name||''/*❗*/																					},
			value: {	
				set:function (val)	{
					this.setValue(val)
				},
 				get:function()	{
					let vm=this,
						tmp = 'value' in vm.paramData? vm.paramData.value: null
					if ('value' in vm.paramData && 'valueView' in vm.paramData && nvl(nvlo(vm.paramData).need_reset, false)==false)
						return tmp
					/*if(vm.type=='LIST' && !vm.multy  && vm.valueArr.length>0 && tmp==null)
						tmp= vm.valueArr[0]*/
					else if(vm.isDateTimeLike && !vm.multy && vm.valueArr.length>0  && tmp==null)
						if(['DATE', 'TIME', 'DATETIME'].indexOf(vm.type)!=-1)
							tmp = vm.valueArr[0]
					vm.setValue(tmp, false)
					return tmp
				},
			},
			valueView: {
				set:function (val)	{	
					let vm = this,
						res=val
					if(vm.type=='SLIDER' && !vm.isNumeric)
						res = vm.tableValues[val].value
					else if(vm.type=='LIST' && !vm.multy)
						res = nvlo(vm.tableValues.find( row=> ( row.textFull ==val ) ) ,{value:null}).value
					else if(vm.isDateTimeLike)
						res = dateFormatRevert(val)
					vm.setValue(res)
				},
				get:function()	{	return  this.getValueViewFromValue(this.value)		},				
			},
			valueArr: {
				set:function (val)	{
					this.setValueArr(val)
				},
				get:function() {
					let vm = this,
						res= 'value_arr' in vm.paramData? vm.paramData.value_arr : []
					let tmp = res
					
					if(res.equals([]) && vm.type=='RANGE' ){
						if (vm.isNumeric)
							res= [vm.min , vm.max]
						else
							res= [ vm.tableValues[vm.min].value ,  vm.tableValues[vm.max].value ]
					}
					if(nvlo(vm.paramData).need_reset ||  !tmp.equals(res) || !('valueArrView' in vm.paramData) || !('value_arr' in vm.paramData) )
						vm.setValueArr(res, false)
					return res
				},
			},
			valueArrView: {
				set:function (val)	{
					let vm = this,
						res=val
					if(vm.multy && vm.type=='DATE')
						res= res.map( row=> (dateFormatRevert(row)) )
					else if(vm.type=='RANGE' ){
						if (!vm.isNumeric)
							res = [ vm.tableValues[res[0]].value ,  vm.tableValues[res[1]].value ]
					}
					vm.setValueArr(res)
				},
      			get:function() 		{
					return  this.getValueArrViewFromValueArr(this.valueArr)
				},
			},
			valueArrFst: {
				set:function (val)	{this.$set(this.valueArr, 0, val) 																									},
				get:function() 		{return this.valueArr[0]																											},
			},
			valueArrScnd: {	
				set:function (val)	{this.$set(this.valueArr, 1, val) 																									},
				get:function()		{return this.valueArr[1]																				},
			},
			valueArrViewFst: {
				set:function (val)	{if (!this.multy && this.isDateTimeLike && val == undefined) this.valueArr= this.getDateTimeArrFromString(val) },
				get:function() 		{return this.valueArrView[0]																										},
			},

			valueArrDateFst: {
				set:function (val)	{this.$set(this.valueArrDate, 0, val) 																								},
				get:function() 		{return this.valueArrDate[0]																										},
			},
			valueArrDateScnd: {	
				set:function (val)	{this.$set(this.valueArrDate, 1, val)																							},
				get:function()		{return this.valueArrDate[1]																										},
			},
			valueArrDateFstFst: {
				set:function (val)	{
					if(this.dialogWithDate)
						this.valueArrDateFst=val+ (this.dialogWithTime ?'T'+this.valueArrDateFstScnd:'')
				},
				get:function()		{
					return this.dialogWithDate? this.valueArrDateFst.split('T')[0]:''	
				},
			},
			valueArrDateFstScnd: {
				set:function (val)	{					
					if (!this.dialogWithTime)
						return
					if(this.dialogWithDate)
						this.valueArrDateFst=this.valueArrDateFstFst+'T'+val; 
					else this.valueArrDateFst=val;			
				},
				get:function()		{
					return !this.dialogWithTime?'00:00:00': this.dialogWithDate? nvl(this.valueArrDateFst.split('T')[1],'00:00:00'):this.valueArrDateFst
				},
			},
			valueArrDateScndFst: {
				set:function (val)	{
					this.valueArrDateScnd=val+( this.type=='DATETIME_RANGE'? 'T'+this.valueArrDateScndScnd:'')
				},
				get:function()		{
					return ['DATE_RANGE','DATETIME_RANGE'].indexOf(this.type)!=-1? this.valueArrDateScnd.split('T')[0]:''
				},
			},
			valueArrDateScndScnd: {
				set:function (val)	{
					if(['DATETIME_RANGE','TIME_RANGE'].indexOf(this.type)==-1)
						return
					if(this.type=='DATETIME_RANGE')
						this.valueArrDateScnd=this.valueArrDateScndFst +'T'+ val
					else
						this.valueArrDateScnd= val
				},
				get:function()		{
					return ['DATETIME_RANGE','TIME_RANGE'].indexOf(this.type)==-1?'00:00:00': this.type=='DATETIME_RANGE'? nvl(this.valueArrDateScnd.split('T')[1],'00:00:00'):this.valueArrDateScnd
				},
			},
		},
		watch: {
			isDialog (val, valOld) {
				let vm = this
				if(val){
					if( vm.isDateTimeLike ){
						vm.dialogWithTime && !vm.multy && setTimeout(()=> {nvlo(vm.$refs.timer1,'')!='' && vm.$refs.timer1.scrollToSelected();  nvlo(vm.$refs.timer2,'')!='' && vm.$refs.timer2.scrollToSelected() } , 100) 
						vm.isBirthDate&& !vm.multy && vm.$nextTick(() => (vm.$refs.date1.activePicker = 'YEAR')) 
						vm.valueArrDate = vm.valueArr.slice(0)
						vm.valueArrDateViewError=''
						setTimeout(()=> {
							vm.$refs.dialogDiv.querySelector('#inputDate_'+vm.id ).focus()
							vm.$refs.dialogDiv.querySelector('#inputDate_'+vm.id ).selectionEnd=0
							if(!vm.inputDateInsertInit){
								vm.inputDateInsertInit=true							
									let input = vm.$refs.dialogDiv.querySelector('#inputDate_'+vm.id )
									input.addEventListener('keypress', function(e){
										if(this.value.length<vm.vMaskDateTime.length || ['0','1','2','3','4','5','6','7','8','9'].indexOf(e.key)==-1 )
											return
										let s = this.selectionStart
										while( isNaN( parseFloat(this.value.substr(s , 1) ))  && s <= this.value.length)
											s++
										this.value =this.value.substr(0, s) + this.value.substr(s + 1) 
										this.selectionEnd = s;
									}, false)
							}
						},100)
					}
				}
				else if( valOld )
					vm.onBlur() 
			},
			valueArrDate(val, valOld){
				if(!this.valueArrDateViewChanging){
					this.valueArrDateView=this.getValueArrViewFromValueArr (this.valueArrDate)	
					this.valueArrDateViewError=''
				}
			},
		},
		components: {
			CTable: (resolve) =>{ require(['./c-table.vue'], resolve) },
			VSelect,VSlider,VRangeSlider,VTextarea,CTimePicker
		},
		mixins: [
			XStore,
		],		
		methods: {
			valueArrDateViewChange(val){
				let vm = this,
					res = ['','','',''],
					curTime = new Date().getTime()
				if ( curTime>vm.valueArrDateViewChangeLastTime+100 ){//маска работает коряво, сперва присылается голое число и только потом отрабатывает замена
					vm.valueArrDateViewChangeLastTime=curTime
					return
				}

				val.split( vm.rangeSeparator ).forEach( (part, i)=>{
					part.split(' ').forEach( (piece,j)=>{
						res[i*2+j+(vm.dialogWithTime && !vm.dialogWithDate ? 1:0)]=piece
					})
				})

				if( vm.dialogWithDate ){
					if( !validateDate(res[0]) ){
						vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.texts.errors.wrongDate.text', [res[0] ]  ) ) // $nextTick ->косяк в маске,2 быстрых нажатия смещают курсор в конец инпута
						return
					}
					if( vm.dialogWithRange && !validateDate(res[2]) ){
						vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.texts.errors.wrongDate.text', [res[2] ]  ) )
						return
					}
				}
				if( vm.dialogWithTime ){
					if( !validateTime(res[1], vm.timeWithSeconds) ){
						vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.texts.errors.wrongTime.text', [res[1] ] ) )
						return
					}
					if( vm.dialogWithRange && !validateTime(res[3], vm.timeWithSeconds) ){
						vm.$nextTick(() =>  vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.texts.errors.wrongTime.text', [res[3] ] ) )
						return
					}
				}
				vm.valueArrDateViewError=''
				vm.valueArrDateViewChanging=true
				vm.$set(vm.valueArrDate, 0, (vm.dialogWithDate? nvl(dateFormatRevert(res[0]),vm.valueArrDateFstFst) +'T':'') +nvl(res[1], vm.valueArrDateFstScnd))
				vm.$set(vm.valueArrDate, 1, (vm.dialogWithDate? nvl(dateFormatRevert(res[2]),vm.valueArrDateScndFst) +'T':'') +nvl(res[3], vm.valueArrDateScndScnd) )
				vm.$nextTick(() => vm.valueArrDateViewChanging=false) 
				console.log('valueArrDateViewChange', val, vm.valueArrDate);
			},
			preWork(checkedFixed=false){
				let vm = this
				if(vm.$refs.input!=undefined)
					vm.hasError= !vm.$refs.input.validate()
				vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
			},
			postWork(checkedFixed=false){
				let vm = this
				if(!checkedFixed && !vm.isFocus && !vm.isDialog)
					if(vm.isWithArray)
						vm.checked= vm.valueArr !=undefined && vm.isDateTimeLike && !vm.multy? !vm.valueArr.equals(['','']) : !vm.valueArr.equals([])
					else
						vm.checked= vm.value!=undefined && vm.value!=null
				if(vm.$refs.input!=undefined)
					vm.hasError= !vm.$refs.input.validate()
				vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
				if(vm.callBackEval!='')
					eval(vm.callBackEval)
			},
			setValue(val, needCheck=true){
				let vm = this
				if(needCheck && vm.value==val &&  nvlo(vm.paramData).valueArrView!=undefined ) 
					return
				if( nvlo(vm.paramData).need_reset || !needCheck )
					if( ['LIST', 'SLIDER'].indexOf(vm.type)!=-1 && !vm.multy  )
						val=nvlo(vm.tableValues.find( row=>  row.value==val || row.textFull==val ) ,{value:null}).value		

				console.log('setValue', vm.code,'value',val, 'valueView', vm.getValueViewFromValue(val));
				vm.paramSet( {num: vm.paramsForm, code:vm.code, data:{need_reset:false, value:val, valueView: vm.getValueViewFromValue(val)}  })
				vm.postWork()				
			},
			getValueViewFromValue(val){
				let vm = this,
					res = val
				if(vm.type=='LIST' && !vm.multy ) 
					res = nvlo(vm.tableValues.find( row=> ( row.value==val ) ) ,{textFull:null}).textFull
				else if(vm.type=='SLIDER' && !vm.isNumeric)
					res = vm.tableValues.findIndex( row=> ( row.value==val ) )
				else if (vm.isDateTimeLike)
					res = dateFormat(val)
				return res
			},
			setValueArr(val, needCheck=true){
				let vm = this
				if(needCheck && (vm.valueArr.equals(val) || nvlo(vm.paramData).value_arr ===null && val==null) )
					return
				if( nvlo(vm.paramData).need_reset || !needCheck  )
					if( vm.type=='LIST' && vm.multy )
						val = val.filter(row1 => vm.tableValues.findIndex( row=> row.value==row1 || row.textFull==row1  )!=-1 )
					else if( vm.isDateTimeLike )
						val = val.map( row=> ['TIME_RANGE', 'TIME'].indexOf(vm.type)!=-1? timeNorm(row): vm.type=='DATE' && vm.multy? dateTimeNorm(row).split('T')[0]: dateTimeNorm(row) ).filter(row => row!='' )
				console.log( 'setValueArr', vm.code, 'value_arr',val, 'valueArrView' ,vm.getValueArrViewFromValueArr(val));
				vm.paramSet( {num: vm.paramsForm, code:vm.code, data:{need_reset:false, value_arr:val, valueArrView: vm.getValueArrViewFromValueArr(val)}  })
				vm.postWork()				
			},
			getValueArrViewFromValueArr(val){
				let vm = this,
					res = val
				
				 if(vm.type=='RANGE' && (!vm.isNumeric) )
					res = [ vm.tableValues.findIndex( row1=>  row1.value==val[0]  ) ,  vm.tableValues.findIndex( row1=>  row1.value==val[1] ) ]
				else if(['DATE', 'DATETIME'].indexOf(vm.type)!=-1 && vm.multy)
					res= res.map( row=> (dateFormat(row).replace('T',' ')) )
				else if(vm.isDateTimeLike  && res.length>0){
					res=['']
					val.forEach((row,i)=>{
						if(i>0 && vm.dialogWithRange)
							res[0]+=vm.rangeSeparator
						res[0]+=dateFormat(row).replace('T',' ').replace(!vm.dialogWithTime?' 00:00:00':'','').replace(!vm.timeWithSeconds?':00':'','')
					})
				}
				else if(vm.type=='LIST'  && vm.multy)
					res = val.map(row=> ( nvlo( vm.tableValues.find(row2 => row2.value==row) ,{textFull:null}).textFull  ) )
				console.log('getValueArrViewFromValueArr', val, res);
				return res
			},
			
			saveDialog(value){
				let vm=this,
					tmp={}
				if(vm.isDateTimeLike){
					if(vm.valueArrDateViewError!='')
						return
					if (['DATE_RANGE', 'DATETIME_RANGE', 'TIME_RANGE'].indexOf(vm.type)!=-1 /*&& !vm.dialog*/ && value[0]>value[1] && nvl(value[0])!='' && nvl(value[1]) !='')
						[value[0], value[1]]=[value[1], value[0]]
					vm.$refs.dialog.save(value)
				}
				else if(vm.isNeedTab ){
					value.forEach(row=>{
						for (let code in row) {
							if(code == vm.code)
								continue
							tmp =vm.paramByCode(vm.paramsForm, code)
							console.log(row[code]);
							if( tmp!= undefined )
								if(['DATE', 'DATE_RANGE', 'DATETIME', 'DATETIME_RANGE', 'TIME', 'TIME_RANGE', 'RANGE'].indexOf(tmp.type)!=-1 || tmp.type=='LIST' && tmp.multy)
									vm.paramSet( {num: vm.paramsForm, code, data:{need_reset:true, value_arr:[row[code]] }  })
								else
									vm.paramSet( {num: vm.paramsForm, code, data:{need_reset:true, value:row[code]}  })
						}
					})
					vm.tabSelectedRows=[]
					vm.$refs.dialog.save(value[0][vm.code])
				}
			},
			changeSign(){
				let vm=this
				vm.sign=(vm.sign+1)%vm.signList.length
				vm.paramSet( {num: vm.paramsForm, code: vm.code, data:{sign:vm.signList[vm.sign].code, } })
				vm.checked=true
			},
			hasErrorSet(){
				this.hasError = true;
			},
			submit(){
				let vm=this
				vm.postWork()
				if(vm.dialogId>0)
					vm.$root.$emit('dialog'+vm.paramsForm+'Send',{param:vm.code,value:vm.value} )
			},
			appendClick(){
				let vm = this
				if(vm.type=='PASSWORD' )
					vm.show = !vm.show
			},
			onClick(e){
				let vm=this,
					tmp = vm.checked,
					curTime = new Date().getTime()
				if ( curTime<vm.lastTimeSend+500 )//для автоматической активации полей над ними висит следилка. что бы она не работала лишний раз - глушим ее
					return
				console.log('onClick',vm.isNeedTab, vm.isAuto);
				vm.lastTimeSend=curTime
				vm.checked=true
				if(vm.isWithDialog && (vm.isDateTimeLike || vm.isAuto)){
					vm.isDialog=true
					//vm.onFocus()
				}
				else
					setTimeout(()=>{vm.$refs.input.onClick(e)},100)			
			},
			onFocus(){
				let vm=this
				console.log('onFocus');
				vm.isFocus=true
				vm.preWork()
			},
			onBlur(){
				let vm=this
				if( vm.isDialog )
					return
				console.log('onBlur');
				vm.isFocus=false
				vm.postWork()
			},
			getTitleByNum(value){
				return this.tickLabels[value]
			}
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=appTheme.checkBox||vm.checkBoxColor
			vm.valueArrDateViewChangeLastTime= new Date().getTime()
						
		},
		mounted(){
			let vm=this
			vm.isMounted = true;
		},
	}
</script>
<style>
	div.input-contaner,
	span.input-contaner>span,
	span.input-contaner										{-webkit-box-align: start;	-ms-flex-align: start;	align-items: flex-start;	display: -webkit-box;	display: -ms-flexbox;	display: flex;	-webkit-box-flex: 1;	-ms-flex: 1 1 auto;	flex: 1 1 auto;}
	.min-width-35px 										{min-width: 35px;}
	.max-width 												{width:100%}
	i.rotate-90												{-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg);-ms-transform: rotate(90deg);transform: rotate(90deg); }
	.sign-box												{top: 15px;    margin-left: 0px;    margin-right: 0px; }
	.v-input__append-inner .v-input__icon--clear i			{font-size: 15px; }
	.main-contaner 											{display: block !important;}
	.slider-label 											{font-size: 11px;}
	.slider-upper 											{margin-top: -12px;}
	.with-append-on-right									{box-shadow : none !important; border-bottom-right-radius: inherit !important;   border-top-right-radius: inherit !important;}
	.is-append-on-right										{margin-left: -4px; box-shadow : none !important; border-bottom-left-radius: inherit !important;   border-top-left-radius: inherit !important;}
	.time-head-norm>div.v-picker__title						{height: 88px;}
	.time-head-norm>div.v-picker__body						{height: 304px;}
	.disabled-label 										{color: rgba(0,0,0,.38);}
	.v-slider__ticks-container>.v-slider__ticks>span		{font-size: 12px;}
	.theme--dark.v-chip.v-chip--disabled					{background: #737373;}
	.separator-dark-bc										{background: #737373;}
	.separator-light-bc										{background: #e0e0e0;}
	.v-date-picker-more-height								{height: 290px;}
	.higher-z-index											{z-index: 2;}
	.dialog-display-inline-grid								{display: inline-grid;}
	.dialog-narrow-display-div-arrow						{clear: right; display: inherit; width: 100%; height: 28px;}
	.dialog-narrow-display-arrow-width						{width: 190px;}
	.dialog-narrow-display-arrow-width-min					{width: 85px;}
	.theme--dark.v-table tbody tr[active]>td:first-child	{background: #7d7979;}		
	.v-slider__tick-label									{font-size: 11px;}
	.text-xs-center>.v-chip									{text-align: center;}
	.smallFont input										{font-size: 13px;}
	.fixedDiv												{position: sticky;   top: 0px;    z-index: 3;}
	.dateDialogHeadInput									{border-bottom: 1px #7f7f7f double !important; box-shadow: none !important;}
	.dateDialogHeadInput,
	.dateDialogHeadInput>div								{height: 80px !important;}
	.dateDialogHeadInput>div								{padding-top: 13px;}
	.dateDialogTimeLeftBorder								{border-left: 1px #7f7f7f double; margin-left: -4px;}
	.dateDialogTimeRightBorder								{border-right: 3px #949494 groove;}
	
	/*i    border-bottom-color: #2c353f;
	border-bottom-style: groove;
	border-bottom-width: 0.5px;*/
</style>