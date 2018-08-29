<template>
	<c-dialog :dialogId="dialogId" :width="dialogWidthCalc" :height="dialogHeightCalc" :buttons='buttons' >
		<v-expansion-panel class="overXAutoLi" v-model="panel" expand>
			<v-expansion-panel-content >
				<template slot="header">{{msg.title}} : {{msg.text}} <br> {{msg.file}} ({{msg.line}})</template>
				<v-card>
					<v-card-text>
						<span v-for="obj in traceObj" class='traceLine' >
							{{obj.file}}({{obj.line}}): {{obj.class}} {{obj.type}} {{obj.function}}
						</span>
					</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</c-dialog>
</template>

<script>
	import CDialog from '../components/c-dialog';
	import {mapActions, mapGetters} from 'vuex'


	export default {
		name:'m-error-desc',
		data: () => ({
			inputsValid:true,
			panel: [true],
			dialogWidthCalc:10,
			dialogHeightCalc:10,
		}),
		props:{
			dialogId: {type: Number, required: true}, 
			dialogWidth: {type: Number, default: 0}, 
			dialogHeight: {type: Number, default: 0}, 
			dialogButtons: {type: Array, default: () =>{return [	
				{id:1, title:'Закрыть', icon:'close', allig:'right', click:'dialogClose'}
			] }},
			msg: {
				type: Object, default: function () {return {'id':0,'title': '', 'text':'', 'trace':'', 'status':0, 'file':'', 'line':0 } }
			},
		},
		computed: {
			buttons() {
				let vm=this
				let tmp = [], buttons=[]
				if(vm.formName=='auth-login')
					buttons=authButtons
				else 
					buttons=vm.dialogButtons
				buttons.forEach((row)=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ? true :false ) }) })
				return tmp
			},
			...mapGetters({
				dialogName:'dialogName',
			}),
			formName(){return this.dialogName(this.dialogId)},
			traceObj(){return JSON.parse(this.msg.trace)},
		},
		components: {
			CDialog,
		},
		methods: {
		},
		created: function (){
			let vm=this
			vm.dialogWidthCalc= vm.dialogWidth>document.documentElement.clientWidth-100? document.documentElement.clientWidth-100:vm.dialogWidth;
			vm.dialogHeightCalc= vm.dialogHeight>document.documentElement.clientHeight-100? document.documentElement.clientHeight-100:vm.dialogHeight;
		},
	}
</script>
<style>
	.overXAutoLi>li {overflow-x: auto; }
	.traceLine{clear: right;    display: block; font-size: 11px;}
</style>