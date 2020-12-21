<template>
	<v-card class=' position-absolute-0 '>

		<v-card-title v-if="titleNeed" ref="title" class='noPadding     min-height-68px'>
			<h3 class="headline ml-2">{{$vuetify.lang.t(tableTitle)}}</h3> 
			<v-spacer/>
			<transition v-if="searchButton" name="searchButton-fade" mode="out-in"  >
				<v-tooltip  v-if="!filterShown" key="icon" bottom  > 
					<template v-slot:activator="{ on, attrs }">
						<v-btn   v-bind="attrs" v-on="on" text class=" mr-2" @click.stop="$emit('searchButtonClick'); filterShown=!filterShown" > 
							<v-badge v-if="searchText!=''" overlap dot accent >
								<v-icon>search</v-icon>
							</v-badge>
							<v-icon v-else>search</v-icon>
						</v-btn> 

					</template>
					<span>{{$vuetify.lang.t('$vuetify.system.actions.search') }}</span>
				</v-tooltip>
				<v-text-field  v-else  key="field"	v-model="searchText" dense :autofocus="filterShown" filled  :label="$vuetify.lang.t('$vuetify.system.actions.search')"	single-line	hide-details class="height-36px"
					prepend-inner-icon="search"  	append-icon="close"  @click:append.stop="filterShown=!filterShown; searchText=''" 	  multi-sort
					prepend-icon="arrow_right"  @click:prepend.stop="filterShown=!filterShown;" 
					
				/>
			</transition>
			<v-tooltip bottom v-if="fiterButton" > 
				<template v-slot:activator="{ on, attrs }">
					<v-btn   v-bind="attrs" v-on="on" text  class="  mr-2" @click.stop="$emit('fiterButtonClick')" ><v-icon>filter_list</v-icon></v-btn> 
				</template>
				<span>{{$vuetify.lang.t('$vuetify.system.labels.filter') }}</span>
			</v-tooltip>
			<v-menu v-if="exportPdf || exportExcel" >
				<template #activator="{ on: onMenu }">
					<v-tooltip bottom>
					<template #activator="{ on: onTooltip, attrs }">
						<v-btn v-bind="attrs" v-on="{ ...onMenu, ...onTooltip }" text  class="  mr-2" @click.stop="$emit('exportButtonClick')"  > <v-icon>cloud_download</v-icon></v-btn>
					</template>
					<span>{{$vuetify.lang.t('$vuetify.system.actions.export') }}</span>
					</v-tooltip>
				</template>
				<v-list>
					<v-list-item  v-if="exportPdf"  @click.stop="$emit('pdfButtonClick')"  >	<v-list-item-title> {{$vuetify.lang.t('$vuetify.system.labels.pdfFile') }} </v-list-item-title>		</v-list-item>
					<v-list-item  v-if="exportExcel" @click.stop="$emit('excelButtonClick')"  >	<v-list-item-title> {{$vuetify.lang.t('$vuetify.system.labels.excelFile') }} </v-list-item-title>		</v-list-item>
				</v-list>
			</v-menu>
			<v-tooltip bottom v-if="settingsButton" > 
				<template v-slot:activator="{ on, attrs }">
					<v-btn   v-bind="attrs" v-on="on" text  class="  mr-2" @click.stop="$emit('settingsButtonClick'); openDialog({dialog:'tableSettings'})" ><v-icon>settings</v-icon></v-btn> 
				</template>
				<span>{{$vuetify.lang.t('$vuetify.system.labels.settings') }}</span>
			</v-tooltip>
		</v-card-title>

		<v-data-table :value="value" @input="valueChanged" @click:row="clickRow" @dblclick:row="dblClickRow"  :headers ="tabHeadsVisible" :items ="tabRows" v-bind="vDataTablePropAsembled"
				:loading="loading" :search="searchText"  ref="table"	:class="getMainTableClass" :style="getMainTableStyle" :height="getMainTableHeight"  > <!--:pagination="pagination"	@update:pagination='updateTabFirstNum'-->
			<template  v-for="slotName in slotPassed"    v-slot:[slotName]="slotProps"  >
				<slot   :name="slotName" v-bind="slotProps" />
			</template>
		</v-data-table>
		<component v-for="(row, name) in dialogsShowen " :key="name" v-bind:is="row.config.component" :dialogLink="row.link"  />
	</v-card>
</template>

<script>	
	import {Ripple,} from 'vuetify/lib/directives'
	import XDialogsConfig from '@/mixins/x-dialogs-config'
	export default {
		name:'c-table',
		data: () => ({
			checkBoxColor:'white',//переопределяется в created
			firstNum:1,
			isMounted:false,
			filterShown:false,
			tableHeadManSettings:[],
			selecttableTypes:['one','multy'],
			searchText:'',
			blocksSize:{},
			dialogsConfig: {
				tableSettings:{
					id:-1,  title:"$vuetify.system.modals.tableSettings.title", component:'m-table-settings', height:480, width:900,
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
			keyField: {type:String,	default: '_sys_id'	},
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
				return {fixedHeader:true, dense:true, multiSort:true, headerKey:'value', itemKey:this.keyField , footerProps:{showFirstLastPage: true, }, ...this.vDataTableProp }
			},
			typeSelect(){return  this.vDataTablePropAsembled.singleSelect?'one': this.vDataTablePropAsembled.singleSelect===false?'multy':''	},			
			tabHeads(){
				let  vm = this,
					tmp = [vm.withRowNum?{value:'_sys_num', text:vm.$vuetify.lang.t('$vuetify.system.labels.numInOrder'), type:'int', classCell:'width-one-percent', sortable:true,}:{}]
				if(vm.tableHeadManSettings.find((head,i) => head.type==undefined )!=undefined)
					throw new Error('Всем элементам заголовка необходимо указывать поле type!')
				return  tmp.concat( vm.tableHeadManSettings).map((head,i) => {
					let isNumeric = !(head.type.match(/^numeric/i)==null),
						isDatetime=!(head.type.match(/^datetime/i)==null),
						isDate=!isDatetime && !(head.type.match(/^date/i)==null),
						isInt = !(head.type.match(/^int/i)==null)
					return {...head, visible:( head.visible===false?false:true ), sortable:( head.sortable===false?false:true ), 
						isNumeric:( isNumeric || isInt), isDate, isDatetime, mask: vm.$h.nvl(head.mask, ( isNumeric?'0.000': isInt ?'0':undefined ) ),
						classCell:vm.$h.nvl(head.classCell,'')+' '+(isNumeric||isDate?' text-nobr ':''),
					}
				})
			},
			tabHeadsVisible(){
				return this.tabHeads.filter( row=>row.visible===false? false:true )
			},
			tabRows(){
				let  vm = this
				return vm.items.map((element,i) => {
					let tmp=element
					vm.tabHeads.forEach(head =>{
						tmp[head.value] = vm.valFormat(element[head.value],head)
					})
					return {...tmp, [vm.vDataTablePropAsembled.itemKey]:i, _sys_num:i+1, }
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
			headers (val, valOld) {
				this.tableHeadManSettings=val
			},
		},
		components: {
			MTableSettings: () => import('@/modules/tableSettings/m-table-settings'), 
		},
		mixins: [
			XDialogsConfig,
		],
		directives:{
			Ripple,
		},
		methods: {
			dblClickRow(row, obj){
				let vm = this
				if( vm.typeSelect=='')
					return
				vm.$emit('dblclick:row', [obj.item])
			},
			clickRow(row, obj){
				let vm = this
				if( vm.typeSelect=='')
					return
				obj.select( !obj.isSelected )
			},
			valFormat(val, {replace, isNumeric, mask, isDate, isDatetime} ){//вполне себе может быть использована и извне
				let vm=this
				if( (val==undefined || val=='' || ( isNumeric && val==0) ) && vm.$h.nvl(replace) !='' )
					val=replace
				if(isDate)
					val =vm.$h.dateFormatNorm(val)
				if(isDatetime)
					val =vm.$h.dateFormat(val)
				if(isNumeric && vm.$h.nvl(mask) !='')
					val=vm.$h.numberFormat(val,mask)
				return val
			},
			valueChanged (props) {
				let vm = this
				vm.$emit('input', props )
			},
			tableSettings_getParams(){
				return {headers: this.tableHeadManSettings, }
			},
			tableSettings_finishDialog({todo}){				
				this.tableHeadManSettings=todo
			},
		},
		async created (){
			let vm=this
			vm.checkBoxColor=vm.$h.appTheme.checkBox||vm.checkBoxColor
			vm.tableHeadManSettings=vm.headers
			await vm.initDialogs(vm.dialogsConfig)
		},
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