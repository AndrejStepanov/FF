<script>
	import XPage from '@/mixins/x-page'	
	import CApp from '@/components/c-app'
	export default {
		data: () => ({
			curentSystem: '',
			layoutsConfigs:undefined,
			layoutsCur:-1,
			dialogsConfig: {},
			inputsConfig:{
				authLogin: [
					{code:'username', 	name:'Пользователь', 			placeholder:'Логин пользователя', 				type:'INPUT', 		nullable:0, column_size:30, sort_seq:1,  },
					{code:'password',	name:'Пароль', 					placeholder:'Пароль пользователя', 				type:'PASSWORD', 	nullable:0, column_size:30, sort_seq:2,  },
					{code:'remember',	name:'Запомнить мои данные', 	placeholder:'Запомнить данные пользователя', 	type:'BOOL',		nullable:1, column_size:30, sort_seq:3,  },
				],
			},
		}),
		components: {
			CApp,
		},
		mixins: [
			XPage, 
		],
		created (){
			let vm=this
			if(vm.layoutsConfigs!=undefined)
				if( vm.layoutsCur>-1 && vm.layoutsConfigs[vm.layoutsCur]!=undefined)
					vm.layoutInit({mainLayout:{...vm.layoutsConfigs[vm.layoutsCur], sizePx:vm.$vuetify.breakpoint }})
				else
					vm.layoutInit({mainLayout:{...vm.layoutsConfigs, sizePx:vm.$vuetify.breakpoint}})
				/*{ //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики; главный слой во vuex- main
				name: 'first',   width:'100%',	height:'100%',  layout: 'vertical', resizable:false , data:[
					{  name: 'second',   width:'50%',	height:'100%',  layout: 'horizontal'},
					{  name: 'third',   width:'100%',	height:'100%',  layout: 'horizontal'},
				]}*/
		},
	}
</script>