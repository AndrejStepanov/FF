<template>
	<c-dialog ref='dialog' :dialogId="dialogId" :widthOrig="dialogConfigGet.width" :heightOrig="dialogConfigGet.height" :buttons="dialogButtons" @dialogSave="dialogSave" noHeader >
		<div class='height--100pr display--flex flex-direction--column' >
			<div class='flex--99 position--relative' >
				<c-table :searchNeed="true" :headers="tabHeader" :items="tabValues"  searchButton	withRowNum	:vDataTableProp="{hideDefaultFooter:true}" :tableTitle="dialogConfigGet.title" >
					<template #item.sortable="{ item }">
						<v-simple-checkbox	:value="item.sortable"	@click="changeAttr('sortable', item.id,  !!!item.sortable)" />
					</template>
					<template #item.visible="{ item }">
						<v-simple-checkbox	:value="item.visible" @click="changeAttr('visible', item.id, !!!item.visible)" />
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
			loading: false,
			paramsForm:'',
			dialogButtons:[
				{id:-1, 	title:'$vuetify.system.simple.actions.close', 	icon:'close', 	allig:'right',	click:'dialogClose'},
				{id:-1, 	title:'$vuetify.system.simple.actions.save', 	icon:'save', 	allig:'right', 	click:'dialogSave'}, 
			],
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
		},
		components: {
			CTable, 
		},
		mixins: [
			XModal,
		],
		methods: {
			changeAttr(type, id,  newVal){
				this.$set(this.tabValues[id], type, newVal)
			},
			dialogSave(){
				let vm=this
				vm.tabValues= vm.tabValues.map(row=> {				
					return vm.tabHeader.reduce((body, head) => (row[ head.value ] === head.default ? body : { ...body, [head.value]:row[ head.value ] }),{})
				})
				vm.$emit('input', {id:vm.dialogId, payload:vm.tabValues})
				vm.dialogShowChange({id:this.dialogId, isShow:false})
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