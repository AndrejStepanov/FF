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
			<template #activator="{ on:onEnable }">
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
								<v-flex  v-if="type=='RANGE' && tickLabels.length==0 && isNumeric" shrink style="width: 60px" >
									<v-text-field v-model="valueArrFst" class=" min-width-35px body-1" hide-details single-line :disabled="getDisable" :readonly="isLoading" type="number" min max step :id="id+'_sub_left'"/>
								</v-flex>
								<v-flex>
									<component :is="currentInput" :value="type=='RANGE'?valueArrView:valueView"  @input="onInput"
											:rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
											:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType"  :color="checkBoxColor" :id="id" :loading="isLoading"
											:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
											:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask"  :min="min" :max="max" :step="step" 
											@keyup.enter="submit"   dense > <!-- @blur="onBlur" @focus="onFocus" почему то срабатывает даже когда не уже не отображаеся -->
										<template v-if="!isNumeric"	#thumb-label="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" #thumb-label>
											<slot name="thumb-label" />
										</template>
									</component>
								</v-flex>
								<v-flex shrink style="width: 60px" v-if="isNumeric" >
									<v-text-field  v-if="type=='RANGE' && tickLabels.length==0 && isNumeric" v-model="valueArrScnd" class=" min-width-35px body-1" hide-details single-line type="number" :disabled="getDisable"  :readonly="isLoading"  :min="min" :max="max" :step="step" :id="id+'_sub_right'"/>
									<v-text-field  v-else-if="type=='SLIDER'" v-model="value" class=" min-width-35px body-1" hide-details single-line type="number" :disabled="getDisable" :readonly="isLoading"   :min="min" :max="max" :step="step" :id="id+'_sub_right'"/>
								</v-flex>
							</template>
							<template v-else>


								<component v-if="!isDateTimeLike && !isNeedTab" :is="currentInput" :value="multy?valueArr:type=='LIST'?valueArrFst:value"  @input="onInput" 
									:label="name" :hint="placeholder" :rules="rules" :disabled="getDisable" :readonly="!editable || isLoading"  :required="!!nullable" ref="input"
									:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType" :items="serviceGiven" dense :counter="getCounter"
									:error="inputErrorState"  :error-messages="inputErrorText" :id="id" v-bind="vInputProp" :loading="isLoading" 
									:no-data-text="$vuetify.lang.t('$vuetify.system.simple.msgs.isLoading')"  :multiple="multy" :chips="multy" :deletable-chips="multy" :small-chips="multy"
									:append-icon="getAppendIcon" :clearable="getClearable" :min="min" :max="max" :step="step" auto-grow rows="1"
									@keyup.enter="submit"  @blur="onBlur" @focus="onFocus" v-on="type=='LIST'?{}:{'click:append':appendClick}"
									:class="getComponentClass" >
									<template v-if="isLoading" #no-data >
										<div :style="'height: 55px; display: inline-flex;'"> 
											<div :style="'width: 30%;'">
												<c-loading :size=50 :width=3 :topKx=10 />
											</div>
											<div :style="'text-align: center;'">
												{{ $vuetify.lang.t('$vuetify.system.simple.msgs.isLoading') }}
											</div>
										</div>
									</template>
								</component> <!-- надо будет перекидать даты и таблицы на модули  --> 
								<v-dialog v-else-if="!isNeedTab && !multy && isDateTimeLike " ref="dialog" v-model="isDialog" :return-value.sync="valueArr" persistent	:width="getDialogWidth"
										class="max-width" :content-class="getDialogClass" @keydown.escape ="isDialog = false" >
									<template #activator="{ on:onDialog }">
										<v-text-field  v-model="valueArrViewFst" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"  readonly ref="input" 
											:tabindex="sortSeq"  :clearable="getClearable"  :min="min" :max="max" :append-icon="getAppendIcon"  :id="id+'_activator'" :loading="isLoading"
											@keyup.enter="submit" @blur="onBlur" @focus="onFocus" v-on="onDialog" :class="['body-1', ['DATETIME_RANGE'].indexOf(type)!=-1?'smallFont':'' ]" />
									</template> <!-- v-mask="vMaskDateTime"  --> 
									<template>
										<div  :style="getDialogMainDivStyle" ref="dialogDiv">
											<v-toolbar  class="fixedDiv dateDialogHeadInput" >	
												<v-text-field  :value="valueArrDateView" :label="name" :hint="placeholder"  :required="!!nullable"  ref="inputDate" :id = "'inputDate_'+id"
													clearable  :min="min" :max="max"  :error="valueArrDateViewError!=''" v-mask="vMaskDateTime" :error-messages="valueArrDateViewError"
													@keydown.enter="saveDialog(valueArrDate)"  @input="valueArrDateViewChange" />
											</v-toolbar>
											<v-date-picker v-if="dialogWithDate"  v-model="valueArrDateFstFst" scrollable :locale="profileLanguage" :max="max" :min="min" ref="date1"  no-title
												@dblclick:date="saveDialog(valueArrDate)" :class="['with-append-on-right',  'v-date-picker-more-height','higher-z-index']" />
											<c-time-picker v-if="dialogWithTime" v-model="valueArrDateFstScnd"  ref="timer1" :useSeconds="timeWithSeconds" :width="dataPickerTimeWidth"
												@dblclick:time="saveDialog(valueArrDate)" :class="[ 'higher-z-index', 'v-date-picker-more-height',  ['DATETIME','DATETIME_RANGE'].indexOf(type)!=-1?'dateDialogTimeLeftBorder':'' ]"  />
											<template v-if="dialogWithRange ">
												<div :class="getDialogSeparatorClassDateRange" >
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
												</div>
												<v-date-picker v-if="['DATE_RANGE','DATETIME_RANGE'].indexOf(type)!=-1" v-model="valueArrDateScndFst" scrollable :locale="profileLanguage" ref="date2" no-title
													@dblclick:date="saveDialog(valueArrDate)" :class="['with-append-on-right',  'v-date-picker-more-height','higher-z-index']"/>
												<c-time-picker v-if="['TIME_RANGE','DATETIME_RANGE'].indexOf(type)!=-1" v-model="valueArrDateScndScnd"   ref="timer2" :useSeconds="timeWithSeconds" :width="dataPickerTimeWidth"
													@dblclick:time="saveDialog(valueArrDate)" :class="['higher-z-index', 'v-date-picker-more-height',  ['DATETIME_RANGE'].indexOf(type)!=-1?'dateDialogTimeLeftBorder':'' ]" />
											</template>
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-spacer/>
											<v-btn small class="accent"  @click="isDialog = false">{{ $vuetify.lang.t('$vuetify.system.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
											<v-btn small class="accent ma-1"  @click="saveDialog(valueArrDate)" :disabled="valueArrDateViewError!=''"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.system.simple.actions.accept') }} </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="!isNeedTab && multy && type=='DATE'"	ref="dialog" v-model="isDialog" :return-value.sync="valueArr" persistent :width="getDialogWidth"
										class="max-width" :content-class="getDialogClass" @keydown.escape ="isDialog = false">
									<template #activator="{ on:onDialog }">
										<v-combobox   :value="valueArrView" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"   ref="input" 
											:tabindex="sortSeq"  :clearable="getClearable"   :min="min" :max="max" multiple chips  small-chips  :append-icon="getAppendIcon"  :loading="isLoading"
											@keyup.enter="submit" @blur="onBlur" @focus="onFocus" v-on="onDialog" class=" body-1" />
									</template>
									<template>
										<div  :style="getDialogMainDivStyle">
											<v-date-picker v-if="dialogWithDate"  v-model="valueArrDate" multiple  scrollable :locale="profileLanguage" class='v-date-picker-more-height'  />
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-spacer/>
											<v-btn small class="accent"  @click="isDialog = false">{{ $vuetify.lang.t('$vuetify.system.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
											<v-btn small class="accent ma-1"  @click="saveDialog(valueArrDate)"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.system.simple.actions.accept') }} </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="isNeedTab"	ref="dialog" v-model="isDialog" :return-value.sync="value" persistent :width="getDialogWidth" 
										class="max-width " :content-class="getDialogClass" overlay-color="white" overlay-opacity="1" @keydown.escape ="isDialog = false">
									<template #activator="{ on }">
										<component :is="currentInput" :value="!multy && isDateTimeLike? valueArrViewFst : multy? valueArr:type=='LIST'?valueArrFst:value"  @input="onInput" 
												:label="name" :hint="placeholder" :rules="rules" :disabled="getDisable" :readonly="!editable || isLoading || isAuto || isDateTimeLike"  :required="!!nullable" ref="input"
												:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType" :items="serviceGiven" dense :counter="getCounter"
												:error="inputErrorState"  :error-messages="inputErrorText" :id="id" v-bind="vInputProp" :loading="isLoading" 
												:no-data-text="$vuetify.lang.t('$vuetify.system.simple.msgs.isLoading')"  :multiple="multy" :chips="multy" :deletable-chips="multy" :small-chips="multy"
												:append-icon="getAppendIcon" :clearable="getClearable" :min="min" :max="max" :step="step" auto-grow rows="1"
												@keyup.enter="submit"  @blur="onBlur" @focus="onFocus" v-on="isAuto?{on}:(type=='LIST'?{}:{'click:append':appendClick})"
												:class="getComponentClass" />
									</template>
									<template>
										<div  :style="getDialogMainDivStyle" class='position--relative' >
											<c-table tableTitle="$vuetify.system.modals.valSelect.title" :searchNeed="true" :headers="tabHeader"	:items="tabValues" v-model="tabSelectedRows"  ref="table"  
												:vDataTableProp="{showSelect:true, singleSelect:!multy}"  withRowNum	:height="getDialogMainDivHeight"  :loading="tabLoading"
												@dblclick:row="saveDialog($event)"
											/>
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-spacer/>
											<v-btn small class="accent"  @click="isDialog = false">{{ $vuetify.lang.t('$vuetify.system.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
											<v-btn small class="accent ma-1"  @click="saveDialog(tabSelectedRows)" :disabled="tabSelectedRows.length==0"   ><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.system.simple.actions.accept') }} </v-btn>
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
	import XStore from '@/mixins/x-store'
	import CTimePicker from '@/components/c-time-picker'
	import CLoading from '@/components/c-loading'
	import {VSelect,VSlider,VRangeSlider,VTextarea } from 'vuetify/lib' //из-за хитрого загрузчика, который анализирует только шаблон, динамические окмпоененты приходится импортировать руками. иначе они не подгрузятся
	
	export default {
		name:'c-input',
		data: () => ({
			checkBoxColor:'false',//переопределяется в created
			hasError: false,
			dataPickerHeight: 369,
			dataPickerWidth: 290,
			dataPickerTimeColumnWidth: 52,
			inputErrorState:false,
			inputErrorText:'',
			isMounted:false,
			loading:0,
			listItemLenght: 18,
			lastTimeClick: 0,
			maxLenTypes:['INPUT','NUMBER', 'PASSWORD'],
			show:false,
			inputDateInsertInit:false,
			isFocus:false,
			isDialog:false,
			sign:0,
			tabSelectedRows:[],
			thumbSize:10,
			tabLoading:false,
			valueArrDate:['',''],
			valueArrDateView:'',
			valueArrDateViewError:'',
			valueArrDateViewChangeLastTime:0,
			valueArrDateViewChanging:false,
			serviceGivenRecieving:false,
			serviceGivenRecievingLastTime:false,

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
				return this.type!='PASSWORD' && !this.isDateTimeLike ?this.type:
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
					"date-color-transparent": this.isDateTimeLike && this.$h.nvl(this.valueArrViewFst)==''
				}
			},
			getDisable(){
				return  !this.needCheckBox?  !this.editable  : this.isLoading || !this.checked
			},	
			getCounter(){
				return this.maxLenTypes.indexOf(this.type)!=-1 && this.maxLen>0?this.maxLen:false
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
							(vm.dataPickerWidth*(vm.dialogWithDate?(['DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1?2:1):0)+  
								vm.dataPickerTimeWidth*(vm.dialogWithTime ?(['TIME_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1?2:1):0)+
								(['DATETIME'].indexOf(vm.type)!=-1?1:0)+
								(['DATETIME_RANGE'].indexOf(vm.type)!=-1?1:0)
							) / (vm.dialogDatePanelCnt==2&& ['TIME_RANGE','DATETIME','DATE','TIME'].indexOf(vm.type)==-1?2:1) +
							(['TIME_RANGE'].indexOf(vm.type)!=-1 || vm.dialogDatePanelCnt==4 && ['DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1?24:0)
						) + 
						(vm.getDialogScrollY && !vm.isNeedTab? 17:0) //скрол плашка
				return width+'px'
			},
			getDialogClass(){
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
				return vm.$vuetify.breakpoint.lgAndUp  ? 4: 2
			},
			maskDateTime()		{
				return new RegExp(!this.isDateTimeLike || this.multy?'': [
					this.dialogWithDate?'\\d\\d.\\d\\d.\\d\\d\\d\\d':'', this.dialogWithTime?'\\d\\d:\\d\\d'+(this.timeWithSeconds?':\\d\\d':''):'', 
					this.dialogWithRange?this.rangeSeparator.trim():'',  
					this.dialogWithRange&&this.dialogWithDate?'\\d\\d.\\d\\d.\\d\\d\\d\\d':'', this.dialogWithRange&&this.dialogWithTime?'\\d\\d:\\d\\d'+(this.timeWithSeconds?':\\d\\d':''):'', 
				].filter(row=>row!='').join(' ') )
			},
			vMaskDateTime()		{
				return !this.isDateTimeLike || this.multy?'': [
					this.dialogWithDate?'##.##.20##':'', this.dialogWithTime?'##:##'+(this.timeWithSeconds?':##':''):'', 
					this.dialogWithRange?this.rangeSeparator.trim():'',  
					this.dialogWithRange&&this.dialogWithDate?'##.##.20##':'', this.dialogWithRange&&this.dialogWithTime?'##:##'+(this.timeWithSeconds?':##':''):'', 
				].filter(row=>row!='').join(' ')
			},
			dataPickerTimeColumnCnt(){
				return !this.dialogWithTime?0:this.timeWithSeconds?3:2
			},
			dataPickerTimeWidth(){
				return ['DATETIME', 'DATETIME_RANGE'].indexOf(this.type)!=-1? this.dataPickerTimeColumnCnt * this.dataPickerTimeColumnWidth:
					this.dataPickerWidth / (this.type=='TIME_RANGE'?2:1)-(this.type=='TIME_RANGE'?17:0)+1
			},
			//переход на вьюэкс
			checked: {
				set:function (val)	{ if(this.isMounted && this.needCheckBox && this.checked!=val) this.paramSet( {form: this.paramsForm, code:this.code, data:{checked:val  } }) 		},
				get:function() 		{	return this.paramData.checked==undefined? false:!!this.paramData.checked&&this.isMounted								},
			},
			code()				{	return this.$h.nvlo(this.data).code||'code'																								},
			paramData()			{	return this.paramByCode(this.paramsForm, this.code)																				},
			callBackEval()		{	return this.paramData.after_edit_script||''																				},
			id()				{	return ''+(this.paramData.id||this.paramsForm+'_'+this.code)																},
			tip()				{	console.log(this.code, 'tip()');return this.paramData.tip||''																		},
			placeholder()		{	return this.paramData.placeholder||''																						},
			type()				{	return this.paramData.type||'type'																						},
			nullable()			{	return this.paramData.nullable==undefined? true:!!this.paramData.nullable												},
			columnType()		{	return this.paramData.columnType||''																						},
			columnSize()		{	return this.paramData.columnSize||0																						},
			sortSeq()			{	return this.paramData.sort_seq||0																							},
			vMask()				{	return this.paramData.vMask||''																							},
			maskFin()			{	return this.paramData.mask_fin||''																						},
			maskFinRegExp()		{	return this.maskFin==''?'':new RegExp(this.maskFin)																				},
			error()				{	return this.paramData.error||'$vuetify.system.msgs.incorrectValue.title'													},
			editable()			{	return this.paramData.editable==undefined? true:!!this.paramData.editable													},
			isAuto()			{	return this.paramData.isAuto==undefined? false:!!this.paramData.isAuto													},
			isNeedResetVal()	{	return this.paramData.need_reset_val==undefined? true:!!this.paramData.need_reset_val												},
			isNeedResetValArr()	{	return this.paramData.need_reset_val_arr==undefined? true:!!this.paramData.need_reset_val_arr												},
			isDefaultInit()		{	return this.paramData.defaultInit==undefined? true:!!this.paramData.defaultInit												},
			isLoading()			{	return this.loading!=0																											},
			isDateTimeLike()	{	return ['DATE', 'DATE_RANGE', 'DATETIME', 'DATETIME_RANGE', 'TIME', 'TIME_RANGE'].indexOf(this.type)!=-1						},
			dialogWithDate()	{	return ['DATE', 'DATETIME', 'DATE_RANGE', 'DATETIME_RANGE'].indexOf(this.type)!=-1												},
			dialogWithTime()	{	return ['TIME', 'DATETIME','TIME_RANGE', 'DATETIME_RANGE'].indexOf(this.type)!=-1												},
			dialogWithRange()	{	return ['DATE_RANGE', 'TIME_RANGE', 'DATETIME_RANGE'].indexOf(this.type)!=-1													},
			hasInput()			{	return ['HIDDEN','INFO','NBSP','LINE'].indexOf(this.type)==-1																	},
			isSliderLike()		{	return ['SLIDER', 'RANGE'].indexOf(this.type)!=-1																				},
			multy()				{	return !this.isSliderLike && (this.paramData.multy==undefined? false:!!this.paramData.multy	)							},
			timeWithSeconds()	{	return this.paramData.seconds==undefined? false:!!this.paramData.seconds													},
			maxLen()			{	return this.paramData.maxLen||0																							},
			isNeedTab()			{	return this.servicesTabParam != null																						},
			thumbLabelNeed()	{	return this.paramData.thumb_label_need==undefined?'':!!this.paramData.thumb_label_need && this.isSliderLike?'always':''	},
			isBirthDate()		{	return this.paramData.isBirthDate==undefined? false:!!this.paramData.isBirthDate											},
			isMultiLine()		{	return this.columnSize>50																										},
			isWithArray()		{	return this.isDateTimeLike || ['RANGE','LIST'].indexOf(this.type)!=-1											},
			isWithDialog()		{	return this.isDateTimeLike || this.isNeedTab																					},
			rangeSeparator()	{	return this.$vuetify.lang.t('$vuetify.system.simple.labels.dateRangeSeparator' )													},
			vInputProp()		{
				return {
					//...(!vm.dialogWithRange&&vm.dialogWithTime ?{ "type":'time'}:{}) 
					//,...(!vm.dialogWithRange&&vm.dialogWithDate ?{ "type":'date'}:{}) 
					//,...(!vm.dialogWithRange&&vm.dialogWithTime&&vm.dialogWithDate ?{ "type":'datetime-local'}:{})
					/*, ...(['TEXT', 'INPUT', 'NUMBER'].indexOf(vm.type)!=-1?{ "v-mask":vm.vMask}:{})*/
				}
			},
			tabHeader()			{	//для TAB [{value:'param1',text:'Параметра1',visible:true},{value:'param2',text:'Параметра2',visible:true}]
				let vm = this
				return 'tabHeader' in vm.paramData && vm.paramData.tabHeader.length>0	? vm.paramData.tabHeader.slice() : [] 
			},
			tabValues()			{
				let vm = this
				return 'tabValues' in vm.paramData && vm.paramData.tabValues.length>0	? vm.paramData.tabValues.slice() : []
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
				vm.type=='DATE'?'v-text-field':
				vm.type=='TIME'?'v-text-field':
				vm.type=='TEXT'?'v-textarea':
				vm.type=='INPUT' && vm.isMultiLine?'v-textarea':
				'v-text-field'
			},
			servicesGivenParam(){
				return 'services' in this.paramData && 'given' in this.paramData.services? this.$h.nvlo(this.paramData.services.given,null) :null
			},
			servicesDefaultParam(){
				return 'services' in this.paramData && 'default' in this.paramData.services?  this.$h.nvlo(this.paramData.services.default,null) :null
			},
			servicesFinishParam(){
				return 'services' in this.paramData && 'finish' in this.paramData.services?  this.$h.nvlo(this.paramData.services.finish,null) :null
			},
			servicesTabParam(){
				return 'services' in this.paramData && 'tab' in this.paramData.services?  this.$h.nvlo(this.paramData.services.tab,null) :null
			},
			serviceGiven(){ //для листов [{value:'cur',text:'На текущем уровне'}], для TAB [{param1:1, param2:2, }]
				let vm=this
				console.log('serviceGiven', vm.paramData.value_arr);
				return (
					(vm.type=='LIST' && !vm.isLoading?vm.paramData.value_arr.filter(row=> row!='' && vm.paramData.table_values.findIndex(row2=>row2.value==row)==-1 ).filter(row=> row!=undefined).map(row=>{return {value:row, text:'❌ '+row } }):[]).concat(  
						(vm.isLoading?[]: vm.paramData.table_values)
					)
				).map(row=>{
					let text = vm.$h.nvl(row.text,row.value)
					return {value:row.value, textFull:text, text:['LIST'].indexOf(vm.type)==-1 || vm.listItemMin || vm.listItemLenght >text.length ? text : ( text.substring(0,vm.listItemLenght)+'...') ,}
				})
			},
			tickLabels()		{ 	return this.serviceGiven.map(row=>{return row.text}) 																																},
			min()				{ 	let vm=this, tmp = vm.paramData.min||null; return vm.isDateTimeLike?( !this.$h.isNumeric(tmp)?tmp:null ):vm.isSliderLike&&vm.serviceGiven.length>0?0 : tmp							},
			max()				{ 	let vm=this, tmp = vm.paramData.max||null; return vm.isDateTimeLike?( !this.$h.isNumeric(tmp)?tmp:null ):vm.isSliderLike&&vm.serviceGiven.length>0?vm.serviceGiven.length-1:tmp		},
			isSliderString()	{	return this.isSliderLike && this.serviceGiven.length>0 && !this.isNumeric																											},
			step()				{	return this.isSliderString? 1 : this.paramData.step||1																																},
			ticksNeed()			{	return this.isSliderString? true : this.paramData.ticksNeed==undefined? false:!!this.paramData.ticksNeed																			},
			tickSize()			{	return this.paramData.tickSize|| this.isSliderString? 2 :0																															},
			isNumeric()			{ 	
				return !this.serviceGiven.equals([])?
					this.serviceGiven.findIndex(row=>(!this.$h.isNumeric(row.value)))==-1:
					['RANGE','LIST','NUMBER'].indexOf(this.type)!=-1 ? !this.isLoading /*&& this.valueArr.findIndex(row=>(!isNumeric(row)))==-1*/ : 
					['SLIDER'].indexOf(this.type)!=-1 ? !this.isLoading && this.$h.isNumeric(this.value) :
					false
				},
			rules(){
				let vm=this, rules=[],
					invalidListChecker= (val)=>{
						return (vm.$h.typeOfObject(val)=='array' ?val:[vm.$h.nvl(val)]).findIndex(row=> vm.$h.nvlo( vm.serviceGiven.find(row2=> row2.value==row ), {text:''}) .text.indexOf("❌")!=-1  ) ==-1 //❌
					}
				if(vm.hasInput && vm.isNumeric && vm.$h.isNumeric(vm.min) && vm.type!='RANGE' && vm.min!=null )//Границы должны быть цифрой!
					rules.push(v => vm.isLoading || v>=vm.min|| !vm.checked || vm.$vuetify.lang.t('$vuetify.system.simple.msgs.valMoreOrEq', ...([vm.min]) ) )

				if(vm.hasInput && vm.isNumeric && vm.$h.isNumeric(vm.max) && vm.type!='RANGE' && vm.max!=null )
					rules.push(v => vm.isLoading || v<=vm.max || !vm.checked || 'Значение не должно превышать '+vm.max+'!')

				if(vm.hasInput && vm.maxLenTypes.indexOf(vm.type)!=-1 && vm.maxLen>0)
					rules.push(v => vm.isLoading || v.length <= vm.maxLen  || !vm.checked || vm.$vuetify.lang.t('$vuetify.system.simple.msgs.valLessOrEq', ...([vm.maxLen]) ) )

				if(vm.hasInput && vm.maskFinRegExp!='')//надо помнить про экранирование
					rules.push(v => vm.isLoading || vm.maskFinRegExp.test(v) || vm.$vuetify.lang.t( vm.error ))

				if(vm.hasInput && vm.maskDateTime!='')
					rules.push(v => vm.isLoading || vm.maskDateTime.test(v) || vm.$vuetify.lang.t( '$vuetify.system.simple.msgs.dateForamatWrong' ))
				

				if(vm.hasInput && !vm.nullable)
					rules.push(v => vm.isLoading || v!=undefined && (v!='' || v===0) || vm.$vuetify.lang.t('$vuetify.system.simple.msgs.fieldIsNecessary' ) )

				if(vm.hasInput && vm.needCheckBox && !vm.nullable)
					rules.push(v => vm.isLoading || !!vm.checked || vm.$vuetify.lang.t('$vuetify.system.simple.msgs.fieldMustUsed' ) )
				
				if(vm.hasInput && vm.type=='LIST' )
					rules.push(v => vm.isLoading || invalidListChecker(v) || vm.$vuetify.lang.t('$vuetify.system.errors.invalidListElement.text' ) )
				
				return rules
			},
			dateTimeRules(){
				let vm=this,
					rules=[]
				if(vm.hasInput && vm.maskDate!='')
					rules.push(v => vm.maskDate.test(v) || vm.$vuetify.lang.t( '$vuetify.system.simple.msgs.dateForamatWrong' ))
				rules.push(v => v!=undefined && (v!='' || v===0) || vm.$vuetify.lang.t('$vuetify.system.simple.msgs.fieldIsNecessary' ) )

				return rules
			},
			isNeed()			{	return this.hasInput && !this.nullable																											},
			name()				{	return (this.isNeed?'⭐ ':'')+ this.paramData.name||''/*❗*/																						},
			value: {	
				set:function (val)	{
					this.setValue(val)
				},
				get:function()	{
					let vm=this,
						tmp =vm.paramData.value
					console.log('value', vm.code, tmp);
					if ( !vm.$h.nvl(vm.isNeedResetVal, false))
						return tmp
					else if (vm.type=='BOOL')
						tmp= vm.$h.nvl(tmp,false)
					else if(vm.isDateTimeLike && !vm.multy && vm.valueArr.length>0  && tmp==null)
						if(['DATE', 'TIME', 'DATETIME'].indexOf(vm.type)!=-1)
							tmp = vm.valueArr[0]
					console.log('value', vm.code, tmp);
					vm.setValue(tmp, false)
					return tmp
				},
			},
			valueView: {
				set:function (val)	{	
					let vm = this,
						res=val
					if(vm.type=='SLIDER' && !vm.isNumeric)
						res = vm.serviceGiven[val].value
					else if(vm.isDateTimeLike)
						res = vm.$h.dateFormatRevert(val)
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
						res= vm.paramData.value_arr
					let tmp = res
					console.log('valueArr', tmp, vm.isNeedResetValArr);
					if(vm.type=='RANGE' && res.equals(['','']) ){
						if (vm.min>=0 && vm.max>=0)
							res= [vm.min , vm.max]
						else
							res=[0,0]
					}
					if(vm.multy && vm.type=='DATE' && res.equals(['','']))
						res = ['']
					if(vm.isNeedResetValArr ||  !tmp.equals(res) || !('valueArrView' in vm.paramData) || !('value_arr' in vm.paramData) )
						vm.setValueArr(res, false)
					return res
				},
			},
			valueArrView: {
				set:function (val)	{
					let vm = this,
						res=val
					console.log('valueArrView', res);
					if(vm.multy && vm.type=='DATE')
						res= res.map( row=> (vm.$h.dateFormatRevert(row)) )
					vm.setValueArr(res)
				},
				get:function() 		{
					return  this.getValueArrViewFromValueArr(this.valueArr)
				},
			},
			valueArrFst: {
				set:function (val)	{this.valueArr=[val].concat(this.valueArr.slice(1))																					},
				get:function() 		{return this.valueArr[0]																											},
			},
			valueArrScnd: {	
				set:function (val)	{this.$set(this.valueArr, 1, val) 																									},
				get:function()		{return this.valueArr[1]																											},
			},
			valueArrViewFst: {
				set:function (val)	{if (!this.multy && this.isDateTimeLike && val == undefined)  this.valueArr= ['',''] },
				get:function() 		{return this.valueArrView[0]																										},
			},

			valueArrDateFst: {
				set:function (val)	{this.$set(this.valueArrDate, 0, val) 																								},
				get:function() 		{return this.valueArrDate[0]																										},
			},
			valueArrDateScnd: {	
				set:function (val)	{this.$set(this.valueArrDate, 1, val)																								},
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
					return !this.dialogWithTime?'00:00:00': this.dialogWithDate? this.$h.nvl(this.valueArrDateFst.split('T')[1],'00:00:00'):this.valueArrDateFst
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
					return ['DATETIME_RANGE','TIME_RANGE'].indexOf(this.type)==-1?'00:00:00': this.type=='DATETIME_RANGE'? this.$h.nvl(this.valueArrDateScnd.split('T')[1],'00:00:00'):this.valueArrDateScnd
				},
			},
		},
		watch: {
			isDialog (val, valOld) {
				let vm = this
				if(val){
					if( !vm.isNeedTab && vm.isDateTimeLike ){
						vm.valueArrDate = vm.valueArr.slice(0)
						if(!vm.multy){
							vm.valueArrDateViewError=''
							vm.dialogWithTime  && setTimeout(()=> {vm.$h.nvlo(vm.$refs.timer1,'')!='' && vm.$refs.timer1.scrollToSelected();  vm.$h.nvlo(vm.$refs.timer2,'')!='' && vm.$refs.timer2.scrollToSelected() } , 100) 
							vm.isBirthDate && vm.$nextTick(() => (vm.$refs.date1.activePicker = 'YEAR')) 
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
											while( ( isNaN( parseFloat(this.value.substr(s , 1) )) || vm.dialogWithDate &&  5<=s && s<=7 || vm.type=='DATE_RANGE' &&  19<=s && s<=21 || vm.type=='DATETIME_RANGE' &&  25<=s && s<=27  
												)  && s <= this.value.length )
												s++
											this.value =this.value.substr(0, s) + this.value.substr(s + 1) 
											this.selectionEnd = s;
										}, false)
								}
							},100)
						}
					}
					else if( vm.isNeedTab) {//таблица
						//vm.tabSelectedRows=[]
						vm.getDataFromServiceTab()
					}
				}
				else if( valOld )
					vm.onBlur() 
			},
			valueArrDate(val, valOld){
				let vm = this
				if(!vm.valueArrDateViewChanging){
					vm.valueArrDateView=vm.getValueArrViewFromValueArr (vm.valueArrDate)[0]	
					vm.valueArrDateViewError=''
				}
				if([ 'DATETIME_RANGE', 'TIME_RANGE'].indexOf(vm.type)!=-1 && val[0]==val[1])
					vm.valueArrDateViewError= vm.$vuetify.lang.t('$vuetify.system.errors.equalsRangePart.text')
			},
			servicesGivenParam(val, valOld){
				this.getDataFromServiceGiven()
			},
		},
		components: {
			CTable: (resolve) =>{ require(['@/components/c-table.vue'], resolve) },
			VSelect,VSlider,VRangeSlider,VTextarea,CTimePicker,CLoading
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
					if( !vm.$h.validateDate(res[0]) ){
						vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.system.errors.wrongDate.text', [res[0] ]  ) ) // $nextTick ->косяк в маске,2 быстрых нажатия смещают курсор в конец инпута
						return
					}
					if( vm.dialogWithRange && !vm.$h.validateDate(res[2]) ){
						vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.system.errors.wrongDate.text', [res[2] ]  ) )
						return
					}
				}
				if( vm.dialogWithTime ){
					if( !vm.$h.validateTime(res[1], vm.timeWithSeconds) ){
						vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.system.errors.wrongTime.text', [res[1] ] ) )
						return
					}
					if( vm.dialogWithRange && !vm.$h.validateTime(res[3], vm.timeWithSeconds) ){
						vm.$nextTick(() =>  vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.system.errors.wrongTime.text', [res[3] ] ) )
						return
					}
				}
				if(val.length<vm.vMaskDateTime.length){
					vm.$nextTick(() => vm.valueArrDateViewError = vm.$vuetify.lang.t('$vuetify.system.errors.valNotFull.text' ) )
					return
				}

				vm.valueArrDateViewError=''
				vm.valueArrDateViewChanging=true
				vm.$set(vm.valueArrDate, 0, (vm.dialogWithDate? vm.$h.nvl(vm.$h.dateFormatRevert(res[0]),vm.valueArrDateFstFst) +'T':'') +vm.$h.nvl(res[1], vm.valueArrDateFstScnd))
				if( vm.dialogWithRange )
					vm.$set(vm.valueArrDate, 1, (vm.dialogWithDate? vm.$h.nvl(vm.$h.dateFormatRevert(res[2]),vm.valueArrDateScndFst) +'T':'') +vm.$h.nvl(res[3], vm.valueArrDateScndScnd) )
				vm.$nextTick(() => vm.valueArrDateViewChanging=false) 
			},
			preWork(checkedFixed=false){
				let vm = this
				if( vm.isDefaultInit){
					if(vm.$refs.input!=undefined)
						vm.hasError= !vm.$refs.input.validate()
					vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
				}
			},
			postWork(checkedFixed=false){
				let vm = this
				console.log('postWork', checkedFixed, vm.isWithArray);
				if(!checkedFixed && !vm.isFocus && !vm.isDialog)
					if(vm.isWithArray)
						//vm.checked= vm.valueArr !=undefined && vm.isDateTimeLike && !vm.multy? !vm.valueArr.equals(['','']) : !vm.valueArr.equals([])
						vm.checked= !(vm.valueArr.equals(['',''])  || vm.valueArr.equals([''])|| (vm.code=='RANGE' && vm.valueArr.equals([0,0])? !vm.checked: false) ) 
					else
						vm.checked= vm.value!=undefined && vm.value!=null && vm.value!=''
				if( vm.isDefaultInit){
					if(vm.$refs.input!=undefined )
						vm.hasError= !vm.$refs.input.validate()
					vm.$root.$emit('dialog'+vm.paramsForm+'NeedCheck')
					if(vm.callBackEval!='')
						eval(vm.callBackEval)
				}
			},
			setValue(val, needCheck=true){
				let vm = this
				if(needCheck && vm.value==val &&  vm.paramData.valueArrView!=undefined ) 
					return
				if( vm.isNeedResetVal){
					if(vm.type=='NUMBER' && !vm.$h.isNumeric(val))
						val=null
					if(!needCheck && ['SLIDER'].indexOf(vm.type)!=-1&& vm.serviceGiven.length >0 )
						val=vm.$h.nvlo(vm.serviceGiven.find( row=>  row.value==val || row.textFull==val ) ,{value:null}).value		
				}
				console.log(vm.code, 'setValue', vm.code,'value',val, 'valueView', vm.getValueViewFromValue(val));
				vm.paramSet( {form: vm.paramsForm, code:vm.code, data:{need_reset_val:false, value:val, valueView: vm.getValueViewFromValue(val)}  })
				vm.postWork()				
			},
			getValueViewFromValue(val){
				let vm = this,
					res = val
				if(vm.type=='SLIDER' && vm.serviceGiven.length >0)
					res = vm.serviceGiven.findIndex( row=> ( row.value==val ) )
				else if (vm.isDateTimeLike)
					res = vm.$h.dateFormat(val)
				return res
			},
			setValueArr(val, needCheck=true){
				let vm = this
				console.log('setValueArr',vm.code,needCheck, val);
				if(needCheck && (vm.valueArr.equals(val) || vm.paramData.value_arr ===null && val==null) )
					return
				if( vm.isNeedResetValArr || !needCheck  ){
					if( vm.type=='LIST' && !vm.isLoading )
						val = val.map(row=> (vm.paramData.table_values.find(row2=> row2.value==row)||vm.paramData.table_values.find(row2=> row2.text==row)||{value:''} ).value).filter(row => row!='' )
				}
				console.log(111);
				if( vm.isDateTimeLike )
					val = val.map( row=> ['TIME_RANGE', 'TIME'].indexOf(vm.type)!=-1? vm.$h.timeNorm(row): vm.type=='DATE' && vm.multy? vm.$h.dateTimeNorm(row).split('T')[0]: vm.$h.dateTimeNorm(row) ).filter(row => row!='' || !vm.multy )
				console.log(vm.code,  'setValueArr', vm.code, 'value_arr',val, 'valueArrView' ,vm.getValueArrViewFromValueArr(val));
				vm.paramSet( {form: vm.paramsForm, code:vm.code, data:{need_reset_val_arr:false, value_arr:val, valueArrView: vm.getValueArrViewFromValueArr(val)}  })
				vm.postWork()				
			},
			getValueArrViewFromValueArr(val){
				let vm = this,
					res = val
				if(vm.type=='RANGE' && vm.serviceGiven.length >0)
					res = [ vm.serviceGiven.findIndex( row1=>  row1.value==val[0]  )||0 ,  vm.serviceGiven.findIndex( row1=>  row1.value==val[1] )||0 ]
				else if(['DATE', 'DATETIME'].indexOf(vm.type)!=-1 && vm.multy)
					res= res.map( row=> (vm.$h.dateFormat(row).replace('T',' ')) )
				else if(vm.isDateTimeLike  && res.length>0){
					res=['']
					val.forEach((row,i)=>{
						if(i>0 )
							if(vm.dialogWithRange)
								res[0]+=vm.rangeSeparator
							else
								return
						res[0]+=vm.$h.dateFormat(row).replace('T',' ').replace(!vm.dialogWithTime?' 00:00:00':'','').replace(!vm.timeWithSeconds?':00':'','')
					})
				}
				else if(vm.type=='LIST'){
					console.log(val, vm.serviceGiven);
					res = val.map(row=> ( vm.$h.nvlo( vm.serviceGiven.find(row2 => row2.value==row) ,{textFull:null}).textFull  ) )
				}
				return res
			},
			saveDialog(value){
				let vm=this
				if(!vm.isNeedTab && vm.isDateTimeLike){
					if(vm.valueArrDateViewError!='')
						return
					if (['DATE_RANGE', 'DATETIME_RANGE', 'TIME_RANGE'].indexOf(vm.type)!=-1 /*&& !vm.dialog*/ && value[0]>value[1] && vm.$h.nvl(value[0])!='' && vm.$h.nvl(value[1]) !='')
						[value[0], value[1]]=[value[1], value[0]]
					vm.$refs.dialog.save(value)
				}
				else if(vm.isNeedTab ){
					console.log(value);
					value.forEach(row=>{
						vm.paramSetSeveralValOutside({form: vm.paramsForm, value:row})
					})
					vm.$refs.dialog.save(value[0][vm.code])
				}
			},
			changeSign(){
				let vm=this
				vm.sign=(vm.sign+1)%vm.signList.length
				vm.paramSet( {form: vm.paramsForm, code: vm.code, data:{sign:vm.signList[vm.sign].code, } })
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
				console.log('appendClick', vm.isNeedTab, vm.isDialog,);
				if( vm.isNeedTab )
					vm.isDialog = true
			},
			onClick(e){
				let vm=this,
					curTime = new Date().getTime()
				if ( curTime<vm.lastTimeClick+500 )//для автоматической активации полей над ними висит следилка. что бы она не работала лишний раз - глушим ее
					return
				console.log(vm.code, 'onClick',vm.isNeedTab, vm.isAuto, vm.value);
				vm.lastTimeClick=curTime
				vm.checked=true
				vm.getDataFromServiceGiven().then( response =>{
					if(vm.isWithDialog && (vm.isDateTimeLike || vm.isAuto)){
						vm.isDialog=true
					}
					else 				
						if(vm.type=='BOOL')
							vm.onInput(!vm.value)
						else
							setTimeout(()=>{vm.$refs.input.onClick(e)},100)	
				})
			},
			onFocus(){
				let vm=this
				console.log(vm.code, 'onFocus');
				vm.isFocus=true
				vm.preWork()
			},
			onInput(val){
				let vm=this
				console.log('onInput',val);
				if(vm.type=='RANGE')
					val= val.map(row=> isNaN(row)?0:row )
				if(vm.type== 'SLIDER')
					val= isNaN(val)?0:val 

				if(vm.type=='RANGE' && vm.tickLabels.length>0 )
					vm.valueArr= [vm.serviceGiven[ val[0] ].value, vm.serviceGiven[ val[1] ].value] 
				else if(vm.type== 'SLIDER'  && vm.tickLabels.length>0)
					vm.value= vm.serviceGiven[ val ].value
				else if (vm.multy || vm.type=='RANGE')
					vm.valueArr= val
				else if(vm.type=='LIST')
					vm.valueArrFst= val
				else 
					vm.value= val
			},
			onBlur(){
				let vm=this
				if( vm.isDialog )
					return
				console.log(vm.code, 'onBlur');
				vm.isFocus=false
				vm.postWork()
			},
			getTitleByNum(value){
				return this.tickLabels[value]
			},
			async getDataFromServiceTab(){
				let vm=this,response ={}
				if (vm.servicesTabParam== null ) 
					return
				vm.tabLoading=true
				vm.paramSet( {form: vm.paramsForm, code:vm.code,  data:{  tabHeader:[], tabValues:[], } } )
				response = await  vm.getDataFromservice(vm.servicesTabParam)
				if(vm.$h.typeOfObject(response) != 'object'  || !('head' in response) || !('data' in response) )
					vm.$h.showMsg(  vm.$h.getErrDesc('serviceTabWrongResponse'))
				vm.paramSet( {form: vm.paramsForm, code:vm.code,  data:{  tabHeader:response.head, tabValues:response.data, } } )
				vm.tabLoading=false
			},
			async getDataFromServiceFinish(){
				let vm=this,response ={}
				if (vm.servicesFinishParam== null ) 
					return
				response = await  vm.getDataFromservice(vm.servicesDefaultParam)
				
				if(vm.$h.typeOfObject(response) == 'object'  && vm.code in response)
					vm.paramSetSeveralValOutside({form: vm.paramsForm, value:response, data:{defaultInit:true}})
				else
					vm.paramSetValOutside( {form: vm.paramsForm, code:vm.code, value:response, data:{defaultInit:true}  })
			},
			async getDataFromServiceDefault(){
				let vm=this,response ={},promise={}
				if (vm.servicesDefaultParam== null ) {
					vm.paramSet( {form: vm.paramsForm, code:vm.code, data:{defaultInit:true}  })
					return
				}
				if( vm.serviceGivenRecieving ){
					do{
						promise= new Promise(function(resolve, reject) {
							setTimeout(()=> resolve( 'Success'  )  ,  500)
						})
						await promise
					}
					while(vm.serviceGivenRecieving)
				}
				response = await  vm.getDataFromservice(vm.servicesDefaultParam)
				if(vm.$h.typeOfObject(response) == 'object'  && vm.code in response)
					vm.paramSetSeveralValOutside({form: vm.paramsForm, value:response, data:{defaultInit:true}})
				else
					vm.paramSetValOutside( {form: vm.paramsForm, code:vm.code, value:response, data:{defaultInit:true}  })
			},
			async getDataFromServiceGiven(){
				let vm=this,
					curTime = new Date().getTime()
				if ( vm.isLoading || vm.serviceGivenRecievingLastTime+1000>curTime ||  vm.servicesGivenParam== null || vm.isSliderLike  && !vm.$_.isEqual(vm.paramData.table_values, []) ) 
					return null
				vm.serviceGivenRecievingLastTime=curTime
				vm.serviceGivenRecieving=true
				
				let response = await  vm.getDataFromservice(vm.servicesGivenParam)
				console.log('getDataFromServiceGiven',response);
				if( !vm.$_.isEqual(vm.paramData.table_values, response)  )
					vm.paramSet( {form: vm.paramsForm, code:vm.code, data:{table_values:response, need_reset_val_arr:true, need_reset_val:true}  })
				vm.serviceGivenRecievingLastTime= new Date().getTime()
				vm.serviceGivenRecieving=false
				return response
			},
			async getDataFromservice(param, arrName){
				let vm = this, response={}, args={}, promise={}			
				vm.loading++
				await Promise.resolve("Success")
				console.log('getDataFromservice', param);
				if('args' in param)
					for (let arg in param.args){
						args[arg]= param.args[arg]
						if( vm.$h.typeOfObject(args[arg]) != "string" )
							continue
							let arr = args[arg].split('{{')
						for( let j =1; j<arr.length; j++) {
							let field = arr[j].split('}}')[0],
								fieldData=vm.paramByCode(vm.paramsForm, field),
								value=null
							if(field.toLowerCase()=='userId'.toLowerCase())
								value=vm.profileUserId
							else if(field.toLowerCase()=='userName'.toLowerCase())
								value=vm.profileUserName
							else if(field.toLowerCase()=='userLanguage'.toLowerCase())
								value=vm.profileLanguage
							else {
								if( vm.$h.nvlo(fieldData,'')=='' )
									continue
								if( !fieldData.defaultInit ){
									do{
										promise= new Promise(function(resolve, reject) {
											setTimeout(()=> resolve( vm.paramByCode(vm.paramsForm, field)  )  ,  500)
										})
										fieldData =  await promise
									}
									while(!fieldData.defaultInit)
								}
								value = vm.paramValByCode(vm.paramsForm, field)
							}
							if( vm.$h.typeOfObject(value) ==  'object' )
								value = JSON.stringify(value)
							args[arg]= args[arg].replace(new RegExp('{{'+field+'}}','g'), value)
						}
					}
				if(vm.$h.nvl(param.script)!=''){
					try{
						vm.loading++
						let script = param.script
						if(script ==  'listToArrObj')
							script = 'return args.list.split(\';\').filter((row)=>row!=\'\').map(row=>{ let arr = row.split(\'::\'); return {value:arr[0], text:$h.nvl(arr[1], arr[0]) } } )'
						response= (new Function('args', '$h', script) ) (args, vm.$h)
						console.log(response, arrName);
						if(vm.$h.nvl(arrName)!='')
							vm.paramSet( {form: vm.paramsForm, code:vm.code, data:{[arrName]:response}  })
						vm.loading--
					}
					catch(error){
						vm.loading--
						throw error
					}
					vm.loading--
					return response
				}
				if(vm.$h.nvl(param.name)=='' ){
					vm.loading--
					return {}
				}
				response= await vm.$h.sendRequestForData({href:vm.$h.dataCommandHref, method:vm.$h.dataCommandMetod, data:{ socetEvent:param.name, ...args}, needLoadingNum:'loading' }, vm)
				console.log('getDataFromservice', arrName, vm.paramData.services,'response',response);
				if(vm.$h.nvl(arrName)!='')
					vm.paramSet( {form: vm.paramsForm, code:vm.code, data:{[arrName]:response}  })
				vm.loading--
				return vm.$h.nvl(response,[])

			},
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=vm.$h.appTheme.checkBox||vm.checkBoxColor
			vm.valueArrDateViewChangeLastTime= new Date().getTime()
			vm.getDataFromServiceGiven()
			vm.getDataFromServiceDefault()
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
	.dateDialogTimeLeftBorder								{border-left: 1px #7f7f7f double;/* margin-left: -4px;*/}
	.dateDialogTimeRightBorder								{border-right: 3px #949494 groove;}
	.date-color-transparent	input					{color: transparent !important; }
	
	/*i    border-bottom-color: #2c353f;
	border-bottom-style: groove;
	border-bottom-width: 0.5px;*/
</style>