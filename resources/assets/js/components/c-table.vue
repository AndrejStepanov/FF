<template>
	<v-card height="100%" >
		<v-card-title v-if="tableTitle!='' || searchNeed" ref="title" class='noPadding'>
			<h3 class="headline ml-2">{{$vuetify.lang.t(tableTitle)}}</h3> 
			<template v-if="searchNeed">
				<v-spacer/>
				<v-text-field v-model="search"	append-icon="search" :label="$vuetify.lang.t('$vuetify.texts.simple.labels.searchInFields')"	single-line	hide-details clearable />				
			</template>
			<template v-if="fiterButtonhNeed">
				<v-spacer/>
				<v-btn  class="mr-2" color="accent" @click="$emit('fiterButtonClick')"  > {{$vuetify.lang.t('$vuetify.texts.simple.labels.filter')}} <v-icon right>filter_list</v-icon>   </v-btn>			
			</template>
		</v-card-title>
		<v-data-table :dense="dense" :fixed-header="fixedHeader"	:value="selectedValues" :headers ="tabHeadsVisible" :items ="tabRows" v-bind="vDataTableProp" :headersLength="headersLength" :headerText="headerText" 
				:headerKey="headerKey"  :loading="loading" :search="search"   :itemKey="itemKey" ref="table"	:class="getMainTableClass" :style="getMainTableStyle" height="calc(100% - 60px)"  > <!--:pagination="pagination"	@update:pagination='updateTabFirstNum'-->
			<template v-if="noVuetifyHead && manHead" v-slot:header="props"  >
				<slot name="header" :props="props"/>
			</template>
			<template v-slot:item="props">
				<template v-if="manBody" >
					<slot name="item" :item="props.item" :index="props.index" :selected="props.selected" :expanded="props.expanded"/>
				</template>
				<template v-else >			
					<tr :active="props.selected" @click="selectRow(props)" @dblclick="dblClickRow" :class="{'v-data-table__selected':props.isSelected}">
						<td	v-if="vDataTableProp.showSelect" 														>	<v-simple-checkbox	:value="props.isSelected"  />		</td><!--<v-checkbox	:input-value="props.selected" :color="checkBoxColor"	hide-details /> убрал из-за того что синхронизация не хило так тормозит -->
						<td	v-for="header in tabHeadsVisible"	:key="header.value" 	:class="header.clsssCell"	>	{{props.item[header.value]}}			</td>
					</tr>
				</template>
			</template>
			<template v-slot:progress>
				<c-loading slot="progress" />
			</template>
			<template v-slot:no-data>
				<tr>
					<td colspan="99" class="text-xs-center">{{loading? $vuetify.lang.t(dataLoadingText) : $vuetify.lang.t(noResultsText) }}</td>
				</tr>
			</template>
		</v-data-table>
	</v-card>
</template>

<script>
	import CLoading from '../components/c-loading'
	import {Ripple,} from 'vuetify/lib/directives'
	export default {
		name:'c-table',
		data: () => ({
			checkBoxColor:'white',//переопределяется в created
			firstNum:1,
			isMounted:false,
			selectedValues:[],
			selecttableTypes:['one','multy'],
			search:'',
			blocksSize:{},
		}),
		props:{			
			manHead:{type:Boolean,	default: false	},
			dense:{type:Boolean,	default: true	},
			manBody:{type:Boolean,	default: false	},
			manProgress:{type:Boolean,	default: false	},
			noVuetifyHead: {type:Boolean,	default: true	},
			searchNeed:{type:Boolean,	default: false	},
			fiterButtonhNeed:{type:Boolean,	default: false	},
			loading:{type:Boolean,	default: false	},
			tableTitle: {type:String,	default: ''	},
			withRowNum:{type:Boolean,	default: false	},
			height:{type: Number},
			layoutSize: {type: Object, default: () => {} },
			//взято из v-data-table
			//pagination: {type: Object,  default: () => {} },
			vDataTableProp: {type: Object },
			headers: {type: Array,	default: () => []	},
			items: {type: Array,		default: () => []	},
			headersLength: {type: Number, default:0	},
			headerText: {type: String,	default: 'text'	},
			headerKey: {type: String,	default: 'value'	},
			dataLoadingText: {type: String,	default: 'dataLoadingText'	},
			noResultsText: {type: String,	default: 'dataLoadingText'	},
			value: {type: Array,	default: () => []	},
			itemKey: {type: String,	default: '_id'	},
			fixedHeader:{type:Boolean,	default: true	},
		},	
		computed: {
			typeSelect(){return  this.vDataTableProp.singleSelect?'one': this.vDataTableProp.singleSelect===false?'multy':''	},			
			tabHeads(){
				let  vm = this,
					tmp = [vm.withRowNum?{value:'_id', text:vm.$vuetify.lang.t('$vuetify.texts.simple.labels.numInOrder'), type:'int', clsssCell:'width-one-percent'}:{}]
				if(vm.headers.find((head,i) => head.type==undefined )!=undefined)
					throw new Error('Всем элементам заголовка необходимо указывать поле type!')
				return  tmp.concat( vm.headers).map((head,i) => {
					let _isNumeric = !(head.type.match(/^numeric/i)==null),
						_isDate=!(head.type.match(/^date/i)==null),
						_isInt = !(head.type.match(/^int/i)==null)
					return {...head, visible:( head.visible===false?false:true ), sortable:( head.sortable===true?true:false ), 
						_isNumeric:( _isNumeric || _isInt), _isDate, mask: nvl(head.mask, ( _isNumeric?'0,0.000': _isInt ?'0,0':undefined ) ),
						clsssCell:nvl(head.clsssCell,'')+' '+(_isNumeric||_isDate?' text-nobr ':'')+' '+(_isNumeric?' text-right ':''),
					}
				})
			},
			tabHeadsVisible(){
				return this.tabHeads.filter((row)=>row.visible)
			},
			tabRows(){
				let  vm = this,
					isNumeric=[],
					isDate=[]
				return vm.items.map((element,i) => {
					let tmp={}
					if(vm.manBody)
						tmp = element
					else
						vm.tabHeads.forEach((head,j) =>{
							tmp[head.value] = vm.valFormat(element[head.value],head.type, head.replace, head._isNumeric, head.mask, head._isDate,)
						})
					return {...tmp, _id:i+1}
				})
			},
			getMainTableStyle(){
				let vm=this
				return {
					height:'calc(100% - 81px)'  ,
				}
			},
			getMainTableClass(){
				let vm=this
				return {
					"c-table":true,
					"tabFullHeight": vm.hideActions,
				}
			},
		},
		watch: {
			value (val, valOld) {
				let vm = this,
					tmp = val
				if( !(tmp.equals( vm.selectedValues) ) )
					vm.selectedValues=tmp
			},
		},
		components: {
			CLoading,
		},
		directives:{
			Ripple,
		},
		methods: {
			dblClickRow(e){
				let vm = this
				vm.$emit('dblclick:row', vm.value)
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
			selectRow (props) {
				let vm = this, 
					values=vm.selectedValues,
					lastSel=!!props.selected
				if(vm.selecttableTypes.indexOf(vm.typeSelect)==-1)
					return
				if(vm.typeSelect=='one')
					values = []
				if(!lastSel)
					values.push(props.item)
				else if(vm.typeSelect!='one')
					values=values.filter(row => {
						return row._id != props.item._id
					})
				vm.selectedValuesChanged(values)
			},
			toggleAll () {
				let vm=this, values=[]
				if (vm.values.length) 
					values = []
				else if(vm.typeSelect=='multy')
					values = vm.items.slice()
				vm.selectedValuesChanged(values)
			},
			selectedValuesChanged(values){
				let vm=this
				vm.$emit('input', values.map(row => {return {...vm.items[row._id-1], _id:row._id} } ))
			},
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=appTheme.checkBox||vm.checkBoxColor
		},
		//
	 	mounted: function (){	
			let vm=this
			vm.isMounted = true;
		},
	}
</script>
<style> 
	.c-table	{overflow-Y: auto}
	.c-table.tabFullHeight>div {height: 100%; width: 100%; overflow: auto; }
	.c-table.v-data-table__wrapper>div {height: 100%; width: 100%; overflow: auto; }
	table.v-table tbody td:first-child, 
	table.v-table tbody td:not(:first-child),
	table.v-table tbody th:first-child, 
	table.v-table tbody th:not(:first-child), 
	table.v-table thead td:first-child, 
	table.v-table thead td:not(:first-child), 
	table.v-table thead th:first-child, 
	table.v-table thead th:not(:first-child)	{padding: 2px !important;}
</style>