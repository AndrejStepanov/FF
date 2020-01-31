<script>
	import CApp from '../components/c-app';
	import XStore from './x-store'
	import XDialog from './x-dialog'
	export default {
		data: () => ({
			curentSystem: '',
			layoutsConfigs:undefined,
			layoutsCur:-1,
			dialogsConfig: {},
		}),
		components: {
			CApp,
		},
		mixins: [
			XStore,XDialog
		],
		created: function (){
			let vm=this

			if(vm.layoutsConfigs!=undefined)
				if( vm.layoutsCur>-1 && vm.layoutsConfigs[vm.layoutsCur]!=undefined)
					vm.layoutInit({main:{...vm.layoutsConfigs[vm.layoutsCur], sizePx:vm.$vuetify.breakpoint}})
				else
					vm.layoutInit({main:{...vm.layoutsConfigs, sizePx:vm.$vuetify.breakpoint}})
				/*{ //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики; главный слой во vuex- main
				name: 'first',   width:'100%',	height:'100%',  layout: 'vertical', resizable:false , data:[
					{  name: 'second',   width:'50%',	height:'100%',  layout: 'horizontal'},
					{  name: 'third',   width:'100%',	height:'100%',  layout: 'horizontal'},
				]}*/
		},
	}
</script>