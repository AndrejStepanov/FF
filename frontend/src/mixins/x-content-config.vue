<script>
	import XFields from '@/mixins/x-fields'
	import XDialogsConfig from '@/mixins/x-dialogs-config'
	export default {
		data: () => ({	
			tablesConfig:{
				//main:{href:'api/testArms', method:'get', variable:'tabValues', loadingVar:'tabLoading',}
			},
			tablesConfigArr:[],
		}),
		watch: {
			tablesConfig(val, valOld){
				this.initTables( val)
			},
		},
		components: {
			CTable: () => import('@/components/c-table'), 
		},
		mixins: [
			XFields, XDialogsConfig
		],
		methods: {
			async retrieveDataTable( {name, data} ){
				let vm=this
				if(vm.tablesConfig[name]==  undefined )
					vm.$h.showMsg(  {...vm.$h.getErrDesc('wrongFuncEnterParam'), textParams:['retrieveDataTable', 'name',  name ] })
				await vm.$h.getDataTable ( vm.tablesConfig[name] , vm)
			},
			async initTables(config){
				let vm = this, tmp=[]
				vm.tablesConfigArr=[]
				for(let name in config ) 
					tmp.push({ variable:'', loadingVar:'', selectedVar:'', keyField:'', isAutoLoad: config[name].seqNum>0 , ...config[name], name})
				tmp.sort((prev, next) => prev.seqNum - next.seqNum)
				for( let i =0 ; i< tmp.length; i++){
					if (tmp[i].variable!='' && vm[tmp[i].variable]==undefined )
						vm.$h.showMsg( {...vm.$h.getErrDesc('wrongTableParam'), textParams:[tmp[i].name, 'variable', tmp[i].variable]}  )
					if (tmp[i].loadingVar!='' && vm[tmp[i].loadingVar]==undefined)
						vm.$h.showMsg( {...vm.$h.getErrDesc('wrongTableParam'), textParams:[tmp[i].name, 'loadingVar', tmp[i].loadingVar]}  )
					vm.tablesConfigArr.push(tmp[i])
				}
				vm.contentRefresh()
			},
			tableGetVar({table, param, title, mode}){
				let vm = this, tmp = null, tmpType = ''
				if( vm.tablesConfig[table] == undefined || vm.tablesConfig[table].selectedVar == undefined || vm[ vm.tablesConfig[table].selectedVar ]== undefined)
					return null
				tmp = vm[ vm.tablesConfig[table].selectedVar ]
				tmpType = vm.$h.typeOfObject(tmp)
				param=param||''
				if ( tmpType ==  'object' && param!='')
					return {[title||table]: tmp[param]}
				if ( tmpType ==  'array' ){
					if(mode=='one')
						tmp= tmp.length>0? tmp[0]:tmp						
					if(param!='')
						return {[title||table]: tmp.map(row=> row[param] ) }
				}
				return tmp
			},
			async contentRefresh(){
				let vm = this
				vm.tablesConfigArr.forEach(row=>{
					if (row.variable!='')
						vm[row.variable]=[]
					if (row.selectedVar!='' && row.keyField!='')
						vm[row.selectedVar]=[]
					if (row.isAutoLoad && row.loadingVar!='')
						vm[row.loadingVar]=true
				})
				for(let i=0; i< vm.tablesConfigArr.length; i++)
					if (vm.tablesConfigArr[ i ].isAutoLoad)
						await vm.retrieveDataTable({ name:vm.tablesConfigArr[ i ].name } )
				vm.tablesConfigArr.forEach(row=>{
					if (row.isAutoLoad && row.loadingVar!='')
						vm[row.loadingVar]=false
				})
			},
		},
	}
</script>