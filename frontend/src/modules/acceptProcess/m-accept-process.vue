<template>
	<c-dialog ref='dialog' :dialogLink="dialogLink" :widthOrig="modalSize.width" :heightOrig="modalSize.height" :buttons="compButtonsGet" >
		<p style="font-weight: bold;    padding-top: 20px;    text-align: center;" v-html="text" />
	</c-dialog>
</template>

<script>
	import XModal from '@/mixins/x-modal'
	export default {
		name:'m-accept-process',
		data: () => ({
			paramsForm:'',
			buttonsConfig: {
				close: 	{title:'$vuetify.system.actions.close',		icon:'close',					 allig:'right', },
				save: 	{title:'$vuetify.system.actions.accept', 	icon:'check_circle_outline',  	 allig:'right', }, 
			},
			text:'',
		}),
		props:{
		},
		computed: {
		},
		components: {
		},
		mixins: [
			XModal,
		],
		methods: {
			async save_click(){
				let vm=this, todo={}, response={}
				try {
					await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:true, compLock:true} )
					todo={...vm.dialogParamsGet.todoExt, socetEvent:vm.dialogParamsGet.socetEvent}
					if (! await vm.modalCheckFuncs(todo))
						return await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} )
					if	( ['patch', 'delete'].indexOf(vm.dialogParamsGet.method)!=-1  )
						if( vm.$h.typeOfObject(vm.dialogParamsGet.id) ==  'array'  )
								todo.id=vm.dialogParamsGet.id
							else 
								todo.id=[vm.dialogParamsGet.id]
					todo = await vm.modalPrepereFuncs(todo)
					console.log(todo)
					if(vm.$h.nvl(vm.dialogParamsGet.href)!='' && vm.$h.nvl(vm.dialogParamsGet.method)!='')
						response = await vm.$h.sendRequest({href:vm.dialogParamsGet.href, method:vm.dialogParamsGet.method, data:todo, hrefBack:vm.dialogParamsGet.hrefBack, headers:vm.dialogParamsGet.headers })
					await vm.modalFinishFuncs({todo, response})
				}
				finally { await vm.compButtonSetLoading({comp:vm.componentName,button:'save',value:false, compLock:true} ) }
			},
		},
		created: function (){
			let vm=this
			vm.text= vm.$vuetify.lang.t(vm.dialogParamsGet.text  )
			let workSize= {
					height: Math.min( Math.abs(vm.$h.nvl(vm.dialogConfigGet.height,9999)), parseInt(vm.$vuetify.breakpoint.height) -120/*край*/, 500), 
					width: Math.min(  Math.abs(vm.$h.nvl(vm.dialogConfigGet.width,9999)), parseInt(vm.$vuetify.breakpoint.width) -100/*край*/, 500),
				},
				additionSize={height:125, width: 32},
				dialogTitleWidth = Math.min( vm.$h.nvl(vm.$vuetify.lang.t(vm.dialogConfigGet.title),'').length*14+20/*buttons*/ , workSize.width),
				width = Math.max(dialogTitleWidth,  Math.min( vm.text.length*9, workSize.width)),
				height= Math.min( (vm.text.length*9/width )*9+20, workSize.height)
			console.log(dialogTitleWidth,   vm.text.length*9, workSize.width);
			vm.modalHeight= vm.dialogConfigGet.height>0 ? vm.dialogConfigGet.height : height + additionSize.height 
			vm.modalWidth= vm.dialogConfigGet.width>0 ? vm.dialogConfigGet.width : width
		},
	}
</script>