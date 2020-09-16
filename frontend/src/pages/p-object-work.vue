<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="$h.camelize($options.name)" :parentLayoutName="parentLayoutName"  >
		<template v-slot:second  >
			<div class='display--flex flex-direction--column max-height'>
				<v-text-field id="treeSearch" name="treeSearch" class="check-size flex--inherit" append-icon="search" v-model="treeSearch"  single-line :label="$vuetify.lang.t('$vuetify.system.simple.actions.search')" @keyup.enter="treeSearchSubmit"/>
				<v-btn block  small class="check-size accent flex--inherit" @click="openDialog(dialogsConfig.treeAdd.id)" > <v-icon>add</v-icon> {{ $vuetify.lang.t('$vuetify.system.simple.actions.add') }}</v-btn>
				<hr>
				<v-responsive class="overflow-y-auto flex--99" width = '100%'>
					<c-tree @item-click = "itemClick" textFieldName="tree_name" typeFieldName="tree_group"  socetHref="/api/socet_command" socetEvent="object.tree.by.root" socetChanel="channel.ObjTreeData" :iconDic="iconDic" app />
				</v-responsive>
			</div>
			<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
		</template>
		<template v-slot:third  >
			<H1>third</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
	</c-layouts-slots>

</template>
<script>
/*
		<template v-slot:dialogs>
			
		</template>
		*/
	import CLayoutsSlots from '../components/c-layouts-slots'
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
	import CTree from '../components/tree/c-tree'
	export default {
		name:'p-object-work',
		data: () => ({
			layoutsConfigs: { //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;
				name: 'first',  layout: 'vertical',  data:[
					{  name: 'second',		width:'270px', 	},
					{  name: 'third',						},
				]}, 
			layoutsCur:-1,
			treeSearch: '',
			iconDic:{'misc':'photo_library', 'object':'description', 'filter':'filter_list',  'input':'input', 'default':'folder_open',  },		
			dialogsConfig: {
				treeAdd:{
					id:-1,  title:"$vuetify.system.modals.treeAdd.title", module:'m-input-fields', 
					params:{ socetHref:"/data_command", socetEvent:"object.tree.add", treeId:{value:0}, }, 
				},
			},
		}),
		props:{
			parentLayoutName : {type:  String, default: 'main'},
		},
		computed:{
			layoutsConfigsCur(){
				return 	this.layoutsCur>-1 && this.layoutsConfigs[this.layoutsCur]!=undefined? this.layoutsConfigs[this.layoutsCur]:this.layoutsConfigs
			},
		},
		components: {
			CLayoutsSlots, 			CTree,
			MInputFields: (resolve) =>{ require(['../modules/m-input-fields.vue'], resolve) },
		},
		mixins: [
			XStore, XDialog,
		],
		methods: {
			itemClick(node) {
				this.dialogsConfig.treeAdd.params.treeId.value = node.model.id;
			},
			treeSearchSubmit () {
				console.log(this.treeSearch);
				return;
			},
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