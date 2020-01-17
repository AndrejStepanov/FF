<template>
	<v-slide-x-transition >
		<div   v-on:click ="alertClcik" >
			<v-alert v-model="snackbar" border="left"  :type="msg.type" >
				<template v-slot:prepend> &nbsp; </template>
				<v-card  light  >
					<v-card-title dense> 
						<v-icon>{{icons[msg.type]}}</v-icon>&nbsp;{{msg.title}}     						 
       				</v-card-title>
					<v-card-subtitle dense>   {{msg.text}}    </v-card-subtitle>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn v-if="traceAble" class="accent noMarginLeft" @click.native="$emit('traceDialogShow', msg.id)" small>
							<v-icon>description</v-icon> &nbsp;{{$vuetify.lang.t('$vuetify.texts.simple.labels.detail')}}&nbsp;
						</v-btn>
						<v-spacer></v-spacer>
						<v-btn class="accent noMarginLeft" @click.native="snackbar = false" small>
							&nbsp;{{$vuetify.lang.t('$vuetify.texts.simple.actions.close')}}&nbsp; 
							<v-progress-circular v-if="timerId>0" :rotate="-90"  :size="23" :width="3"   :value="100-(timerVal/maxTimerVal)*100" dark > {{((timerVal/2)|0)}}   </v-progress-circular> 
							<v-icon v-else >close</v-icon> 
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-alert>
		</div>
	</v-slide-x-transition>

</template>
 
<script>
	import XStore from '../mixins/x-store'
	export default {
		name:'c-msg',
		data: () => ({
			snackbar:true,
			timeoutCur:5,
			visibility:false,
			timerVal:0,
			timerId:0,
		}),
		props:{
			msg: {
				type: Object, default: function () {return {id:0, 'timeout':0, y: 'bottom', x: 'right', modeLine:'multi-line', type:'error', title:'', text:'', line:0, trace:'', } }
			},
			icons:{type: Object, default: function () {return {success:'done_outline', error:'error', info:'info', warning:'alarm', } } },
		},
		computed: {
			traceAble(){return this.msg.trace!=''},
			maxTimerVal(){return (this.msg.timeout||this.timeoutCur)*2},
		},
		watch: {
			// эта функция запускается при любом изменении вопроса
			snackbar: function (newsnackbar) {
				if(newsnackbar!=false)
					return;
				let vm=this
				vm.visibility=false;
				setTimeout(()=>{vm.msgDelete(vm.msg.id);},1000);                
			},
		},
		components: {
		},
		mixins: [
			XStore,
		],
		methods: {
			alertClcik(){
				this.removeTimer()		
			},
			removeTimer(){
				let vm=this
				if(vm.timerId==0)
					return
				clearTimeout(vm.timerId)
				vm.timerId=0;
			}
		},
		created: function (){
			let vm=this
			vm.timerVal=vm.maxTimerVal
			vm.timerId=setInterval(()=>{vm.timerVal-=1;  if (vm.timerVal<0){ this.removeTimer(); vm.snackbar=false}}, 500);//отрисовка движения ползунка идет в течении секунды
		},
		beforeDestroy () {
			this.removeTimer()
		},
	}
</script>