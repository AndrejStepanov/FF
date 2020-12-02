<script>
	import CDialog from '../components/c-dialog'
	import XDialogConfig from '@/mixins/x-dialog-config'
	export default {
		data: () => ({
			dialogButtons:[
				/*{id:-1, 	title:'$vuetify.system.simple.actions.close', 	icon:'close', 	allig:'right',	click:'dialogClose', 	needCheck:false},
				{id:-1, 	title:'$vuetify.system.simple.actions.save', 	icon:'save', 	allig:'right', 	click:'dialogSave', 	needCheck:true}, */
			],
		}),
		props:{
			dialogId: {type: Number, required: true}, 
			value:  {type: Array,	default: () => []	},
		},
		computed: {
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
			XDialogConfig,
		],
		created: function (){
			let vm=this
			for ( let i=0; i<vm.dialogButtons.length; i++ )
				if(vm.$h.nvl(vm.dialogButtons[i].id,-1)==-1)
					vm.dialogButtons[i].id= vm.$h.getNewId()
		},
	}
</script>