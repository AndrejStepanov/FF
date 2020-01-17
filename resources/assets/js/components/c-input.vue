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
			<template v-slot:activator="{ on }">
				<div class='input-contaner flex-grow--99' v-on="on">
					<v-btn  icon v-if="needSign" @click="changeSign" small class="sign-box cursor-pointer" >
						<v-icon small :disabled="getDisable" :class="getSignClass">{{getSign}}</v-icon>
					</v-btn>
					<div class='input-contaner main-contaner' @click="onClick">
						<div class='input-contaner slider-label' v-if="isSliderLike">
							<span :class="getLabelClass" >{{name+(placeholder!=''?' ('+placeholder+')':'')}}</span>
						</div>
						<div :class="getInputContanerTemplateClass">
							<template v-if="isSliderLike">
								<v-flex shrink style="width: 60px" v-if="type=='RANGE' && isNumeric" >
									<v-text-field v-model="valueArrPairs[0][0]" class=" min-width-35px body-1" hide-details single-line :disabled="getDisable" type="number" @change="setNewValPairFst" min max step :id="id+'_sub_left'"/>
								</v-flex>
								<v-flex>
									<component v-if="type=='RANGE'"  :is="currentInput" v-model="valueArrPairs[0]" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
											:multi-line="isMultiLine"  :tabindex="sortSeq" :type="getComponentType" :color="checkBoxColor" id
											:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
											:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask"   :min="min" :max="max" :step="step" 
											@change="setNewVal" @keyup.enter="submit"  @blur="onBlur"  dense >
										<template v-if="!isNumeric"	v-slot:thumb-label="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" v-slot:thumb-label="props">
											<slot name="thumb-label" />
										</template>
									</component>

									<component v-else :is="currentInput" v-model="value" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
											:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType"  :color="checkBoxColor" id
											:always-dirty="isSliderLike" :persistent-hint="isSliderLike" :thumb-label="thumbLabelNeed" :ticks="ticksNeed?'always':''" :tickSize="tickSize" :thumb-size="thumbSize" :tick-labels="tickLabels"
											:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask"  :min="min" :max="max" :step="step" 
											@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" dense >
										<template v-if="!isNumeric"	v-slot:thumb-label="props">
											<span> {{ getTitleByNum(props.value) }} </span>
										</template>
										<template v-if="isNumeric" v-slot:thumb-label="props">
											<slot name="thumb-label" />
										</template>
									</component>
								</v-flex>
								<v-flex shrink style="width: 60px" v-if="isNumeric" >
									<v-text-field  class=" min-width-35px body-1" hide-details single-line type="number" :disabled="getDisable" v-if="type=='RANGE'" v-model="valueArrPairs[0][1]"  @change="setNewValPairScnd" :min="min" :max="max" :step="step" :id="id+'_sub_right'"/>
									<v-text-field  class=" min-width-35px body-1" hide-details single-line type="number" :disabled="getDisable" v-else v-model="value" @change="setNewVal" :min="min" :max="max" :step="step" :id="id+'_sub_right'"/>
								</v-flex>
							</template>
							<template v-else>
								<component v-if="!multy && !isDateTimeLike && !isNeedTab" :is="currentInput" v-model="value" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
									:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType" :items="getListItems" dense :counter="getCounter"
									:error="inputErrorState"  :error-messages="inputErrorText" id
									:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask"  :min="min" :max="max" :step="step" auto-grow rows="1"
									@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow" 
									:class="getComponentClass" />
								<component v-else-if="multy && type=='LIST'" :is="currentInput" v-model="valueArr" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable" :readonly="!editable"  :required="!!nullable" ref="input"
									:multi-line="isMultiLine" :tabindex="sortSeq" :type="getComponentType" :items="getListItems" dense id
									:append-icon="getAppendIcon" :clearable="getClearable" :vMask="vMask"  :min="min" :max="max" :step="step"
									@change="setNewVal" @keyup.enter="submit"  @blur="onBlur" @click:append="changeShow" multiple chips deletable-chips small-chips
									:class="getComponentClass" />
								<v-dialog v-else-if="!multy && isDateTimeLike " ref="dialog" v-model="dialog" :return-value.sync="value" persistent	:width="getDialogWidth" @show='changeChecked' 
										@update:return-value="setNewVal" class="max-width" :content-class="getDialogClass">
									<template v-slot:activator="{ on }">
										<v-combobox  v-on="on" v-model="valueView" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"  readonly ref="input"  append-icon=""
											:tabindex="sortSeq"  :clearable="getClearable"   :min="min" :max="max" 
											@keyup.enter="submit"   class=" body-1" /><!-- //@click:append="changeShow" @blur="onBlur" --> 
									</template>
									<template>
										<div  :style="getDialogMainDivStyle">
											<v-date-picker v-if="dialogWithDate  && type!='TIME_RANGE'"  v-model="valueArrPairs[0][0]" scrollable :locale="profileLanguage()" :class="[dialogDatePanelCnt>1?'with-append-on-right':'',  'v-date-picker-more-height','higher-z-index']" :max="max" :min="min" ref="date1"/>
											<v-time-picker v-else-if="type=='TIME_RANGE'"  v-model="valueArrPairs[0][0]" scrollable :locale="profileLanguage()" :class="[dialogDatePanelCnt>1?'with-append-on-right':'', 'higher-z-index', 'time-head-norm']"  format="24hr" ref="time1"/>
											<div v-if="dialogDatePanelCnt==1 &&  ['DATETIME','TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(type)!=-1" :class="getDialogSeparatorClass" >
												<v-icon :class="getDialogSeparatorArrowClass">fast_forward</v-icon>							
												<v-icon :class="getDialogSeparatorArrowClass">fast_forward</v-icon>																		
												<v-icon :class="getDialogSeparatorArrowClass">fast_forward</v-icon>										
											</div>
											<v-time-picker v-if="dialogWithTime && type!='DATE_RANGE'"  v-model="valueArrPairs[0][1]" scrollable :locale="profileLanguage()" :class="[['DATETIME','TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(type)!=-1 && dialogDatePanelCnt>1?'is-append-on-right':'','higher-z-index', 'time-head-norm']" format="24hr" ref="date2"/>
											<v-date-picker v-else-if="type=='DATE_RANGE'"  v-model="valueArrPairs[0][1]" scrollable :locale="profileLanguage()" :class="[dialogDatePanelCnt>1?'is-append-on-right':'',  'v-date-picker-more-height','higher-z-index']" ref="time2"/>

											<template v-if="type=='DATETIME_RANGE'">
												<div :class="getDialogSeparatorClassDateRange" >
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
													<v-icon :class="getDialogSeparatorDateRangeArrowClass">fast_forward</v-icon>										
												</div>
												<v-date-picker v-model="valueArrPairs[1][0]" scrollable :locale="profileLanguage()" :class="[dialogDatePanelCnt>1?'with-append-on-right':'',  'v-date-picker-more-height','higher-z-index']" />
												<div v-if="dialogDatePanelCnt==1" :class="getDialogSeparatorClass" >
													<v-icon :class="getDialogSeparatorArrowClass">fast_forward</v-icon>							
													<v-icon :class="getDialogSeparatorArrowClass">fast_forward</v-icon>																		
													<v-icon :class="getDialogSeparatorArrowClass">fast_forward</v-icon>										
												</div>
												<v-time-picker v-model="valueArrPairs[1][1]" scrollable :locale="profileLanguage()" :class="[dialogDatePanelCnt>1?'is-append-on-right':'','higher-z-index', 'time-head-norm']" format="24hr"/>
											</template>
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-btn small class="accent"  @click="saveDialog(value)"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.texts.simple.actions.accept') }} </v-btn>
											<v-spacer/>
											<v-btn small class="accent"  @click="dialog = false">{{ $vuetify.lang.t('$vuetify.texts.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="multy && type=='DATE'"	ref="dialog" v-model="dialog" :return-value.sync="valueArr" persistent :width="getDialogWidth" @show='changeChecked' 
										@update:return-value="setNewVal" class="max-width" :content-class="getDialogClass">
									<template v-slot:activator="{ on }">
										<v-combobox  v-on="on" v-model="valueArrView" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"   ref="input"  append-icon=""
											:tabindex="sortSeq"  :clearable="getClearable"   :min="min" :max="max" multiple chips  small-chips 
											@change="setNewVal"  @keyup.enter="submit" @blur="onBlur" @click:append="changeShow" class=" body-1" />
									</template>
									<template>
										<div  :style="getDialogMainDivStyle">
											<v-date-picker v-if="dialogWithDate"  v-model="valueArr" multiple  scrollable :locale="profileLanguage()" class='v-date-picker-more-height' />
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-btn small class="accent"  @click="saveDialog(value)"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.texts.simple.actions.accept') }} </v-btn>
											<v-spacer/>
											<v-btn small class="accent"  @click="dialog = false">{{ $vuetify.lang.t('$vuetify.texts.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
										</v-toolbar>
									</template>
								</v-dialog>
								<v-dialog v-else-if="isNeedTab"	ref="dialog" v-model="dialog" :return-value.sync="value" persistent :width="getDialogWidth" @show='changeChecked' 
										@update:return-value="setNewVal" class="max-width" :content-class="getDialogClass" overlay-color="white" overlay-opacity="1">
									<template v-slot:activator="{ on }">
										<v-combobox v-on="on" v-model="valueView" :label="name" :hint="placeholder" :rules="rules" :disabled="getDisable"  :required="!!nullable"  readonly ref="input"  append-icon=""
											:tabindex="sortSeq"  :clearable="getClearable"   :min="min" :max="max"
											@change="setNewVal"  @keyup.enter="submit" @blur="onBlur" @click:append="changeShow" class=" body-1" />
									</template>
									<template>
										<div  :style="getDialogMainDivStyle">
											<c-table tableTitle="$vuetify.texts.modals.treeAdd.title" :searchNeed="true" :headers="getTabHeader"	:items="getTabValues" v-model="tabSelectedRows"  ref="table"  
												:vDataTableProp="{showSelect:true, singleSelect:!multy}"  withRowNum	:hideDefaultFooter="false"  :height="getDialogMainDivHeight" />
										</div>
										<v-divider></v-divider>
										<v-toolbar dense >	
											<v-btn small class="accent"  @click="saveDialog(value)"><v-icon>save</v-icon>&nbsp; {{ $vuetify.lang.t('$vuetify.texts.simple.actions.accept') }} </v-btn>
											<v-spacer/>
											<v-btn small class="accent"  @click="dialog = false">{{ $vuetify.lang.t('$vuetify.texts.simple.actions.cancel') }} &nbsp;<v-icon>close</v-icon> </v-btn>
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
		<v-checkbox v-if="!!needCheckBox && hasInput" v-model="checked" hide-details class="shrink ml-2 mb-2" @change="changeChecked" :color="checkBoxColor"></v-checkbox>
	</v-row>
</template>

<script>
	import XStore from '../mixins/x-store'
	import {VSelect,VSlider,VRangeSlider,VTextarea } from 'vuetify/lib' //из-за хитрого загрузчика, который анализирует только шаблон, динамические окмпоененты приходится импортировать руками. иначе они не подгрузятся
	export default {
		name:'c-input',
		data: () => ({
			callBackEval:'',
			checkBoxColor:'false',//переопределяется в created
			checked:false,
			code: 'code',
			columnSize: 0,
			columnType: '',
			classCss: [],//[ "class1","class2",]
			currentInput:'v-text-field',
			dialog:false,
			dialogWithDate:false,
			dialogWithTime:false,
			dialogWithRange:false,
			editable:true,
			error: '$vuetify.texts.msgs.incorrectValue.title',
			hasError: false,
			hasInput: false,
			dataPickerHeight: 392,
			id: 0,
			inputErrorState:false,
			inputErrorText:'',
			isBirthDate:false,
			isDateTimeLike:false,
			isMounted:false,
			isMultiLine:false,
			isNeed:false,
			isNeedTab:false,			
			isNumeric:true,
			isSliderLike:false,
			listItemLenght: 18,
			lastTimeSend: 0,
			vMask: null,
			maskFin: '',
			max:null,
			maxLen:0,
			maxLenTypes:['INPUT','NUMBER', 'PASSWORD'],
			min:null,
			multy:false,
			name: '',
			nullable: false,
			placeholder: '',
			readonly:false,
			rangeSeparator:' до ',
			rules:[],
			rulesChildInput:[],
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
			tabGroup:"",
			tabHeader: [], 
			tabValues: [],
			tabSelectedRows:[],
			tableValues: [],//для листов [{value:'cur',text:'На текущем уровне'}], для TAB [{param1:1, param2:2, }]
			tableHeader: [],//для TAB [{value:'param1',text:'Параметра1',visible:true},{value:'param2',text:'Параметра2',visible:true}]
			thumbLabelNeed:false,
			thumbSize:10,
			tickLabels: [],
			tickSize:0,
			ticksNeed:false,
			tip:'',
			type: 'type',
			value:'',// предпологаю число
			valueView:'',
			valueArr:[],//['Петя','Вася','Катя',]
			valueArrPairs:[],//[ [1,0], [1, 2] ] для дат [ ['2018-10-03', '12:52'],  ]
			valueArrView:[],
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
				return this.type!='PASSWORD'?this.type=='LIST'?'$vuetify.icons.dropdown':'':
					this.type!='PASSWORD'? this.show ? 'visibility_off' : 'visibility':
					''
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
				return ['DATETIME','TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1 && (vm.dialogDatePanelCnt==1 || vm.$vuetify.breakpoint.height<489) || 
					vm.dialogDatePanelCnt==2 && ['DATETIME_RANGE'].indexOf(vm.type)!=-1 ||
					vm.type=='DATETIME_RANGE' && vm.dialogDatePanelCnt<=2 || 
					vm.dataPickerHeight+48>vm.$vuetify.breakpoint.height *0.9 ||  
					vm.isNeedTab || 
					vm.type=='TEXT'
			},
			getDialogWidth(){
				let vm=this,
					width= vm.type=='DATE'? 290 : 
						vm.type=='TIME'? 290 : 
						['TIME_RANGE','DATE_RANGE','DATETIME'].indexOf(vm.type)!=-1 && vm.dialogDatePanelCnt==1 ? 290 :
						['TIME_RANGE','DATE_RANGE','DATETIME'].indexOf(vm.type)!=-1 ? 581: 
						['DATETIME_RANGE'].indexOf(vm.type)!=-1 && vm.dialogDatePanelCnt==4? 1194 :
						['DATETIME_RANGE'].indexOf(vm.type)!=-1 && vm.dialogDatePanelCnt==2? 581 :
						['DATETIME_RANGE'].indexOf(vm.type)!=-1 && vm.dialogDatePanelCnt==1? 290 :
						vm.isNeedTab?'max':
						null
				if( vm.getDialogScrollY && !vm.isNeedTab )//скрол плашка
					width+=17
				return width+'px'
			},
			getDialogClass(){
				let vm=this
				return "overflow-hidden "
			},
			getDialogMainDivHeight(){
				let vm=this
				return vm.getDialogScrollY  ?  vm.$vuetify.breakpoint.height *0.9 -48:	vm.dataPickerHeight /*стандартная высота одного элемента управления для дат*/
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
			getDialogSeparatorClass(){
				let vm=this
				return {
					"v-date-picker-more-height": vm.dialogDatePanelCnt>1,
					"dialog-display-inline-grid": vm.dialogDatePanelCnt>1,
					"dialog-narrow-display-div-arrow": vm.dialogDatePanelCnt==1,
					"flex-direction--row":vm.dialogDatePanelCnt==1,
					"flex-direction--column":vm.dialogDatePanelCnt>1,
					"separator-dark-bc": vm.$vuetify.theme.dark && (vm.dialogDatePanelCnt>1 ||  ['TIME_RANGE','DATE_RANGE'].indexOf(vm.type)!=-1),
					"separator-light-bc": !vm.$vuetify.theme.dark && (vm.dialogDatePanelCnt>1 ||  ['TIME_RANGE','DATE_RANGE'].indexOf(vm.type)!=-1),
					"background-primary":vm.dialogDatePanelCnt==1 && ['TIME_RANGE','DATE_RANGE'].indexOf(vm.type)==-1,
					"v-picker": true,
					"v-card": true,					  
				}
			},
			getDialogSeparatorClassDateRange(){
				let vm=this
				return {
					"v-date-picker-more-height": vm.dialogDatePanelCnt>2,
					"dialog-display-inline-grid": vm.dialogDatePanelCnt>2,
					"dialog-narrow-display-div-arrow": vm.dialogDatePanelCnt<=2,	
					"flex-direction--row":vm.dialogDatePanelCnt<=2,
					"flex-direction--column":vm.dialogDatePanelCnt>2,				
					"separator-dark-bc": vm.$vuetify.theme.dark,
					"separator-light-bc": !vm.$vuetify.theme.dark,
					"v-picker": true,
					"v-card": true,					  
				}
			},
			getDialogSeparatorArrowClass(){
				let vm=this
				return {
					"rotate-90": vm.dialogDatePanelCnt==1,					  
					"dialog-narrow-display-arrow-width": vm.dialogDatePanelCnt==1 && ['TIME_RANGE','DATE_RANGE'].indexOf(vm.type)==-1,					  
					"dialog-narrow-display-arrow-width-min": vm.dialogDatePanelCnt==1 &&	['TIME_RANGE','DATE_RANGE','DATETIME'].indexOf(vm.type)!=-1,		
					'accent-color':true,	 
					'flex--99 ':true, 
				}
			},	
			getDialogSeparatorDateRangeArrowClass(){
				let vm=this
				return {
					"rotate-90": vm.dialogDatePanelCnt<=2,					  
					"dialog-narrow-display-arrow-width": vm.dialogDatePanelCnt<=2 && ['TIME_RANGE','DATE_RANGE'].indexOf(vm.type)==-1,					  
					"dialog-narrow-display-arrow-width-min": vm.dialogDatePanelCnt<=2 &&	['TIME_RANGE','DATE_RANGE','DATETIME'].indexOf(vm.type)!=-1,		
					'accent-color':true,	
					'flex--99 ':true,  
				}
			},
			dialogDatePanelCnt(){
				let vm = this
				return vm.$vuetify.breakpoint.lgAndUp ? 4:
					vm.$vuetify.breakpoint.width>650 ? 2:
					1
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
			
		},
		watch: {
			dialog (val) {
				val && this.isBirthDate && this.$nextTick(() => (this.$refs.date1.activePicker = 'YEAR'))
			}
		},
		components: {
			CTable: (resolve) =>{ require(['./c-table.vue'], resolve) },
			VSelect,VSlider,VRangeSlider,VTextarea,
		},
		mixins: [
			XStore,
		],		
		methods: {
			getValueDatetimeFromArr({check, num, stage=0}){
				let vm=this,
					fstPart = null,
					scndPart = null
				check=check||false
				num=num||0
				if(vm.type!='DATETIME_RANGE' || stage==1){
					fstPart = vm.type=='TIME'?'':vm.valueArrPairs[num][0]!=null?vm.valueArrPairs[num][0]:''
					scndPart = vm.type=='DATE'?'': vm.valueArrPairs[num][1]!=null?vm.valueArrPairs[num][1]:''
					if(check && ( (vm.dialogWithDate || vm.dialogWithRange) && fstPart=='' || (vm.dialogWithTime || vm.dialogWithRange) && scndPart=='') )
						showMsg( getErrDesc('notFullValue') );
				}
				else{
					fstPart = vm.getValueDatetimeFromArr({check,num,stage:1}) 
					scndPart = vm.getValueDatetimeFromArr({check,num:num+1,stage:1})
					if(check && ( (vm.dialogWithDate || vm.dialogWithRange) && fstPart=='' || (vm.dialogWithTime || vm.dialogWithRange) && scndPart=='') )
						showMsg( getErrDesc('notFullValue'));
				}
				return fstPart+
					(fstPart!='' && scndPart!=''? 
						(['TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1 && stage==0 ? vm.rangeSeparator:' '):
						'') + 
					scndPart
			},
			parseToDateArr({str, stage=1, needReturnVal=false}){ //needReturnVal- служебная, никто кроме самой функции его использовать не должен
				let vm=this, e=null, mask = null
				str=str||''
				if(vm.type=='DATETIME_RANGE' && stage==1){
					e = str.split(vm.rangeSeparator)
					e[0]=vm.parseToDateArr({str:e[0], stage:2, needReturnVal:true} )
					e[1]=vm.parseToDateArr({str:e[1], stage:2, needReturnVal:true} )
					if(e[0][0]>e[1][0])
						[e[0], e[1]] = [e[1], e[0]]
					if(e[0][0]==e[1][0] && e[0][1]>e[1][1])
						[e[0], e[1]] = [e[1], e[0]]
					vm.valueArrPairs.push(e[0] )	
					vm.valueArrPairs.push(e[1] )	
					return
				}
				else if(!vm.dialogWithRange || vm.type=='DATETIME_RANGE' && stage==2){
					e = str.split(' ')	
					if(e.length>0 && e[0]!='' && e[0].match(/^\d\d:\d\d$|^\d\d:\d\d:\d\d$/)!=null){
						e[1]=e[0]
						e[0]=null
					}
					e[0]= (e.length>0 && nvl(e[0])!='' && e[0].match(/^\d\d\d\d-\d\d-\d\d$/)==null) ? null : e[0]
					e[1]= (e.length>1 && nvl(e[1])!='' && e[1].match(/^\d\d:\d\d$|^\d\d:\d\d:\d\d$/) ==null) ? null : e[1]
				}
				else {
					e = str.split(vm.rangeSeparator)
					mask = /^\d\d\d\d-\d\d-\d\d$/
					if(vm.type=='TIME_RANGE')
						mask=/^\d\d:\d\d$|^\d\d:\d\d:\d\d$/
					e[0]= (e.length>0 && nvl(e[0])!='' && e[0].match(mask)==null) ? null : e[0]
					e[1]= (e.length>1 && nvl(e[1])!='' && e[1].match(mask)==null) ? null : e[1]
					if(e[0]>e[1])
						[e[0], e[1]] = [e[1], e[0]]
				}
				if(needReturnVal)
					return [e[0],e[1]]
				else
					vm.valueArrPairs.push( [e[0],e[1]] )
			},
			setNewVal(value, checkedFx=false, initRun=false){
				let vm=this, tmp=[]
				if(vm.multy ){
					tmp = value.slice()
					if(vm.type=='DATE'){
						vm.valueArrPairs=[]
						vm.valueArr=[]
						vm.valueArrView=[]
						tmp.forEach((row,i)=>{
							vm.parseToDateArr({str:row})
							vm.valueArr.push(vm.getValueDatetimeFromArr({num:i}))
							vm.valueArrView.push(dateFormat(vm.valueArr[i]))
						})
					}
					else if(vm.type=='LIST')
						vm.valueArr=tmp
				}
				else if(vm.type=='RANGE'){
					vm.valueArrPairs[0][0]=value[0]
					vm.valueArrPairs[0][1]=value[1]
				}
				else{
					if(['DATE', 'TIME'].indexOf(vm.type)!=-1){
						vm.valueArrPairs=[]
						vm.parseToDateArr({str:value})
						vm.value = vm.getValueDatetimeFromArr({num:0})
					}
					else
						vm.value = value
					if(['DATE', 'TIME', 'DATETIME', 'TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1){
						vm.valueArrPairs=[]
						vm.parseToDateArr({str:vm.value})
						if(['TIME_RANGE','DATE_RANGE','DATETIME_RANGE'].indexOf(vm.type)!=-1){
							vm.valueArr=[]
							vm.valueArr.push(vm.getValueDatetimeFromArr({}))
							vm.value=vm.valueArr[0]
						}
						vm.valueView = dateFormat(vm.value)
					}
					else 
						vm.valueView =value
				}
				vm.checkRefresh({checkedFx,initRun})
				if(vm.callBackEval!='')
					eval(vm.callBackEval)
			},
			setNewValPairFst(value){
				let vm=this
				vm.setNewVal([value, vm.valueArrPairs[0][1]])
			},
			setNewValPairScnd(value){
				let vm=this
				vm.setNewVal([vm.valueArrPairs[0][0], value])
			},
			saveDialog(value){
				let vm=this
				if(vm.isNeedTab ){
					value.forEach(row=>{
						for (let code in row) {
							if(vm.code == code )	
								vm.$refs.dialog.save(row[code])
							else if(vm.$parent.$refs[code]){
								if(row[code+'_code']!=undefined)
									vm.$parent.$refs[code][0].setNewVal( row[code+'_code'] )
								else if(vm.$parent.$refs[code][0].type=='LIST')
									vm.$parent.$refs[code][0].setNewVal( vm.$parent.$refs[code][0].tableValues.filter(item =>{
										return item.textFull == row[code]
									}).map( item =>{
										return item.value
									}).join()
									)
								else
									vm.$parent.$refs[code][0].setNewVal(row[code])
							}
						}
					})
					vm.tabSelectedRows=[]
				}
				else if(!vm.multy && vm.isDateTimeLike)
					vm.$refs.dialog.save(vm.getValueDatetimeFromArr({check:true,}))
				else if(vm.multy && vm.type=='DATE'){
					if(vm.dialogWithDate && vm.valueArr.length==0)
						showMsg( getErrDesc('saveNoDate'));
					vm.$refs.dialog.save(vm.valueArr)
				}

			},
			changeSign(){
				let vm=this
				if(vm.checked)
					vm.sign=(vm.sign+1)%vm.signList.length
				vm.checkRefresh({})
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
				vm.checkRefresh({})
				if(vm.dialogId>0)
					vm.$root.$emit('dialog'+vm.paramsForm+'Send',{param:vm.code,value:vm.value} )
			},
			changeChecked(){
				let vm=this
				vm.checkRefresh({checkedFx:true})
			},	
			onClick(e){
				let vm=this,
					tmp = vm.checked,
					curTime = new Date().getTime()
				if ( curTime<vm.lastTimeSend+500 )//для автоматической активации полей над ними висит следилка. что бы она не работала лишний раз - глушим ее
					return
				vm.lastTimeSend=curTime
				vm.checked=true
				if(!tmp)
					vm.checkRefresh({checkedFx:true})
				setTimeout(()=>{vm.$refs.input.onClick(e)},100)
			},
			onBlur(){
				let vm=this
				vm.checkRefresh({})
			},
			async checkRefresh({checkedFx=false,initRun=false}){
				let vm=this, tmp1, tmp2,
					value = vm.value,
					valueView =  vm.value,//надо нормализировать для разных обработчиков
					valueArr = [],
					valueArrView = []
				if(vm.type=='RANGE' && !vm.multy){
					value=valueView=null
					if( vm.isNumeric ){
						valueArr = vm.valueArrPairs.slice()
						valueArrView = valueArr.slice()
					}
					else
						vm.valueArrPairs.forEach(function(row) {
							valueArrView.push([nvlo(vm.tableValues[row[0]]).textFull,  nvlo(vm.tableValues[row[1]]).textFull ])
							valueArr.push([nvlo(vm.tableValues[row[0]]).value,  nvlo(vm.tableValues[row[1]]).value ])
						})
					if(!checkedFx)
						vm.checked=	valueArr.length>0 ?true : false
				}
				else if(vm.dialogWithRange && !vm.multy){//считается что у нас есть только строки со значением и его отображением
					valueView = vm.valueView
					valueArr.push(value.split(vm.rangeSeparator)  )
					valueArrView.push(valueView.split(vm.rangeSeparator)  )
					if(!checkedFx)
						vm.checked=	valueArr.length>0 ?true : false
				}
				else if(vm.hasInput && vm.multy){
					value=valueView=null
					valueArr=vm.valueArr.slice()
					if (vm.type=='LIST')
						vm.tableValues.forEach(function(row) {
							valueArr.forEach(function(rowVal) {
								if(row.value==rowVal)
									valueArrView.push(row.textFull)
							})
						})
					else if (vm.type=='DATE')
						valueArrView = vm.valueArrView.slice()
					else
						valueArrView = valueArr.slice()
					if(!checkedFx)
						vm.checked=	valueArr.length>0 ?true : false
				}
				else if(vm.hasInput) {// работа просто с value
					valueArr=valueArrView=null
					if(vm.isSliderLike &&  !vm.isNumeric ){
						valueView = nvlo(vm.tableValues[value]).textFull				
						value = nvlo(vm.tableValues[value]).value
					}
					else if (vm.type=='LIST')
						vm.tableValues.forEach(function(row) {
							if(row.value==value)
								valueView = row.textFull
						})
					else if (vm.dialogWithDate)
						valueView = vm.valueView
					if(!checkedFx)
						vm.checked=	 (value==='' || value==null) ?false:true
				}
				vm.setVal(value, valueView,valueArr, valueArrView,initRun)

				if(['DATE', 'TIME', 'DATETIME','DATE_RANGE', 'TIME_RANGE', 'DATETIME_RANGE'].indexOf(vm.type)!=-1 && !vm.multy && value=='')
					vm.valueArrPairs[0][0]=vm.valueArrPairs[0][1]=null

				if(['DATETIME_RANGE'].indexOf(vm.type)!=-1 && !vm.multy && value=='')
					vm.valueArrPairs[1][0]=vm.valueArrPairs[1][1]=null	

			},
			async setVal(value, value_view, value_arr, value_arr_view, initRun=false){
				let vm=this
				if(vm.hasInput && vm.needCheckBox && !initRun){
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
			let vm=this,
				regexp=''
			vm.callBackEval=vm.data.after_edit_script||vm.callBackEval
			vm.checkBoxColor=appTheme.checkBox||vm.checkBoxColor
			vm.id=vm.data.id||vm.id
			vm.value=nvl(vm.data.value,vm.value)
			vm.code=vm.data.code||vm.code
			vm.name=vm.data.name||vm.name
			vm.tip=vm.data.tip||vm.tip
			vm.placeholder=vm.data.placeholder||vm.placeholder
			vm.type=vm.data.type||vm.type
			vm.nullable=vm.data.nullable||vm.nullable
			vm.columnType=vm.data.column_type||vm.columnType
			vm.columnSize=vm.data.column_size||vm.columnSize
			vm.sortSeq=vm.data.sort_seq||vm.sortSeq
			vm.vMask=vm.data.vMask||vm.vMask
			vm.maskFin=vm.data.mask_fin||vm.maskFin
			vm.error=vm.data.error||vm.error
			vm.checked=vm.data.checked==undefined? vm.checked:!!vm.data.checked
			vm.editable=vm.data.editable==undefined? vm.editable:!!vm.data.editable
			vm.multy=vm.data.multy==undefined? vm.multy:!!vm.data.multy
			vm.min=nvl(vm.data.min,vm.min)
			vm.max=vm.data.max||vm.max
			vm.maxLen=vm.data.max_len||vm.maxLen
			vm.step=vm.data.step||vm.step
			vm.tabGroup=vm.data.tab_group||vm.tabGroup
			vm.ticksNeed=vm.data.ticks_need==undefined? vm.ticksNeed:!!vm.data.ticks_need
			vm.tickSize=vm.data.tick_size||vm.tickSize
			vm.thumbLabelNeed=vm.data.thumb_label_need||vm.thumbLabelNeed
			vm.isBirthDate=vm.data.isBirthDate||vm.isBirthDate
			
			vm.isMultiLine = vm.columnSize>50
			if(vm.data.table_values!=undefined && vm.data.table_values.length>0)
				vm.data.table_values.forEach(element => {
					let text = nvl(element.text,element.value)
					vm.tableValues.push(
						{value:element.value, textFull:text, text:(['LIST'].indexOf(vm.type)==-1?text : text.length>vm.listItemLenght? text.substring(0,vm.listItemLenght)+'...':text ),}
					);
					if(isNaN(element.value))
						vm.isNumeric=false
				});
			if(vm.data.tab_header!=undefined && vm.data.tab_header.length>0)
				vm.tabHeader=vm.data.tab_header.slice()

			if(vm.data.tab_values!=undefined && vm.data.tab_values.length>0)
				vm.tabValues=vm.data.tab_values.slice()

			if(vm.data.value_arr!=undefined && vm.data.value_arr.length>0)
				vm.valueArr=vm.data.value_arr.slice()

			if(vm.data.sign_list!=undefined && vm.data.sign_list.length>0)
				vm.signList=vm.data.sign_list.slice()

			if(vm.data.table_header!=undefined && vm.data.table_header.length>0)
				vm.tableHeader=vm.data.table_header.slice()

			if(vm.data.class!=undefined && vm.data.class.length>0)
				vm.classCss=vm.data.class.slice()

			vm.currentInput= vm.type=='LIST'?'v-select':
				vm.type=='BOOL'?'v-checkbox':
				vm.type=='SLIDER'?'v-slider':
				vm.type=='RANGE'?'v-range-slider':
				vm.type=='DATE'?'v-date-picker':
				vm.type=='TIME'?'v-time-picker':
				vm.type=='TEXT'?'v-textarea':
				vm.type=='INPUT' && vm.isMultiLine?'v-textarea':
				'v-text-field'	
			
			if(vm.type=='LIST' && !vm.multy  && vm.valueArr.length>0)
				vm.value= vm.valueArr[0]

			if(['DATE', 'TIME', 'DATETIME','DATE_RANGE', 'TIME_RANGE', 'DATETIME_RANGE'].indexOf(vm.type)!=-1){ 
				vm.max=isNaN(vm.max)?vm.max:''
				vm.min=isNaN(vm.min)?vm.min:''
				if(!vm.multy && vm.valueArr.length>0)
					if(['DATE', 'TIME', 'DATETIME'].indexOf(vm.type)!=-1)
						vm.value = vm.valueArr[0]
					else
						if(vm.valueArr[0].length>1 && nvl(vm.valueArr[0][0],'')!='' && nvl(vm.valueArr[0][1],'')!='' )
							if(['DATETIME_RANGE'].indexOf(vm.type)!=-1)
								vm.value=vm.valueArr[0][0] +vm.rangeSeparator + vm.valueArr[0][1]
							else if(['DATE_RANGE'].indexOf(vm.type)!=-1)
								vm.value=nvl(vm.valueArr[0][0].match (/^\d\d\d\d-\d\d-\d\d/),['--'])[0] +vm.rangeSeparator + nvl(vm.valueArr[0][1].match (/^\d\d\d\d-\d\d-\d\d/),['--'])[0]
							else if(['TIME_RANGE'].indexOf(vm.type)!=-1)
								vm.value=nvl(vm.valueArr[0][0].match (/\s\d\d:\d\d$|\s\d\d:\d\d:\d\d$/),['--'])[0] +vm.rangeSeparator + nvl(vm.valueArr[0][1].match (/\s\d\d:\d\d$|\s\d\d:\d\d:\d\d$/),['--'])[0]
							else
								console.log('Обнаружена коллизия исходных данных в '+vm.code)
						else
							console.log('Обнаружен некорректно заданый диапазон исходных данных в '+vm.code)
				vm.valueArrPairs.push([null,null]);
				vm.valueArrPairs.push([null,null]);
				if(['DATE', 'DATETIME', 'DATE_RANGE', 'DATETIME_RANGE'].indexOf(vm.type)!=-1)
					vm.dialogWithDate=true
				if(['TIME', 'DATETIME','TIME_RANGE', 'DATETIME_RANGE'].indexOf(vm.type)!=-1)
					vm.dialogWithTime=true
				if(['DATE_RANGE', 'TIME_RANGE', 'DATETIME_RANGE'].indexOf(vm.type)!=-1)
					vm.dialogWithRange=true
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
				vm.value=nvl(vm.value,vm.min)
				if(vm.valueArr!=undefined && vm.valueArr.length>0)
					vm.valueArr.forEach((element,i) => {
						element[0]=nvl(element[0],vm.min)
						element[1]=nvl(element[1],vm.max)
						if( element[0]>vm.max)
							element[0]=vm.max
						if( element[0]<vm.min)
							element[0]=vm.min
						if( element[1]>vm.max)
							element[1]=vm.max
						if( element[1]<vm.min)
							element[1]=vm.min
						if( element[1]<element[0])
							[element[0], element[1]] = [element[1], element[0]]
						vm.valueArrPairs.push([element[0] , element[1]])
					})
				else
					vm.valueArrPairs.push([vm.min , vm.min])
			}
			if(['SLIDER','RANGE','LIST','NUMBER'].indexOf(vm.type)==-1)
				vm.isNumeric=false
			
			if(['HIDDEN','INFO','NBSP','LINE'].indexOf(vm.type)==-1)
				vm.hasInput=true

			if(['DATE', 'DATE_RANGE', 'DATETIME', 'DATETIME_RANGE', 'TIME', 'TIME_RANGE'].indexOf(vm.type)!=-1)
				vm.isDateTimeLike=true

			if(vm.tabGroup!='')
				vm.isNeedTab=true	

			if(vm.hasInput && vm.isNumeric && !isNaN(vm.min) && vm.type!='RANGE' && vm.min!=null )//Границы должны быть цифрой!
				vm.rules.push(v => v>=vm.min|| !vm.checked || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.valMoreOrEq', ...([vm.min]) ) )

			if(vm.hasInput && vm.isNumeric && !isNaN(vm.max) && vm.type!='RANGE' && vm.max!=null )
				vm.rules.push(v => v<=vm.max || !vm.checked || 'Значение не должно превышать '+vm.max+'!')

			if(vm.hasInput && vm.maxLenTypes.indexOf(vm.type)!=-1 && vm.maxLen>0)
				vm.rules.push(v => v.length <= vm.maxLen  || !vm.checked || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.valLessOrEq', ...([vm.maxLen]) ) )
			
			regexp = new RegExp(vm.maskFin)
			if(vm.hasInput && regexp!='')//надо помнить про экранирование
				vm.rules.push(v => regexp.test(v) || vm.$vuetify.lang.t( vm.error ))
			
			vm.rulesChildInput = vm.rules.slice()
				
			if(vm.hasInput && !vm.nullable){
				vm.isNeed =true
				vm.rules.push(v => v!=undefined && (v!='' || v===0) || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.fieldIsNecessary' ) )
				vm.name='⭐ '+vm.name//❗
			}

			if(vm.hasInput && vm.needCheckBox && !vm.nullable)
				vm.rules.push(v => !!vm.checked || vm.$vuetify.lang.t('$vuetify.texts.simple.msgs.fieldMustUsed' ) )

			vm.paramSetData( {num: vm.paramsForm, data:{...vm.data,value :null, value_view :null, value_arr :null, value_arr_view:null, table_values:null,  } })
			if(vm.multy && ['DATE', 'LIST'].indexOf(vm.type)!=-1)
				vm.setNewVal(vm.valueArr,true,true)
			else if(!vm.multy && ['RANGE'].indexOf(vm.type)!=-1)
				vm.setNewVal(vm.valueArrPairs[0],true,true)
			else
				vm.setNewVal(vm.value,true,true)
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
	.v-date-picker-more-height								{height: 392px;}
	.higher-z-index											{z-index: 2;}
	.dialog-display-inline-grid								{display: inline-grid;}
	.dialog-narrow-display-div-arrow						{clear: right; display: inherit; width: 100%; height: 28px;}
	.dialog-narrow-display-arrow-width						{width: 190px;}
	.dialog-narrow-display-arrow-width-min					{width: 85px;}
	.theme--dark.v-table tbody tr[active]>td:first-child	{background: #7d7979;}		
	.v-slider__tick-label									{font-size: 11px;}
	.text-xs-center>.v-chip									{text-align: center;
}
	/*i    border-bottom-color: #2c353f;
	border-bottom-style: groove;
	border-bottom-width: 0.5px;*/
</style>