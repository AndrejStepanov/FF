<template>
	<c-dialog :dialogId="dialogId" :width="dialogWidthCalc" :height="dialogHeightCalc" :buttons='buttons' >
		<v-expansion-panel class="overXAutoLi">
			<v-expansion-panel-content hide-actions>
				<template slot="header">{{title}} : {{text}} <br> {{file}} - {{line}}</template>
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
	import {mapActions} from 'vuex'


	export default {
		name:'m-error-desc',
		data: () => ({
			inputsValid:true,
			dialogWidthCalc:10,
			dialogHeightCalc:10,
			traceObj:'',
		}),
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
		},
		props:{
			formName: {type: String, default: ''},
			dialogId: {type: Number, required: true}, 
			dialogWidth: {type: Number, default: 0}, 
			dialogHeight: {type: Number, default: 0}, 
			dialogButtons: {type: Array, default: () =>{return [	
				{id:1, title:'Закрыть', icon:'close', allig:'right', click:'dialogClose'}
			] }},
            title: {type:  String, required: true},
            text: {type:  String, required: true},
            trace: {type:  String, required: true},
            status: {type:  Number, required: true},
            file: {type:  String, required: true},
            line: {type:  Number, required: true},
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
			vm.traceObj=JSON.parse(vm.trace)
		},
	}
</script>
<style>
	.overXAutoLi>li {overflow-x: auto; }
	.traceLine{clear: right;    display: block; font-size: 11px;}
</style>