<template>
	<v-slide-x-transition>
		<div v-show="visibility">
			<v-snackbar ref="snack" transition="scale-transition" dense v-model="snackbar" :class="msg.type+'--content'"  :timeout="timeoutCur" :top="msg.y === 'top'" :bottom="msg.y === 'bottom'" :right="msg.x === 'right'" :left="msg.x === 'left'" 
					:multi-line="msg.modeLine === 'multi-line'" :vertical="msg.modeLine === 'vertical'" @click="snackClcik" >
				<v-container grid-list-xl text-xs-left>
					<v-layout align-start justify-start row fill-height wrap>
						<v-flex xs12 class="dispContent">
							<v-layout align-start justify-space-between row fill-height >
								<v-flex xs10 >
									<span class="bold underline">
										{{msg.title}}
									</span>
								</v-flex>
								<v-spacer ></v-spacer>
								<v-flex xs2 class="dispContent">
									<v-btn v-if="traceAble" icon class="accent noMarginLeft" @click.native="$emit('traceDialogShow', msg.id) ">
										<v-icon>description</v-icon>
									</v-btn>
									<v-btn icon class="accent noMarginLeft" @click.native="snackbar = false">
										<v-icon>close</v-icon>
									</v-btn>
								</v-flex>
							</v-layout>
						</v-flex>
						<v-flex xs12 align-content-start class="noPadding">
							<span>
								<span >{{msg.text}}</span>
							</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-snackbar>
		</div>
	</v-slide-x-transition>
</template>
 
<script>
	import XStore from '../mixins/x-store'
	export default {
		name:'c-msg',
		data: () => ({
			snackbar:true,
			timeoutCur:6000,
			visibility:false,
		}),
		props:{
			msg: {
				type: Object, default: function () {return {id:0, 'timeout':0, 'y': 'bottom', 'x': 'right', 'modeLine':'multi-line', 'type':'error', 'title':'', 'text':'', 'line':0, 'trace':'', } }
			},
		},
		computed: {
			traceAble(){return this.msg.trace!=''}
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
			snackClcik(){
				let vm=this
				if(vm.timeoutCur==999999)
					return
				vm.timeoutCur=999999
				setTimeout(()=>{vm.$refs.snack.setTimeout(); },100)				
			}
		},
		created: function (){
			let vm=this
			vm.timeoutCur=vm.msg.timeout
			setTimeout(()=>{vm.visibility=true;},100);
		},
	}
</script>