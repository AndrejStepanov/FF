<template>
	<v-dialog value = "true" :persistent="dialogConfigGet.persistent" no-click-animation >
		<c-drag-resize :isActive="dragActive" :isDraggable="dragDraggable" :isResizable="dragResizable" :preventActiveBehavior="dragActiveBehavior" :parentLimitation="dragLimitation" :sticks="dragSticks" :noLineStyle="dragNoLineStyle"
				:w="width" :h="height" @resizing="changeSize($event)"  :x="x" :y="y" :reInitEvent="dragReInitEvent"> 
			<template v-if="!noHeader" #header  >
				<v-toolbar  dense color="primary" dark >
					<v-toolbar-title > {{ $vuetify.lang.t(dialogConfigGet.title) }}</v-toolbar-title>
					<v-spacer/>
					<v-btn icon x-small>
						<v-icon>more_vert</v-icon>
					</v-btn>
					<v-btn icon @click.native="dialogClose" x-small>
						<v-icon>clear</v-icon>
					</v-btn>
				</v-toolbar>
			</template>
			<template #default="{bodyDown}" >
				<v-card >	
					<v-card-text :height="heightSlot" class='pa-0' :style="{height:heightSlot, overflowY: 'auto'}">
						<slot />
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions @mousedown.self="bodyDown($event)"  >							
						<v-btn v-for="row in buttonsLeft"   small v-bind:key="row.id" @click.native="buttonClick(row)" color="accent"  :disabled="row.disabled" :loading="row.loading||false"  > <v-icon v-if="row.icon!=''" >{{row.icon}}</v-icon>&nbsp;{{$vuetify.lang.t(row.title)}}</v-btn>
						<v-spacer/>
						<v-btn  v-for="row in buttonsRight" small v-bind:key="row.id" @click.native="buttonClick(row)" color="accent" :disabled="row.disabled" :loading="row.loading||false" > {{$vuetify.lang.t(row.title)}}&nbsp;<v-icon v-if="row.icon!=''" >{{row.icon}}</v-icon></v-btn>
					</v-card-actions>
				</v-card>
			</template>
		</c-drag-resize>
	</v-dialog>
</template>

<script>
/*
По хъорошему - нужно дождаться когда онка начнут таскаться во вьютифи

				*/
	import XStore from '@/mixins/x-store'
	import cDragResize from '@/components/c-drag-resize/c-drag-resize';
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
			buttons: {type: Array, default: () =>{return  [{id:1, title:'$vuetify.system.simple.actions.close', icon:'close', allig:'right', click:'dialogClose', }] }},
			dragActive: {type: Boolean, default: true}, 
			dragDraggable: {type: Boolean, default: true}, 
			dragActiveBehavior: {type: Boolean, default: true}, 
			dragResizable: {type: Boolean, default: true}, 
			dragLimitation: {type: Boolean, default: false}, 
			dragSticks: {type: Array, default: () =>{return ['tl', 'tm-l', 'tr', 'mr-l', 'br', 'bm-l', 'bl', 'ml-l']}}, //тягальщики
			dragNoLineStyle:{type: Boolean, default: true},
			noHeader:{type: Boolean, default: false},
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
				return this.widthOrig>this.$vuetify.breakpoint.width-100? this.$vuetify.breakpoint.width-100:this.widthOrig;
			},
			height(){
				return this.heightOrig>this.$vuetify.breakpoint.height-100? this.$vuetify.breakpoint.height-120:this.heightOrig;
			},
			x(){
				return (this.$vuetify.breakpoint.width-this.width)/2
			},
			y(){
				return (this.$vuetify.breakpoint.height-this.height)/2
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
				vm.heightSlot = newRect.height-(vm.noHeader?0:130)+'px';
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