<template>
	<div :class="getClassesMain" :style="'width: '+width+'px; display: inline-flex; '">
		<div class="time-picker__list time-picker__list--hours" ref="hourList">
			<div class='time-picker__items-head'> {{ formatHour(hour) }}   </div>
			<div class="time-picker__item" v-for="hour in hours" @click="selectHour(hour)" v-bind:key="hour.number" @dblclick="$emit('dblclick:time', value)"
				:class="{'time-picker__item--selected': hour.selected, 'time-picker__item--disabled': hour.disabled, ...(hour.selected?getClassesSelected:{}) }"> {{ formatHour(hour.number) }}</div>
		</div>
		<div class="time-picker__list time-picker__list--minutes" ref="minuteList">
			<div class='time-picker__items-head'> {{minute}}   </div>
			<div class="time-picker__item" v-for="minute in minutes" @click="selectMinute(minute)" v-bind:key="minute.number" @dblclick="$emit('dblclick:time', value)"
				:class="{'time-picker__item--selected': minute.selected, 'time-picker__item--disabled': minute.disabled, ...(minute.selected?getClassesSelected:{})}">{{ minute.number }}</div>
		</div>
		<div class="time-picker__list time-picker__list-seconds" ref="secondList" v-if="useSeconds">
			<div class='time-picker__items-head'> {{second}}  </div>
			<div class="time-picker__item" v-for="second in seconds" @click="selectSecond(second) " v-bind:key="second.number"  @dblclick="$emit('dblclick:time', value)"
				:class="{'time-picker__item--selected': second.selected, 'time-picker__item--disabled': second.disabled, ...(second.selected?getClassesSelected:{})}">{{ second.number }}</div>
		</div>
		<div class="time-picker__list time-picker__list--suffix" ref="suffixList" v-if="use12Hour">
			<div class="time-picker__item" @click="selectSuffix('am')" :class="{'time-picker__item--selected': hour < 12}">am</div>
			<div class="time-picker__item" @click="selectSuffix('pm')" :class="{'time-picker__item--selected': hour >= 12}">pm</div>
		</div>
	</div>
</template>

<script>//небыло нормального выборщика вермени, пришлось запилить
//<span class='color-accent' >{{ formatHour(hour) }} </span>
//<span class='color-accent' >{{minute}} </span>
//<span class='color-accent' >{{second}} </span> 
//<sub> {{$vuetify.lang.t('$vuetify.system.labels.hourBrevis')}} </sub>
//<sub>{{$vuetify.lang.t('$vuetify.system.labels.minuteBrevis')}}</sub>
//<sub>{{$vuetify.lang.t('$vuetify.system.labels.secondBrevis')}}</sub>
	export default {
		name:'c-time-picker',
		data: () => ({
			changing: false,
		}),
		props: {
			value: 		{	type: String,	required: true	},
			use12Hour:	{	type: Boolean,	default: false	},
			useSeconds:	{	type: Boolean,	default: false	},
			hourStep:	{	type: Number,	default: 1		},
			minuteStep:	{	type: Number,	default: 1		},
			secondStep:	{	type: Number,	default: 1		},
			minTime:	{	type: String,	default: null	},
			maxTime:	{	type: String,	default: null	},
			width:		{	type: Number,	default: 290},
		},

		computed: {
			getClassesMain(){
				let vm=this
				return {		
					'time-picker': true, 
					'time-picker__with-suffix':  vm.use12Hour &&! vm.useSeconds || ! vm.use12Hour && vm.useSeconds , 
					'time-picker__with-suffix2': vm.use12Hour &&  vm.useSeconds,
					"time-picker__dark-bc": vm.$vuetify.theme.dark,
					"time-picker__light-bc": !vm.$vuetify.theme.dark,
				}
			},
			getClassesSelected(){
				let vm=this
				return {		
					'time-picker__dark-c': vm.$vuetify.theme.dark , 	  
					'time-picker__light-c': !vm.$vuetify.theme.dark , 	  
					'accent' :true,
				}
			},
			hour: {
				set:function (val)	{this.$emit('input', val+':'+this.minute+':'+this.second) 																			},
				get:function() 		{return this.$h.nvl(this.value.split(':')[0],'00')																							},
			},
			minute: {
				set:function (val)	{this.$emit('input', this.hour+':'+val+':'+this.second)																				},
				get:function() 		{return this.$h.nvl(this.value.split(':')[1],'00')																							},
			},
			second: {
				set:function (val)	{this.$emit('input', this.hour+':'+this.minute+':'+val)																				},
				get:function() 		{return this.$h.nvl(this.value.split(':')[2],'00')																							},
			},
			minHour () {
				return this.minTime ? parseInt(this.minTime.split(':')[0]) : null
			},
			minMinute () {
				return this.minTime && this.minHour === this.hour ? parseInt(this.minTime.split(':')[1]) : null
			},
			minSecond () {
				return this.minTime && this.minHour === this.hour && this.minMinute === this.minute ? parseInt(this.minTime.split(':')[2]) : null
			},
			maxHour () {
				return this.maxTime ? parseInt(this.maxTime.split(':')[0]) : null
			},
			maxMinute () {
				return this.maxTime && this.maxHour === this.hour ? parseInt(this.maxTime.split(':')[1]) : null
			},
			maxSecond () {
				return this.maxTime && this.maxHour === this.hour  && this.maxMinute === this.minute? parseInt(this.maxTime.split(':')[2]) : null
			},
			hours () {
				let vm=this
				return vm.getItems(vm.hourStep,24).filter(hour => {
					if (!vm.use12Hour) 
						return true
					else if (vm.hour < 12) 
						return hour < 12
					else 
					return hour >= 12
				}).map(hour => ({
					number: vm.pad(hour),
					selected: hour == vm.hour,
					disabled: vm.timeComponentIsDisabled(vm.minHour, vm.maxHour, hour)
				}))
			},
			minutes () {
				let vm=this
				return vm.getItems(vm.minuteStep,60).map(minute => ({
					number: vm.pad(minute),
					selected: minute == vm.minute,
					disabled: vm.timeComponentIsDisabled(vm.minMinute, vm.maxMinute, minute)
				}))
			},
			seconds () {
				let vm=this
				return vm.getItems(vm.secondStep,60).map(second => ({
					number: vm.pad(second),
					selected: second == vm.second,
					disabled: vm.timeComponentIsDisabled(vm.minSecond, vm.maxSecond, second)
				}))
			},
		},
		watch: {
			value(val, valOld){
				if(!this.changing)
					this.scrollToSelected()
			},
		},
		methods: {
			timeComponentIsDisabled (min, max, component) {
				return (min && component < min) || (max && component > max)
			},
			getItems (step, max) {
				return Array.apply(null, Array(Math.ceil(max / step))).map((item, index) => index * step)
			},
			pad (number) {
				return number < 10 ? '0' + number : number
			},
			selectHour (hour) {
				let vm=this
				if (hour.disabled) 
					return
				vm.changing=true
				vm.hour = hour.number
				vm.$nextTick(() => vm.changing=false) 
			},
			selectMinute (minute) {
				let vm=this
				if (minute.disabled) 
					return
				vm.changing=true
				vm.minute = minute.number
				vm.$nextTick(() => vm.changing=false) 
			},
			selectSecond (second) {
				let vm=this
				if (second.disabled) 
					return
				vm.changing=true
				vm.second = second.number
				vm.$nextTick(() => vm.changing=false) 
			},
			selectSuffix (suffix) {
				let vm=this
				if (suffix === 'am' && vm.hour >= 12)
					vm.$emit('change', { hour: parseInt(vm.hour - 12), suffixTouched: true })
				else if (suffix === 'pm' && vm.hour < 12) 
					vm.$emit('change', { hour: parseInt(vm.hour + 12), suffixTouched: true })
			},
			formatHour (hour) {
				let vm=this,
					numHour = Number(hour)
				if (vm.use12Hour) 
					if (numHour === 0) return 12
					else if (numHour > 12) 	return numHour - 12
					else return numHour
				return hour
			},
			scrollToSelected(){
				let vm=this
				setTimeout(()=>{
					let selectedHour = vm.$refs.hourList.querySelector('.time-picker__item--selected'),
						selectedMinute = vm.$refs.minuteList.querySelector('.time-picker__item--selected'),
						selectedSecond = null
					if(vm.useSeconds)
						selectedSecond = vm.$refs.secondList.querySelector('.time-picker__item--selected')
					vm.$refs.hourList.scrollTop = selectedHour ? selectedHour.offsetTop - 250 : 0
					vm.$refs.minuteList.scrollTop = selectedMinute ? selectedMinute.offsetTop - 250 : 0
					if(vm.useSeconds)
						vm.$refs.secondList.scrollTop = selectedSecond ? selectedSecond.offsetTop - 250 : 0
				},100)

			},
		},
		created: function (){
			
		},
		mounted: function (){
			//setTimeout(()=> this.scrollToSelected(), 100)
		},
	}
</script>

<style>
	.time-picker { box-sizing: border-box; 
		&::after	{ content: ''; display: table; clear: both;  }
		& *			{ box-sizing: border-box;  }
	}

	.time-picker__list { float: left; width: 50%; height: 100%; overflow-y: scroll; -webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar 		{ width: 3px; }
		&::-webkit-scrollbar-track 	{ background: #efefef; }
		&::-webkit-scrollbar-thumb 	{ background: #ccc; }
	}

	.time-picker__with-suffix .time-picker__list {width: 33.3%;	}
	.time-picker__with-suffix2 .time-picker__list {width: 25%;	}

	.time-picker__item { padding: 5px 0; font-size: 12px; text-align: center; cursor: pointer; transition: font-size .3s; }

	.time-picker__item:hover { font-size: 18px; }

	.time-picker__item--selected {    font-size: 18px;        border-radius: 39px; }

	.time-picker__item--disabled { opacity: 0.4; cursor: default; font-size: 12px !important; }
	.time-picker__dark-bc		{background: #737373;}
	.time-picker__light-bc		{background: white;}
	.time-picker__dark-c		{color: #737373; }
	.time-picker__light-c		{color: #ffffff;} 
	.time-picker__dark-bc .time-picker__items-head {background-color: #737373;  border-bottom-color: rgba(0, 0, 0, 0.87);}
	.time-picker__light-bc .time-picker__items-head {background-color: white;  border-bottom-color: rgba(0, 0, 0, 0.87);}
	.time-picker__items-head	{position: sticky; height: 35px; top: 0px; padding-top: 5px; border-bottom-style: double; border-bottom-width: 1px; box-sizing: border-box; text-align: center; font-size: 18px; font-weight: 600;}
	
</style>
