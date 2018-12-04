<template>
    <v-app dark >
		<c-head ref="head" :curentSystem='curentSystem' :showLeft="panelLeftDrawer" :showRight="panelRightDrawer"/>
		<v-content ref='content' :style="getContentStyles">
			<v-navigation-drawer v-if="panelLeftDrawer" fixed v-model="panelLeftShowen" left :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelLeft.class" :width="panelLeftWidth">
				<slot name="panelLeft"/>
			</v-navigation-drawer>
			<v-navigation-drawer v-if="panelRightDrawer" fixed v-model="panelRightShowen" right :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelRight.class" :width="panelRightWidth">
				<slot name="panelRight"/>
			</v-navigation-drawer>
			<slot v-if="!mainPanelReq" />
			<c-layouts v-else :config="mainPanelConfig">
				<div  v-for="(slotName, index) in slotNames" :key="index"   :slot="slotName" >
					<slot :name="slotName" />
				</div>
			</c-layouts>
		</v-content>
		<c-footer :fixed="mainPanelReq"/>
		<c-msg-list />
		<slot name="dialogs" />
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
    </v-app>
</template>

<script>	
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
    import CHead from '../components/c-head'
	import CFooter from '../components/c-footer'
	import CMsgList from '../components/c-msg-list'
    export default {
		name:'c-app',
		data:() => ({
			dialogsConfig: {
				auth:{id: getNewId(),  module:'m-input-fields',  name:"auth-login", title:"$vuetify.texts.modals.auth.title", 	params:{ socetHref:"/login", socetEvent:"auth.login"}, }
			},
			panelLeftShowen: false,
			panelRightShowen: false,
			slotNamesCalc:[],
		}),
		props:{
			curentSystem: {type:  String, required: true},	
			panelLeft:{type: Object,  default: () => {return{ drawer:false, show:false, class:'', width:300, filter:false,} }}	,
			panelRight:{type: Object,  default: () => {return{ drawer:false, show:false, class:'', width:300, filter:false,} }}	,
			mainPanelConfig: {type: Object,  default: () => {return null/*{ //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				name: 'first',   width:'100%',	height:'100%',  layout: 'vertical', resizable:false , data:[
					{  name: 'second',   width:'50%',	height:'100%',  layout: 'horizontal'},
					{  name: 'third',   width:'100%',	height:'100%',  layout: 'horizontal'},
				]}*/}
			}, 
		},
		computed:{
			slotNames(){
				let vm=this
				if(vm.mainPanelConfig==null)
					return[]
				vm.calcSlotNames(vm.mainPanelConfig)
				return vm.slotNamesCalc
			},
			getContentStyles(){
				let vm=this
				if(vm.oneScreen)//финт ушами, что бы основная область не прокручивалась
					return {height: '100px' ,}
				else	
					return {  }
			},
			panelLeftDrawer(){ return this.panelLeft.drawer || this.panelLeft.show || this.panelLeft.filter	},
			panelRightDrawer(){ return this.panelRight.drawer || this.panelRight.show || this.panelLeft.filter	},
			panelLeftWidth(){ return this.panelLeft.filter? 358 : this.panelLeft.width  },
			panelRightWidth(){ return this.panelRight.filter? 358 : this.panelRight.width  },
			mainPanelReq(){ return this.mainPanelConfig==null}
		},
        components: {
			CHead, CFooter,CMsgList, 
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
			CLayouts: (resolve) => require(['./c-layouts.vue'], resolve),
		},
		mixins: [
			XStore,XDialog,
		],
		methods: {
			calcSlotNames(obj){
				let vm=this
				vm.slotNamesCalc.push(obj.name)
				if(obj.data!=undefined && obj.data.length )
					obj.data.forEach(row => {
						vm.calcSlotNames(row)
					});
			},
		},
		created: function (){
			let vm=this
			vm.panelLeftShowen=vm.panelLeft.show
			vm.panelRightShowen=vm.panelRight.show
			vm.$root.$on('headDrawerLeftClick', (obj)=>{
				vm.panelLeftShowen=!vm.panelLeftShowen
			}); 
			vm.$root.$on('headDrawerRightClick', (obj)=>{
				vm.panelRightShowen=!vm.panelRightShowen
			});
			vm.$root.$on('openAuthDialog', (obj)=>{
				vm.dialogSelect(vm.dialogsConfig.auth.id)
				vm.dialogShowChange({name:"auth-login", isShow:true})
			});	
			
		},
    }
</script>

<style lang="scss">
</style>