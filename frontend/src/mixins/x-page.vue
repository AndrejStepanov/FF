<script>
	export default {
		data: () => ({
			inputsConfig:{
				/*treeAdd:[
					{code:'obj_level', 	name:'Вложенность', 	placeholder:'Уровень вложенности объекта', 		type:'LIST', 		nullable:0, column_size:30, sort_seq:1, services:{ given:{ name:'test.nsd.by.set', args:{set:'Уровень вложенности объекта' } } }  },
					{code:'tree_group', name:'Тип', 			placeholder:'Тип объекта', 						type:'LIST', 		nullable:0, column_size:30, sort_seq:2, services:{ given:{ name:'test.nsd.by.set', args:{set:'Тип объекта' } } }  },
					{code:'tree_desc', 	name:'Название',		placeholder:'Описание объекта', 				type:'INPUT',		nullable:0, column_size:30, sort_seq:3, max_len:25 },	
				],*/
			}	
		}),
		methods: {
		},
		created: function (){
			let vm=this
			for (let group in vm.inputsConfig){
				if(vm.$h.nvl(vm.inputsConfig[group].id,-1)==-1)
					vm.inputsConfig[group].id= vm.$h.getNewId()
				vm.paramConfigInit({ form: group , params:vm.inputsConfig[group]	})
			}
		},
	}
</script>