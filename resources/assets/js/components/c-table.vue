<template>
	<v-card  >
		<v-card-title v-if="tableTitle!='' || searchNeed" ref="title">
			<h3 class="headline mb-0">{{tableTitle}}</h3> 
			<template v-if="searchNeed">
				<v-spacer/>
				<v-text-field	v-model="search"	append-icon="search"	label='Искать по полям'	single-line	hide-details clearable  	/>				
			</template>
		</v-card-title>
		<v-data-table	:value="selectedValues" :headers ="tabHeads" :items ="tabRows" :headersLength ="headersLength" :headerText ="headerText" :headerKey ="headerKey" :hideHeaders ="hideHeaders" :rowsPerPageText ="rowsPerPageText" :expand ="expand" 
				:hideActions ="hideActions"  :noResultsText ="noResultsText" :nextIcon ="nextIcon" :prevIcon ="prevIcon" :rowsPerPageItems ="rowsPerPageItems" 
				:selectAll ="selectAll" :search ="search"   :itemKey ="itemKey" ref="table"	 :customFilter="searchInTable" 
				:class="getMainTableClass" :style="getMainTableStyle"
				@update:pagination='updateTabFirstNum'>
			<template slot="headers" slot-scope="props">
				<template v-if="manHead" >
					<slot name="headers" :headers="props.headers" :indeterminate="props.indeterminate" :all="props.all"/>
				</template>
				<template v-else >			
					<tr>
						<th v-if="!noRowNum" class='column active width-one-percent'>
							<v-checkbox v-if="selecttableTypes.indexOf(typeSelect)!=-1 && selectAll"	:input-value="typeSelect=='one'?selectedValues.length: props.all"	:indeterminate="typeSelect=='one'?false:props.indeterminate"	 
								:color="checkBoxColor"	hide-details	@click.native="toggleAll"  />
							<template v-else>
								№<br>п/п
							</template>
						</th>
						<th	v-for="header in tabHeads"	:key="header.code" 	 v-if="header.visible" class='column active'		>
							{{ header.text }}
						</th>
					</tr>
				</template>
			</template>
			<template slot="items" slot-scope="props">
				<template v-if="manBody" >
					<slot name="items" :item="props.item" :index="props.index" :selected="props.selected" :expanded="props.expanded"/>
				</template>
				<template v-else >			
					<tr :active="props.selected" @click="selectRow(props)">
						<td	v-if="!noRowNum" class='width-one-percent'																>	{{props.item._id+1}}				</td><!--<v-checkbox	:input-value="props.selected" :color="checkBoxColor"	hide-details /> убрал из-за того что синхронизация не хило так тормозит -->
						<td	v-for="header in tabHeads"	:key="header.code" 	v-if="header.visible"	:class="header.clsssCell"		>	{{props.item[header.code]}}			</td>
					</tr>
				</template>
			</template>
			<v-alert slot="no-results" :value="true" color="error" icon="warning">
				Поиск для "{{ search }}" ничего не нашел.
			</v-alert>
		</v-data-table>
	</v-card>
</template>

<script>
	export default {
		name:'c-table',
		data: () => ({
			checkBoxColor:'white',//переопределяется в created
			firstNum:1,
			isMounted:false,
			selectedValues:[],
			selecttableTypes:['one','multy'],
			search:'',
		}),
		props:{
			typeSelect: {type: String,	default: ''	},
			manHead:false,
			manBody:false,
			searchNeed:false,
			tableTitle:'',
			noRowNum:false,
			height:{type: Number	},
			//взято из v-data-table
			headers: {type: Array,	default: () => []	},
			items: {type: Array,		default: () => []	},
			headersLength: {type: Number	},
			headerText: {type: String,	default: 'text'	},
			headerKey: {type: String,	default: null	},
			hideHeaders: {type:Boolean,	default: false	},
			rowsPerPageText: {type: String,	default: '$vuetify.dataTable.rowsPerPageText'	},
			expand: Boolean,
			hideActions: {type:Boolean,	default: false	},
			noResultsText: {type: String,	default: '$vuetify.dataIterator.noResultsText'	},
			nextIcon: {type: String,	default: '$vuetify.icons.next'	},
			prevIcon: {	type: String,	default: '$vuetify.icons.prev'	},
			rowsPerPageItems: {type: Array,	default: ()=>{return [500, 250, 100, 50, 25, 2, { text: '$vuetify.dataIterator.rowsPerPageAll',   value: -1 }]}	},
			selectAll: [Boolean, String],
			value: {type: Array,	default: () => []	},
			itemKey: {type: String,	default: '_id'	},
		},	
		computed: {
			tabHeads(){
				let  vm = this
				return  vm.headers.map((head,i) => {
					let _isNumeric = !(head.type.match(/^numeric/i)==null),
						_isDate=!(head.type.match(/^date/i)==null),
						_isInt = !(head.type.match(/^int/i)==null)
					return {...head, visible:( head.visible===false?false:true ), sortable:( head.sortable===true?true:false ), 
						_isNumeric:( _isNumeric || _isInt), _isDate, mask: nvl(head.mask, ( _isNumeric?'0,0.000': _isInt ?'0,0':undefined ) ),
						clsssCell:nvl(head.clsssCell,'')+' '+(_isNumeric||_isDate?' text-nobr ':'')+' '+(_isNumeric?' text-right ':''),
					}
				})
			},
			tabRows(){
				let  vm = this,
					isNumeric=[],
					isDate=[]
				if(vm.manBody)
					return vm.items
				let e =  vm.items.map((element,i) => {
					let tmp={}
					vm.tabHeads.forEach((head,j) =>{
						if(!head.visible)
							return
						tmp[head.code] = vm.valFormat(element[head.code],head.type, head.replace, head._isNumeric, head.mask, head._isDate,)
					})
					return {...tmp, _id:i}
				})
				return e
			},
			getMainTableStyle(){
				let vm=this
				return {
					height: (vm.isMounted && vm.height>0 ? vm.height-vm.$refs.title.clientHeight+ 'px' : -1)  ,
					overflowY: 'auto',
				}
			},
			getMainTableClass(){
				let vm=this
				return {
					"c-table":true,
					"tabFullHeight": vm.hideActions,					  
					"tabWithPagination": !vm.hideActions,				  
				}
			},
		},
		mixins: [
		],
		methods: {
			searchInTable (items, search, filter, headers) {
				search = search.toString().toLowerCase()
				if (search.trim() === '') return items
				const props = headers.map(h => h.code)
				return items.filter(item => props.some(prop => filter(item[prop], search)))
			},
			valFormat(val, type,replace, isNumeric=false, mask, isDate=false){//вполне себе может быть использована и извне
				let vm=this
				if(val==undefined || val=='' || ( isNumeric && val==0) )
					val=replace
				if(isDate)
					val = dateFormat(val)
				if(isNumeric)
					val=numberFormat(val,mask)
				return val
			},
			updateTabFirstNum(obj){
				let vm = this
				vm.tabFirstNum= (!vm.isMounted ||  vm.$refs.table==undefined || obj.page==1?0:(obj.page-1)*obj.rowsPerPage) +1
			},
			selectRow (props) {
				let vm = this,
					lastSel=!!props.selected
				if(vm.selecttableTypes.indexOf(vm.typeSelect)==-1)
					return
				if(vm.typeSelect=='one')
					vm.selectedValues = []
				if(!lastSel)
					vm.selectedValues.push(props.item)
				else if(vm.typeSelect!='one')
					vm.selectedValues=vm.selectedValues.filter(row => {
						return row._id != props.item._id
					})
				vm.selectedValuesChanged()
			},
			toggleAll () {
				let vm=this
				if (vm.selectedValues.length) 
					vm.selectedValues = []
				else if(vm.typeSelect=='multy')
					vm.selectedValues = vm.items.slice()
				vm.selectedValuesChanged()
			},
			selectedValuesChanged(){
				let vm=this
				vm.$emit('input', vm.selectedValues.map(row => {
					return vm.items[row._id]
				}))
			},
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=appTheme.checkBox||vm.checkBoxColor
			if(vm.value.length>0)
				vm.value.forEach((element,i) => {
					vm.selectedValues.push(element);
				})
		},
		//
	 	mounted: function (){	
			let vm=this
        	vm.isMounted = true;
		},
	}
</script>
<style> 
	/* https://tallent.us/vue-scrolling-table/ */

	.c-table.tabFullHeight>div {height: 100%; width: 100%; overflow: auto; }
	.c-table.tabWithPagination>div.v-table__overflow {height: calc(100% - 59px); width: 100%; overflow: auto; }
</style>