<template>
	<c-dialog :dialogId="dialogId" :widthOrig="dialogConfigGet.width" :heightOrig="dialogConfigGet.height" :buttons='buttons' >
		<v-expansion-panel class="overXAutoLi" v-model="panel" expand>
			<v-expansion-panel-content >
				<template slot="header">{{dialogParamsGet.msg.title}} : {{dialogParamsGet.msg.text}} <br> {{dialogParamsGet.msg.file}} ({{dialogParamsGet.msg.line}})</template>
				<v-card>
					<v-card-text>
						<span v-for="obj in (JSON.parse(dialogParamsGet.msg.trace) )" class='traceLine' >
							{{obj.file}}({{obj.line}}): {{obj.class}} {{obj.type}} {{obj.function}}
						</span>
					</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</c-dialog>
</template>

<script>
	import XStore from '../mixins/x-store'
	import CDialog from '../components/c-dialog';
	export default {
		name:'m-error-desc',
		data: () => ({
			inputsValid:true,
			panel: [true],
		}),
		props:{
			dialogId: {type: Number, required: true}, 
			dialogButtons: {type: Array, default: () =>{return [	
				{id:1, title:'$vuetify.texts.simple.actions.close', icon:'close', allig:'right', click:'dialogClose'}
			] }},
		},
		computed: {
			buttons() {
				let vm=this
				let tmp = [], buttons=vm.dialogButtons
				buttons.forEach((row)=> { tmp.push({...row, disabled: ( row.needCheck==true && !vm.inputsValid ? true :false ) }) })
				return tmp
			},
			dialogConfigGet(){
				let vm=this
				return vm.dialogConfig(vm.dialogId)
			},
			dialogParamsGet(){
				let vm=this
				return vm.dialogParams(vm.dialogId)
			},
		},
		components: {
			CDialog,
		},
		mixins: [
			XStore,
		],
		methods: {
		},
		created: function (){
			let vm=this
		},
	}
</script>
<style>
	.overXAutoLi>li {overflow-x: auto; }
	.traceLine{clear: right;    display: block; font-size: 11px;}
</style>