<template>
    <v-app dark>
		<c-head ref="head" :curentSystem='curentSystem' :showLeft="panelLeftDrawer" :showRight="panelRightDrawer"/>
		<v-content>
			<v-navigation-drawer v-if="panelLeftDrawer" fixed v-model="panelLeftShowen" left :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelLeftClass" :width="panelLeftWidth">
				<slot name="panelLeft"/>
			</v-navigation-drawer>
			<v-navigation-drawer v-if="panelRightDrawer" fixed v-model="panelRightShowen" right :clipped="$vuetify.breakpoint.width > 1264"  app :class="panelRightClass" :width="panelRightWidth">
				<slot name="panelRight"/>
			</v-navigation-drawer>
			<slot />
		</v-content>		
		<c-footer />
		<c-msg-list />
		
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened"/>
    </v-app>
</template>

<script>
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
    import CHead from '../components/c-head';
	import CFooter from '../components/c-footer';
    import CMsgList from '../components/c-msg-list';

    export default {
		data:() => ({
			dialogsConfig: {
				auth:{id: getNewId(),  module:'m-input-fields',  name:"auth-login", title:"$vuetify.texts.modals.auth.title", 	params:{ socetHref:"/login", socetEvent:"auth.login"}, }
			},
			panelLeftShowen: false,
			panelRightShowen: false,
		}),
		props:{
			curentSystem: {type:  String, required: true},
			authHrefBack: {type:  String},			
			panelLeftDrawer: {type:  Boolean,  default: false},
			panelLeftShow: {type:  Boolean,  default: false},
			panelLeftClass: {type:  String,  default: ''},
			panelLeftWidth: {type:  Number | String,  default: 300},
			panelRightDrawer: {type:  Boolean,  default: false},
			panelRightShow: {type:  Boolean,  default: false},
			panelRightClass: {type:  String,  default: ''},
			panelRightWidth: {type:  Number | String,  default: 300},
		},
        components: {
			CHead, CFooter,CMsgList,
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
		},
		mixins: [
			XStore,XDialog,
		],
		created: function (){
			let vm=this
			vm.panelLeftShowen=vm.panelLeftShow
			vm.panelRightShowen=vm.panelRightShow
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