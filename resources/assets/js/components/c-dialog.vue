<template>
	<v-dialog v-model="showDialog" :persistent="dialogPersistent(dialogId)"  >
		<vue-drag-resize :isActive="dragActive" :isDraggable="dragDraggable" :isResizable="dragResizable" :parentLimitation="dragLimitation" 
			:w="maxWidth" :h="height" @resizing="changeSize($event)" :z=10 :x="x" :y="y" >
			<v-toolbar  color="primary" >
				<v-toolbar-side-icon/>
				<v-toolbar-title >{{dialogTitle(dialogId)}}</v-toolbar-title>
				<v-spacer/>
				<v-btn icon>
					<v-icon>more_vert</v-icon>
				</v-btn>
				<v-btn icon @click.native="showDialog = false">
					<v-icon>clear</v-icon>
				</v-btn>
			</v-toolbar>
		
			<v-card :height="heightSlot" style="overflow: auto;">	
				<slot />
			</v-card>

			<v-layout row justify-center color="primary" >
				<v-flex xs12>
					<v-card dark color="primary">
						<v-card-text class="px-0">			
							<v-btn color="accent" @click="test" >Open Dialog 1</v-btn>
							<v-btn color="accent" >Open Dialog 2</v-btn>
							<v-btn color="accent" >Open Dialog 3</v-btn>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</vue-drag-resize>
	</v-dialog>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	import vueDragResize from 'vue-drag-resize';
    export default {
		name:'c-dialog',
        data: () => ({
			heightSlot:'',
			x:0,
			y:0,
		}),
		props:{
			dialogId: {type: Number, required: true}, 
			maxWidth: {type: Number, default: 500}, 
			height: {type: Number, default: 200}, 
			dragActive: {type: Boolean, default: false}, 
			dragDraggable: {type: Boolean, default: true}, 
			dragResizable: {type: Boolean, default: true}, 
			dragLimitation: {type: Boolean, default: false}, 
		},
		computed: {
			showDialog:{
				get(){return this.$store.getters.dialogIsShow(this.dialogId)},
				set(value){
					this.$store.dispatch('dialogShowChange',{daiologId_:this.dialogId, isShow:value}) 
					if(!value)
						this.$root.$emit('dialogClose'+this.dialogId);
				},
			},
			...mapGetters({
				dialogTitle: 'dialogTitle',
				dialogPersistent: 'dialogPersistent'
			}),
		},
		methods: {
            changeSize(newRect) {
				let vm=this
				vm.heightSlot = newRect.height-145+'';
			},
			test(){
				console.log(123);
			},
		},
        components: {
            vueDragResize
		},
		created: function (){
			let vm=this
			vm.heightSlot = vm.height-145+''
			vm.x=(document.documentElement.clientWidth-vm.maxWidth)/2
			vm.y=(document.documentElement.clientHeight-vm.height)/2
		},
    }
</script>