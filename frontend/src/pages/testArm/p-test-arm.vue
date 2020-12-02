<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="componentName" :parentLayoutConfig="parentLayoutConfig"  >
		<template #main >
			<v-container class='height--100pr display--flex flex-direction--column' >
				<div class='flex--99 position--relative' >
					<c-table :searchNeed="true" :headers="tabHeader" :items="tabValues" v-model="tabSelectedRows" :tableTitle="tableTitle" searchButton fiterButton exportPdf exportExcel settingsButton
						:vDataTableProp="{showSelect:true, singleSelect:false}"  withRowNum :loading="tabLoading" 
					>
					</c-table>
				</div>
			</v-container>
		</template>
	</c-layouts-slots>
</template>
<script>
/*

*/
	import XPage from '@/mixins/x-page'
	export default {
		name:'p-test-arm',
		data: () => ({
			singleSelect:false,
			armName:'Тестовый арм',
			tableTitle:'Тестовые данные',
			tableConfig:{
				main:{href:'api/testArms', method:'get', variable:'tabValues', loadingVar:'tabLoading',}
			},
			tabLoading:false,
			tabSelectedRows:[],
			tabHeader:[
				{value:'attInt1', 	text:'Целое 1',			type:'text', 	 		sortable:false,},
				{value:'attInt2', 	text:'Целое 2',			type:'text', 	 		},
				{value:'attNum1', 	text:'Дробное 1',		type:'numeric', 	 	},
				{value:'attNum2', 	text:'Дробное 2',		type:'numeric', 	 	mask:'0.0'},
				{value:'attDate1',	text:'Дата 1',			type:'date', 	 		clsssCell:'text-bold'},
				{value:'attDate2',	text:'Дата 2',			type:'datetime', 	 	visible:false},
				{value:'user_name',	text:'Пользователь', 	type:'text', 		 	},
			],
			tabValues:[],
			buttonsConfig:{
				add:{ title:'$vuetify.system.simple.actions.add',	icon:'add', 	event:'openDialogUniversal', param:{name:'AddTestData', mode:'add', component:'' }, },
				edit:{ title:'$vuetify.system.simple.actions.edit', icon:'edit',	event:'openDialogUniversal', param:{name:'AddTestEdit', mode:'edit', type:'one'}, checkDisable:{var:'tabSelectedRows', type:'one',  }, },
				delete:{ title:'', icon:'delete', checkDisable:{var:'tabSelectedRows', type:'multy', }, },
			},
		}),
		computed: {
			getTabLayoutHeight(){return this.layoutSizePxByName('pTestArm', 'main').height}
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
			await vm.retrieveDataTable({ name:'main' } )
		},
	}
</script>