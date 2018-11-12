<template>
	<v-dialog value = "true" :persistent="dialogConfigGet.persistent" no-click-animation >
		<c-drag-resize :isActive="dragActive" :isDraggable="dragDraggable" :isResizable="dragResizable" :preventActiveBehavior="dragActiveBehavior" :parentLimitation="dragLimitation" :sticks="dragSticks" :noLineStyle="dragNoLineStyle"
				:w="width" :h="height" @resizing="changeSize($event)"  :x="x" :y="y" :reInitEvent="dragReInitEvent">
			<v-toolbar slot='header'  color="primary" >
				<v-toolbar-side-icon/>
				<v-toolbar-title >{{ $vuetify.t(dialogConfigGet.title) }}</v-toolbar-title>
				<v-spacer/>
				<v-btn icon>
					<v-icon>more_vert</v-icon>
				</v-btn>
				<v-btn icon @click.native="dialogClose">
					<v-icon>clear</v-icon>
				</v-btn>
			</v-toolbar>
		
			<v-card :height="heightSlot" style="overflow-y: auto;">	
				<slot />
			</v-card>

			<v-layout row justify-center color="primary" >
				<v-flex xs12>
					<v-toolbar dense  color="primary" >		
						<v-btn v-for="row in buttonsLeft"   small v-bind:key="row.id" @click.native="buttonClick(row)" color="accent"  :disabled="row.disabled" > <v-icon v-if="row.icon!=''" >{{row.icon}}</v-icon>&nbsp;{{$vuetify.t(row.title)}}</v-btn>
						<v-spacer/>
						<v-btn  v-for="row in buttonsRight" small v-bind:key="row.id" @click.native="buttonClick(row)" color="accent" :disabled="row.disabled" > <v-icon v-if="row.icon!=''" >{{row.icon}}</v-icon>&nbsp;{{$vuetify.t(row.title)}}</v-btn>
					</v-toolbar>
				</v-flex>
			</v-layout>
		</c-drag-resize>
	</v-dialog>
</template>

<script>
	import XStore from '../mixins/x-store'
	import cDragResize from './c-drag-resize/c-drag-resize';
    export default {
		name:'c-dialog',
        data: () => ({
			heightSlot:'',
			dragReInitEvent:'',
		}),
		props:{
			dialogId: {type: Number, required: true}, 
			widthOrig: {type: Number, default: 500}, 
			heightOrig: {type: Number, default: 1000}, 
			buttons: {type: Array, default: () =>{return  [{id:1, title:'$vuetify.texts.simple.actions.close', icon:'close', allig:'right', click:'dialogClose', }] }},
			dragActive: {type: Boolean, default: true}, 
			dragDraggable: {type: Boolean, default: true}, 
			dragActiveBehavior: {type: Boolean, default: true}, 
			dragResizable: {type: Boolean, default: true}, 
			dragLimitation: {type: Boolean, default: false}, 
			dragSticks: {type: Array, default: () =>{return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']}}, //тягальщики
			dragNoLineStyle:{type: Boolean, default: true},
		},
		computed: {
			dialogConfigGet(){
				let vm=this
				return vm.dialogConfig(vm.dialogId)
			},
			buttonsLeft(){
				return this.buttons.filter(row =>  row.allig == 'left' )
			},
			buttonsRight(){
				return this.buttons.filter(row =>  row.allig != 'left' )
			},
			width(){
				return this.widthOrig>document.documentElement.clientWidth-100? document.documentElement.clientWidth-100:this.widthOrig;
			},
			height(){
				return this.heightOrig>document.documentElement.clientHeight-100? document.documentElement.clientHeight-100:this.heightOrig;
			},
			x(){
				return (document.documentElement.clientWidth-this.width)/2
			},
			y(){
				return (document.documentElement.clientHeight-this.height)/2
			},
		},
        components: {
            cDragResize
		},
		mixins: [
			XStore,
		],
		methods: {
            changeSize(newRect) {
				let vm=this
				vm.heightSlot = newRect.height-130+'';
			},
			buttonClick(button){
				let vm=this
				if(Array.isArray(button.click)  )
					button.click.forEach(row=>vm.buttonClickFunc(row));
				else
					vm.buttonClickFunc(button.click)
			},
			buttonClickFunc(event){
				if(event=='dialogClose')
					this.dialogClose();
				else
					this.$emit(event);
			},
			dialogClose(){
				this.dialogShowChange({id:this.dialogId, isShow:false})
			},
		},
		mounted: function (){
			this.changeSize({height:this.height,width:this.width})
		},
    }
</script>