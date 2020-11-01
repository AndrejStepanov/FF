<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="$h.camelize($options.name)" :parentLayoutName="parentLayoutName"  >
		<template #main >
			<v-container class='height--100pr display--flex flex-direction--column' >
				<div class='flex--99 position--relative' >
					<c-table :searchNeed="true" :headers="tabHeader" :items="tabValues" v-model="tabSelectedRows" :tableTitle="tableTitle" searchButton fiterButton exportPdf exportExcel settingsButton
						:vDataTableProp="{showSelect:true, singleSelect:true}"  withRowNum :loading="tabLoading"
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
	import XDialog from '../mixins/x-dialog'
	import XPage from '../mixins/x-page'
	export default {
		name:'p-test-arm',
		data: () => ({
			singleSelect:false,
			armName:'Тестовый арм',
			tableTitle:'Тестовые данные',
			tabLoading:false,
			tabSelectedRows:[],
			tabHeader:[
				{value:'attInt1', 	text:'Целое 1',			type:'text', 	 		sortable:true,},
				{value:'attInt2', 	text:'Целое 2',			type:'text', 	 		},
				{value:'attNum1', 	text:'Дробное 1',		type:'numeric', 	 	},
				{value:'attNum2', 	text:'Дробное 2',		type:'numeric', 	 	mask:'0.0'},
				{value:'attDate1',	text:'Дата 1',			type:'date', 	 		clsssCell:'text-bold'},
				{value:'attDate2',	text:'Дата 2',			type:'date', 	 		visible:false},
				{value:'user_id',	text:'Пользователь', 	type:'text', 		 	},
			],
			tabValues:[	
				{attInt1:'1',	attInt2:'1',	attNum1:'1',	attNum2:'1',	attDate1:'2020-05-11 08:00:00',	attDate2:'2020-05-11 08:00:00',	user_id	:'Администратор',},
				{attInt1:'2',	attInt2:'2',	attNum1:'2',	attNum2:'2',	attDate1:'2020-05-12 08:00:00',	attDate2:'2020-05-12 08:00:00',	user_id	:'Администратор',},
				{attInt1:'3',	attInt2:'3',	attNum1:'3',	attNum2:'3',	attDate1:'2020-05-13 08:00:00',	attDate2:'2020-05-13 08:00:00',	user_id	:'Администратор',},
				{attInt1:'4',	attInt2:'4',	attNum1:'4',	attNum2:'4',	attDate1:'2020-05-14 08:00:00',	attDate2:'2020-05-14 08:00:00',	user_id	:'Администратор',},
				{attInt1:'5',	attInt2:'5',	attNum1:'5',	attNum2:'5',	attDate1:'2020-05-15 08:00:00',	attDate2:'2020-05-15 08:00:00',	user_id	:'Администратор',},
				{attInt1:'6',	attInt2:'6',	attNum1:'6',	attNum2:'6',	attDate1:'2020-05-16 08:00:00',	attDate2:'2020-05-16 08:00:00',	user_id	:'Администратор',},
				{attInt1:'7',	attInt2:'7',	attNum1:'7',	attNum2:'7',	attDate1:'2020-05-17 08:00:00',	attDate2:'2020-05-17 08:00:00',	user_id	:'Администратор',},
				{attInt1:'8',	attInt2:'8',	attNum1:'8',	attNum2:'8',	attDate1:'2020-05-18 08:00:00',	attDate2:'2020-05-18 08:00:00',	user_id	:'Администратор',},
				{attInt1:'9',	attInt2:'9',	attNum1:'9',	attNum2:'9',	attDate1:'2020-05-19 08:00:00',	attDate2:'2020-05-19 08:00:00',	user_id	:'Администратор',},
				{attInt1:'10',	attInt2:'10',	attNum1:'10',	attNum2:'10',	attDate1:'2020-05-20 08:00:00',	attDate2:'2020-05-20 08:00:00',	user_id	:'Администратор',},
				{attInt1:'11',	attInt2:'11',	attNum1:'11',	attNum2:'11',	attDate1:'2020-05-21 08:00:00',	attDate2:'2020-05-21 08:00:00',	user_id	:'Администратор',},
				{attInt1:'12',	attInt2:'12',	attNum1:'12',	attNum2:'12',	attDate1:'2020-05-22 08:00:00',	attDate2:'2020-05-22 08:00:00',	user_id	:'Администратор',},
				{attInt1:'13',	attInt2:'13',	attNum1:'13',	attNum2:'13',	attDate1:'2020-05-23 08:00:00',	attDate2:'2020-05-23 08:00:00',	user_id	:'Администратор',},
				{attInt1:'14',	attInt2:'14',	attNum1:'14',	attNum2:'14',	attDate1:'2020-05-24 08:00:00',	attDate2:'2020-05-24 08:00:00',	user_id	:'Администратор',},
				{attInt1:'15',	attInt2:'15',	attNum1:'15',	attNum2:'15',	attDate1:'2020-05-25 08:00:00',	attDate2:'2020-05-25 08:00:00',	user_id	:'Администратор',},
				{attInt1:'16',	attInt2:'16',	attNum1:'16',	attNum2:'16',	attDate1:'2020-05-26 08:00:00',	attDate2:'2020-05-26 08:00:00',	user_id	:'Администратор',},
				{attInt1:'17',	attInt2:'17',	attNum1:'17',	attNum2:'17',	attDate1:'2020-05-27 08:00:00',	attDate2:'2020-05-27 08:00:00',	user_id	:'Администратор',},
				{attInt1:'18',	attInt2:'18',	attNum1:'18',	attNum2:'18',	attDate1:'2020-05-28 08:00:00',	attDate2:'2020-05-28 08:00:00',	user_id	:'Администратор',},
				{attInt1:'19',	attInt2:'19',	attNum1:'19',	attNum2:'19',	attDate1:'2020-05-29 08:00:00',	attDate2:'2020-05-29 08:00:00',	user_id	:'Администратор',},
				{attInt1:'20',	attInt2:'20',	attNum1:'20',	attNum2:'20',	attDate1:'2020-05-30 08:00:00',	attDate2:'2020-05-30 08:00:00',	user_id	:'Администратор',},
				{attInt1:'21',	attInt2:'21',	attNum1:'21',	attNum2:'21',	attDate1:'2020-05-31 08:00:00',	attDate2:'2020-05-31 08:00:00',	user_id	:'Администратор',},
				{attInt1:'22',	attInt2:'22',	attNum1:'22',	attNum2:'22',	attDate1:'2020-06-01 08:00:00',	attDate2:'2020-06-01 08:00:00',	user_id	:'Администратор',},
				{attInt1:'23',	attInt2:'23',	attNum1:'23',	attNum2:'23',	attDate1:'2020-06-02 08:00:00',	attDate2:'2020-06-02 08:00:00',	user_id	:'Администратор',},
				{attInt1:'24',	attInt2:'24',	attNum1:'24',	attNum2:'24',	attDate1:'2020-06-03 08:00:00',	attDate2:'2020-06-03 08:00:00',	user_id	:'Администратор',},
				{attInt1:'25',	attInt2:'25',	attNum1:'25',	attNum2:'25',	attDate1:'2020-06-04 08:00:00',	attDate2:'2020-06-04 08:00:00',	user_id	:'Администратор',},
				{attInt1:'26',	attInt2:'26',	attNum1:'26',	attNum2:'26',	attDate1:'2020-06-05 08:00:00',	attDate2:'2020-06-05 08:00:00',	user_id	:'Администратор',},
				{attInt1:'27',	attInt2:'27',	attNum1:'27',	attNum2:'27',	attDate1:'2020-06-06 08:00:00',	attDate2:'2020-06-06 08:00:00',	user_id	:'Администратор',},
				{attInt1:'28',	attInt2:'28',	attNum1:'28',	attNum2:'28',	attDate1:'2020-06-07 08:00:00',	attDate2:'2020-06-07 08:00:00',	user_id	:'Администратор',},
				{attInt1:'29',	attInt2:'29',	attNum1:'29',	attNum2:'29',	attDate1:'2020-06-08 08:00:00',	attDate2:'2020-06-08 08:00:00',	user_id	:'Администратор',},
			],
		}),
		computed: {
			getTabLayoutHeight(){return this.layoutSizePxByName('pTestArm', 'main').height}
		},
		mixins: [
			XDialog, XPage,
		],
		methods: {
			openDialog(dialogId){
				let vm=this
				switch(dialogId){
					case vm.dialogsConfig.treeAdd.id: 					
						console.log(dialogId);
						vm.dialogSetParamByName({id:dialogId, params:{treeId: vm.dialogsConfig.treeAdd.params.treeId, checkFunc:vm.objectTreeAddCheck}}  )
						break
					default: vm.$h.showMsg( vm.$h.getErrDesc('withOpenDialog') );
				}
				vm.dialogShow(dialogId)
			},
			objectTreeAddCheck(params){
				let vm=this
				if(params.obj_level.value=='inside' && vm.$h.nvlo(params.treeId)==0  )
					vm.$h.showMsg(vm.$h.getErrDesc('withAddNestElem') );
			},
		},
		created: function (){

			//let vm = this
		},
	}
</script>