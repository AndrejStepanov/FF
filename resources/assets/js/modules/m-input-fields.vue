<template>
	<c-dialog :dialogId="dialogId" :maxWidth="maxWidth" :height="height">
		<c-input-cols  :data="data" :dialogId="dialogId"  />
	</c-dialog>
</template>

<script>
	import CDialog from '../components/c-dialog';
	import CInputCols from '../components/c-input-cols';
	import {mapActions} from 'vuex'

	export default {
		name:'m-input-fields',
		data: () => ({
			todo:'',
			data:[]
		}),
		computed: {
			dataNsd() {
				return [
					{id:1, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:1,  },
					{id:2, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:2,  },
					{id:3, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:3,  },
					{id:4, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:4,  },
					{id:5, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:5,  },
					{id:6, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:6,  },
					{id:7, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:7,  },
					{id:8, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:8,  },
					{id:9, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:9,  },
					{id:10, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:10,  },
					{id:11, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:11,  },
					{id:12, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:12,  },
					{id:13, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:13,  },
					{id:14, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:14,  },
					{id:15, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:15,  },
					{id:16, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:16,  },
					{id:17, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:17,  },
					{id:18, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:18,  },
					{id:19, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:19,  },
					{id:20, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:20,  },
					{id:21, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:21,  },
					{id:22, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:22,  },
					{id:23, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:23,  },
					{id:24, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:24,  },
					{id:25, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:25,  },
					{id:26, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:26,  },
					{id:27, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:27,  },
					{id:28, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:28,  },
					{id:29, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:29,  },
					{id:30, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:30,  },
					{id:31, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:31,  },
					{id:32, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:32,  },
					{id:33, form:'object-tree-add', column_code:'tree_group', column_name:'Тип', 		column_desc:'Тип объекта', 		proc_type:'AUTO::LIST', isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:33,  },
					{id:34, form:'object-tree-add', column_code:'tree_desc', column_name:'Название', 	column_desc:'Описание объекта', proc_type:'MAN',		isNull:'N', column_type:'String', column_size:30, css_class:'', sort_seq:34,  },
				]
			},
		},
		props:{
			params: {type: Object, required: true},
			formName: {type: String, default: ''}, 
			eventName: {type: String, default: ''}, 
			dialogTitle: {type: String, default: 'Ввод параметров'}, 
			dialogId: {type: Number, required: true}, 
			maxWidth: {type: Number, default: 500}, 
			height: {type: Number, default: 200}, 
		},
		components: {
			CDialog,CInputCols,
		},
		methods: {
			...mapActions({
				dialogInit:'dialogInit',
			})
		},
		created: function (){
			let vm=this
			vm.dialogInit({daiologId:vm.dialogId, daiologTitle:vm.dialogTitle})
			let dataNew = vm.dataNsd
			dataNew=dataNew.filter(row =>  row.form == vm.formName ).sort( (a, b) =>{window._Fun.sort(a, b, 'sort_seq', 'sort_seq')});
			dataNew.forEach((row )=>{ vm.data.push(row) });
		},
	}
</script>