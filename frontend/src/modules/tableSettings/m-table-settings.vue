<template>
	<c-dialog ref='dialog' :dialogLink="dialogLink" :widthOrig="modalSize.width" :heightOrig="modalSize.height" :buttons="compButtonsGet"  noHeader >
		<div class='height--100pr display--flex flex-direction--column' >
			<div class='flex--99 position--relative' >
				<c-table :searchNeed="true" :headers="tabHeader" :items="tabValues"  searchButton	withRowNum	:vDataTableProp="{hideDefaultFooter:true}" :tableTitle="dialogConfigGet.title" >
					<template #item.sortable="{ item }">
						<v-simple-checkbox	:value="item.sortable"	@click="changeAttr('sortable', item._sys_id,  !!!item.sortable)" />
					</template>
					<template #item.visible="{ item }">
						<v-simple-checkbox	:value="item.visible" @click="changeAttr('visible', item._sys_id, !!!item.visible)" />
					</template>
				</c-table>
			</div>
		</div>
	</c-dialog>
</template>

<script>
	import XModal from '@/mixins/x-modal'	
	import CTable from '@/components/c-table'
	export default {
		name:'m-table-settings',
		data: () => ({
			paramsForm:'',
			buttonsConfig:{
				close:	{title:'$vuetify.system.actions.close', 	icon:'close', 	allig:'right',},
				save:	{title:'$vuetify.system.actions.save', 	icon:'save', 	allig:'right',}, 
			},
			tabHeader:[
				{value:'value', 		text:'Название',		type:'text', 	 		default:'',							},
				{value:'text', 			text:'Перевод',			type:'text', 	 		default:'',							},
				{value:'type', 			text:'Тип',				type:'text', 	 		default:'',							},
				{value:'sortable', 		text:'Сортировка',		type:'text', 	 		default:true, 						},
				{value:'mask', 			text:'Маска',			type:'text', 	 		default:'', 						},
				{value:'visible', 		text:'Видимость',		type:'text', 	 		default:true,						},
				{value:'clsssCell', 	text:'Доп. класс',		type:'text', 	 		default:'', 						},
			],
			tabValues:[	
			],
		}),
		computed: {
			rowId(){
				return this.dialogParamsGet.rowId
			},
		},
		components: {
			CTable, 
		},
		mixins: [
			XModal,
		],
		methods: {
			changeAttr(type, _sys_id,  newVal){
				this.$set(this.tabValues[_sys_id], type, newVal)
			},
			async save_click(){
				let vm=this, todo={}
				try {
					await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:true, compLock:true} )
					vm.tabValues= vm.tabValues.map(row=> {				
						return vm.tabHeader.reduce((body, head) => (row[ head.value ] === head.default ? body : { ...body, [head.value]:row[ head.value ] }),{})
					})

					if (! await vm.modalCheckFuncs(todo))
						return await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} )
					vm.tabValues = await vm.modalPrepereFuncs(vm.tabValues)
					await vm.modalFinishFuncs({todo:vm.tabValues})
				}
				finally { await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} ) }
			},
		},
		created: function (){
			let vm=this
			vm.tabValues=vm.dialogParamsGet.headers.slice()
			vm.tabValues= vm.tabValues.map(row=> {				
				return vm.tabHeader.reduce((body, head) => ({ ...body, [head.value]:vm.$h.nvl(row[ head.value ] , head.default) }),{})
			})
		},
	}
</script>