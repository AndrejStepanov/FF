<template>
	<c-dialog :dialogId="dialogId" :widthOrig="dialogConfigGet.width" :heightOrig="dialogConfigGet.height" :buttons="dialogButtons" >
		<v-expansion-panels class="overXAutoLi" v-model="panel" multiple >
			<v-expansion-panel>
				<v-expansion-panel-header :style="'user-select: text;'">
					{{dialogParamsGet.msg.title}} : {{dialogParamsGet.msg.text}} <br> {{dialogParamsGet.msg.file}} ({{dialogParamsGet.msg.line}})
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-card>
						<v-card-text>
							<span v-for="obj in (JSON.parse(dialogParamsGet.msg.trace) )" v-bind:key="obj.id" class='traceLine' >
								{{obj.file}}({{obj.line}}): {{obj.class}} {{obj.type}} {{obj.function}}
							</span>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</c-dialog>
</template>

<script>
	import XStore from '../mixins/x-store'
	import XModal from '../mixins/x-modal'
	export default {
		name:'m-error-desc',
		data: () => ({
			inputsValid:true,
			panel: [0],
		}),
		props:{
			dialogId: {type: Number, required: true}, 
			dialogButtons: {type: Array, default: () =>{return [	
				{id:-1, title:'$vuetify.system.simple.actions.close', icon:'close', allig:'right', click:'dialogClose'}
			] }},
		},
		mixins: [
			XStore, XModal,
		],
		methods: {
		},
		created: function (){
		},
	}
</script>
<style>
	.overXAutoLi>li {overflow-x: auto; }
	.traceLine{clear: right;    display: block; font-size: 11px;}
</style>