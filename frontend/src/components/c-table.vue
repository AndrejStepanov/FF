<template>
	<v-card class=' position-absolute-0 '>

		<v-card-title v-if="titleNeed" ref="title" class='noPadding     min-height-68px'>
			<h3 class="headline ml-2">{{$vuetify.lang.t(tableTitle)}}</h3> 
			<v-spacer/>
			<transition v-if="searchButton" name="searchButton-fade" mode="out-in"  >
				<v-tooltip  v-if="!filterShown" key="icon" bottom  > 
					<template v-slot:activator="{ on, attrs }">
						<v-btn   v-bind="attrs" v-on="on" text class=" mr-2" @click="$emit('searchButtonClick'); filterShown=!filterShown" > 
							<v-badge v-if="searchText!=''" overlap dot accent >
								<v-icon>search</v-icon>
							</v-badge>
							<v-icon v-else>search</v-icon>
						</v-btn> 

					</template>
					<span>{{$vuetify.lang.t('$vuetify.system.simple.actions.search') }}</span>
				</v-tooltip>
				<v-text-field  v-else  key="field"	v-model="searchText" dense :autofocus="filterShown" filled  :label="$vuetify.lang.t('$vuetify.system.simple.actions.search')"	single-line	hide-details class="height-36px"
					prepend-inner-icon="search"  	append-icon="close"  @click:append="filterShown=!filterShown; searchText=''" 	  multi-sort
					prepend-icon="arrow_right"  @click:prepend="filterShown=!filterShown;" 
					
				/>
			</transition>
			<v-tooltip bottom v-if="fiterButton" > 
				<template v-slot:activator="{ on, attrs }">
					<v-btn   v-bind="attrs" v-on="on" text  class="  mr-2" @click="$emit('fiterButtonClick')" ><v-icon>filter_list</v-icon></v-btn> 
				</template>
				<span>{{$vuetify.lang.t('$vuetify.system.simple.labels.filter') }}</span>
			</v-tooltip>
			<v-menu v-if="exportPdf || exportExcel" >
				<template #activator="{ on: onMenu }">
					<v-tooltip bottom>
					<template #activator="{ on: onTooltip, attrs }">
						<v-btn v-bind="attrs" v-on="{ ...onMenu, ...onTooltip }" text  class="  mr-2" @click="$emit('exportButtonClick')"  > <v-icon>cloud_download</v-icon></v-btn>
					</template>
					<span>{{$vuetify.lang.t('$vuetify.system.simple.actions.export') }}</span>
					</v-tooltip>
				</template>
				<v-list>
					<v-list-item  v-if="exportPdf"  @click="$emit('pdfButtonClick')"  >	<v-list-item-title> {{$vuetify.lang.t('$vuetify.system.simple.labels.pdfFile') }} </v-list-item-title>		</v-list-item>
					<v-list-item  v-if="exportExcel" @click="$emit('excelButtonClick')"  >	<v-list-item-title> {{$vuetify.lang.t('$vuetify.system.simple.labels.excelFile') }} </v-list-item-title>		</v-list-item>
				</v-list>
			</v-menu>
			<v-tooltip bottom v-if="settingsButton" > 
				<template v-slot:activator="{ on, attrs }">
					<v-btn   v-bind="attrs" v-on="on" text  class="  mr-2" @click="$emit('settingsButtonClick'); openDialog({name:'tableSettings'})" ><v-icon>settings</v-icon></v-btn> 
				</template>
				<span>{{$vuetify.lang.t('$vuetify.system.simple.labels.settings') }}</span>
			</v-tooltip>
		</v-card-title>

		<v-data-table :value="selectedValues" @input="selectRow" @dblclick="dblClickRow"  :headers ="tabHeadsVisible" :items ="tabRows" v-bind="vDataTablePropAsembled"
				:loading="loading" :search="searchText"  ref="table"	:class="getMainTableClass" :style="getMainTableStyle" :height="getMainTableHeight"  > <!--:pagination="pagination"	@update:pagination='updateTabFirstNum'-->
			<template  v-for="slotName in slotPassed"    v-slot:[slotName]="slotProps"  >
				<slot   :name="slotName" v-bind="slotProps" />
			</template>
		</v-data-table>
		<component v-bind:is="dialogModule" @input="saveDialog" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
	</v-card>
</template>

<script>
/*

			<v-tooltip bottom v-if="exportPdf" > 
				<template v-slot:activator="{ on, attrs }">
					<v-btn   v-bind="attrs" v-on="on" text  class="  mr-2" @click="$emit('printButtonClick')" > <v-icon>print</v-icon></v-btn> 
				</template>
				<span>{{$vuetify.lang.t('$vuetify.system.simple.actions.print') }}</span>
			</v-tooltip>
			<v-tooltip bottom v-if="exportExcel" > 
				<template v-slot:activator="{ on, attrs }">
					<v-btn   v-bind="attrs" v-on="on" text  class="  mr-2" @click="$emit('exportButtonClick')" > <v-icon>table_chart</v-icon></v-btn> 
				</template>
				<span>{{$vuetify.lang.t('$vuetify.system.simple.actions.export') }}</span>
			</v-tooltip>

			<template #progress>
				<c-loading slot="progress" />
			</template>
			<template #no-data>
				<tr>
					<td colspan="99" class="text-xs-center">{{loading? $vuetify.lang.t(dataLoadingText) : $vuetify.lang.t(noResultsText) }}</td>
				</tr>
			</template>
				import CLoading from '../components/c-loading'

			<template v-if="noVuetifyHead && manHead" #header="props"  >
				<slot name="header" :props="props"/>
			</template>
			<template #item="props">
				<template v-if="manBody" >
					<slot name="item" :item="props.item" :index="props.index" :selected="props.selected" :expanded="props.expanded" />
				</template>
				<template v-else >			
					<tr :active="props.selected" @click="selectRow(props)" @dblclick="dblClickRow" :class="{'v-data-table__selected':props.isSelected}">
						<td	v-if="vDataTablePropAsembled.showSelect" 														>	<v-simple-checkbox	:value="props.isSelected"  @click="selectRow(props)" @dblclick="dblClickRow" />		</td><!--<v-checkbox	:input-value="props.selected" :color="checkBoxColor"	hide-details /> убрал из-за того что синхронизация не хило так тормозит -->
						<td	v-for="header in tabHeadsVisible"	:key="header.value" 	:class="header.clsssCell"	>	{{props.item[header.value]}}			</td>
					</tr>
				</template>
			</template>

			*/

	import {Ripple,} from 'vuetify/lib/directives'
	import XDialog from '../mixins/x-dialog'
	export default {
		name:'c-table',
		data: () => ({
			checkBoxColor:'white',//переопределяется в created
			firstNum:1,
			isMounted:false,
			filterShown:false,
			selectedValues:[],
			tableHeadManSettings:[],
			selecttableTypes:['one','multy'],
			searchText:'',
			blocksSize:{},
			dialogsConfig: {
				tableSettings:{
					id:-1,  title:"$vuetify.system.modals.tableSettings.title", module:'m-table-settings', height:480, width:900,
					params:{ headers:null}, 
				},
			},
		}),
		props:{			
			manHead:{type:Boolean,	default: false	},
			manBody:{type:Boolean,	default: false	},
			manProgress:{type:Boolean,	default: false	},
			noVuetifyHead: {type:Boolean,	default: true	},
			searchButton:{type:Boolean,	default: false	},
			fiterButton:{type:Boolean,	default: false	},
			exportPdf:{type:Boolean,	default: false	},
			exportExcel:{type:Boolean,	default: false	},
			settingsButton:{type:Boolean,	default: false	},
			loading:{type:Boolean,	default: false	},
			tableTitle: {type:String,	default: ''	},
			withRowNum:{type:Boolean,	default: false	},
			height:{type: Number},
			layoutSize: {type: Object, default: () => {} },
			//взято из v-data-table
			//pagination: {type: Object,  default: () => {} },
			vDataTableProp: {type: Object },
			headers: {type: Array,	 require:true	},
			items: {type: Array,		default: () => []	},
			dataLoadingText: {type: String,	default: '$vuetify.dataLoadingText'	},
			noResultsText: {type: String,	default: '$vuetify.noDataText'	},
			value: {type: Array,	default: () => []	},
		},	
		computed: {
			slotPassed() {
				let vm = this,tmp=[]
				for (let name in vm.$scopedSlots)
					tmp.push(name)
				return tmp
			},
			titleNeed(){
				return this.tableTitle!='' || this.searchButton || this.fiterButton || this.exportPdf || this.exportExcel
			},
			vDataTablePropAsembled(){
				return {fixedHeader:true, dense:true, multiSort:true, headerKey:'value', itemKey: '_id',  footerProps:{showFirstLastPage: true, }, ...this.vDataTableProp }
			},
			typeSelect(){return  this.vDataTablePropAsembled.singleSelect?'one': this.vDataTablePropAsembled.singleSelect===false?'multy':''	},			
			tabHeads(){
				let  vm = this,
					tmp = [vm.withRowNum?{value:'_id', text:vm.$vuetify.lang.t('$vuetify.system.simple.labels.numInOrder'), type:'int', clsssCell:'width-one-percent', sortable:true,}:{}]
				if(vm.headers.find((head,i) => head.type==undefined )!=undefined)
					throw new Error('Всем элементам заголовка необходимо указывать поле type!')
				return  tmp.concat( vm.headers).map((head,i) => {
					let _isNumeric = !(head.type.match(/^numeric/i)==null),
						_isDate=!(head.type.match(/^date/i)==null),
						_isInt = !(head.type.match(/^int/i)==null)
					return {...head, visible:( head.visible===false?false:true ), sortable:( head.sortable===true?true:false ), 
						_isNumeric:( _isNumeric || _isInt), _isDate, mask: vm.$h.nvl(head.mask, ( _isNumeric?'0.000': _isInt ?'0':undefined ) ),
						clsssCell:vm.$h.nvl(head.clsssCell,'')+' '+(_isNumeric||_isDate?' text-nobr ':''),
					}
				})
			},
			tabHeadsVisible(){
				return this.tableHeadManSettings.filter( row=>row.visible===false? false:true )
			},
			tabRows(){
				let  vm = this
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
				let vm = this,
					dx = vm.titleNeed? 81 : 0 + vm.dx
				return {
					height:'calc(100% - '+dx+'px)' ,
				}
			},
			getMainTableHeight(){
				return this.vDataTableProp.hideDefaultFooter? '100%':'calc(100% - 60px)'
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
			headers (val, valOld) {
				this.tableHeadManSettings=val
			},
		},
		components: {
			MTableSettings: (resolve) =>{ require(['../modules/m-table-settings.vue'], resolve) },
		},
		mixins: [
			XDialog,
		],
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
					val =vm.$h.dateFormat(val)
				if(isNumeric)
					val=vm.$h.numberFormat(val,mask)
				return val
			},
			selectRow (props) {
				console.log(props);
				let vm = this, 
					values=vm.selectedValues
				if(vm.selecttableTypes.indexOf(vm.typeSelect)==-1)
					return
				if(vm.typeSelect=='one')
					values = []
				if(props[0]!= undefined )
					if(!props[0].selected)
						props.forEach(row=> values.push(row) )
					else if(vm.typeSelect!='one')
						values=values.filter(row => props.find(sel=> row._id != sel._id  )==undefined)
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
			tableSettings_getParams(){
				return {headers: this.tableHeadManSettings}
			},
			tableSettings_saveDialog(payload){
				this.tableHeadManSettings=payload
			},
		},
		created: function (){
			let vm=this
			vm.checkBoxColor=vm.$h.appTheme.checkBox||vm.checkBoxColor
			vm.tableHeadManSettings=vm.headers
		},
		//
		mounted: function (){	
			let vm=this
			vm.isMounted = true
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
	.height-36px						{height: 36px;}
	.min-height-68px						{    min-height: 68px;}
	.searchButton-fade-enter-active		{ 	transition: all .3s ease;	}
	.searchButton-fade-leave-active 	{	transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);	}
	.searchButton-fade-enter, 
	.searchButton-fade-leave-to 		{	transform: translateX(10px);	opacity: 0;	}
</style>