<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="componentName" :parentLayoutConfig="parentLayoutConfig"  >
		<template #main >
			<v-container class='height--100pr display--flex flex-direction--column' >
				<div class='flex--99 position--relative' >
					<c-table :searchNeed="true" :headers="tabHeader" :items="tabValues" v-model="tabSelectedRows" :tableTitle="tableTitle" searchButton fiterButton exportPdf exportExcel settingsButton
						:vDataTableProp="{showSelect:true, singleSelect:false}"  withRowNum :loading="tabLoading" :keyField="tablesConfig.mainTable.keyField"
					/>
				</div>
			</v-container>
		</template>
		<template #layoutDialogs >  <component v-for="(row, name) in dialogsShowen " :key="name" v-bind:is="row.config.component" :dialogLink="row.link"  />	</template>
	</c-layouts-slots>
</template>
<script>
	import XPage from '@/mixins/x-page'
	export default {
		name:'p-test-arm',
		data: () => ({
			singleSelect:false,
			armName:'Тестовый арм',
			tableTitle:'Тестовые данные',
			tablesConfig:{
				mainTable:{href:'api/testArms', method:'get', variable:'tabValues', selectedVar:'tabSelectedRows', loadingVar:'tabLoading', keyField:'id', seqNum:1}
			},
			tabLoading:false,
			tabSelectedRows:[],
			tabHeader:[
				{value:'attStr1', 	text:'Строка 1',		type:'text', 	 		},
				{value:'attStr2', 	text:'Строка 2',		type:'text', 	 		},
				{value:'attInt1', 	text:'Целое 1',			type:'numeric', 	 	sortable:false,},
				{value:'attInt2', 	text:'Целое 2',			type:'numeric', 	 	},
				{value:'attNum1', 	text:'Дробное 1',		type:'numeric', 	 	},
				{value:'attNum2', 	text:'Дробное 2',		type:'numeric', 	 	mask:'0.0'},
				{value:'attDate1',	text:'Дата 1',			type:'date', 	 		clsssCell:'text-bold'},
				{value:'attDate2',	text:'Дата 2',			type:'datetime', 	 	visible:false},
				{value:'user_name',	text:'Пользователь', 	type:'text', 		 	},
			],
			tabValues:[],
			buttonsConfig:{
				add:{ 
					title:'$vuetify.system.actions.add',	icon:'add', 	event:'openDialogUniversal',
					dialogConfig:{ title:'$vuetify.system.modals.addRecord.title', component:'m-input-fields'} ,
					dialogParams:{href:'api/testArms',  method:'post', inputGroup:'testArms',  }, 
					params:{additionParam:vm=> vm.tableGetVar({table:'mainTable', param:'id', title:'id'}),    }, 
				},
				edit:{ 
					title:'$vuetify.system.actions.edit', icon:'edit',	event:'openDialogUniversal',
					dialogConfig:{ title:'$vuetify.system.modals.editRecord.title', component:'m-input-fields'} ,
					dialogParams:{href:'api/testArms',  method:'patch', inputGroup:'testArms', },  
					params:{additionParam:vm=> vm.tableGetVar({table:'mainTable', param:'id', title:'id'}),   },
					checkDisable:{var:'tabSelectedRows', type:'multy',  }, 
				},
				delete:{ 
					title:'$vuetify.system.actions.delete', icon:'delete', event:'openDialogUniversal',
					dialogConfig:{ title:'$vuetify.system.modals.deleteRecord.title', component:'m-accept-process'} ,
					dialogParams:{href:'api/testArms',  method:'delete', text:'$vuetify.system.modals.deleteRecord.quest'}, 
					params:{additionParam:vm=> vm.tableGetVar({table:'mainTable', param:'id', title:'id'}),  },
					checkDisable:{var:'tabSelectedRows', type:'multy', }, 
				},
			},
			inputsConfig:{
				testArms:[
					{code:'attStr1', 	name:'Строка 1', 	placeholder:'Строка 1 описание', 		type:'INPUT', 		nullable:false, column_size:30, sort_seq:10  },
					{code:'attStr2', 	name:'Строка 2', 	placeholder:'Строка 2 описание', 		type:'INPUT', 		nullable:false, column_size:30, sort_seq:20  },
					{code:'attInt1', 	name:'Целое 1', 	placeholder:'Целое 1 описание', 		type:'NUMBER', 		nullable:false, column_size:30, sort_seq:30  },
					{code:'attInt2', 	name:'Целое 2', 	placeholder:'Целое 2 описание', 		type:'NUMBER', 		nullable:false, column_size:30, sort_seq:40  },
					{code:'attNum1', 	name:'Дробное 1', 	placeholder:'Дробное 1 описание', 		type:'NUMBER', 		nullable:false, column_size:30, sort_seq:50  },
					{code:'attNum2', 	name:'Дробное 2', 	placeholder:'Дробное 2 описание', 		type:'NUMBER', 		nullable:false, column_size:30, sort_seq:60  },
					{code:'attDate1', 	name:'Дата 1', 		placeholder:'Дата 1 описание', 			type:'DATE', 		nullable:false, column_size:30, sort_seq:31  },
					{code:'attDate2', 	name:'Дата 2', 		placeholder:'Дата 2 описание', 			type:'DATETIME', 	nullable:false, column_size:30, sort_seq:32  },	
				],
			},
		}),
		computed: {
		},
		mixins: [
			XPage,
		],
		methods: {			
			delete_click(params){
				console.log('delete_click', params);
			},
		},
		created: async function (){
			let vm = this
			vm.contentRefresh()			
		},
	}
</script>