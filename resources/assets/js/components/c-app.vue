<template>
    <v-app  v-resize="onResize" >
		<c-head app ref="head" v-if="needHeader" :curentSystem='curentSystem' :dark="isPerefThemeDark" :light="isPerefThemeLight" :showLeft="panelLeftDrawer" :showRight="panelRightDrawer" :needLabel="needLabel" 
			:fixed="headFixed" :headHideOnScroll="headHideOnScroll" :headElevateOnScroll="headElevateOnScroll"/>
		<v-navigation-drawer app v-if="panelLeftDrawer" :dark="isPerefThemeDark" :light="isPerefThemeLight" v-model="panelLeftShowen" left  touchless :class="panelLeft.class" :width="panelLeftWidth">
			<slot name="panelLeft"/>
		</v-navigation-drawer>
		<v-navigation-drawer app v-if="panelRightDrawer" :dark="isPerefThemeDark" :light="isPerefThemeLight"  v-model="panelRightShowen" right  touchless :class="panelRight.class" :width="panelRightWidth">
			<slot name="panelRight"/>
		</v-navigation-drawer>
		<v-content ref='content' :style="getContentStyles" >
			<div ref='scrollArea'/>
			<slot v-if="!mainLayoutConfig" />
			<c-layouts v-else :name="layoutName" :size="$vuetify.breakpoint">
				<template  v-for="(slotName, index) in slotNames"    v-slot:[slotName] >
					<div :key="index">
						<slot  :name="slotName" />
					</div>
				</template>
			</c-layouts>
		</v-content>
		<c-footer v-if="needFooter" :dark="isPerefThemeDark" :light="isPerefThemeLight" />
		<c-msg-list   />
		<slot name="dialogs" />
		<component v-bind:is="dialogModule" v-if="dialogIsShowen(dialogIdOpened)" :dialogId="dialogIdOpened" />
    </v-app>
</template>

<script>	
	import XAuth from '../mixins/x-auth'
	import XStore from '../mixins/x-store'
	import XDialog from '../mixins/x-dialog'
    import CHead from '../components/c-head'
	import CFooter from '../components/c-footer'
	import CMsgList from '../components/c-msg-list'
    export default {
		name:'c-app',
		data:() => ({
			panelLeftShowen: false,
			panelRightShowen: false,
			needLabel: true,
		}),
		props:{
			curentSystem: {type:  String, default: ''},	
			layoutName : {type:  String, default: 'main'},	
			needFooter: {type:  Boolean, default: true},	
			needHeader: {type:  Boolean, default: true},	
			headFixed: {type:  Boolean, default: true},	
			needBgIm: {type:  Boolean, default: true},	
			dark: {type:  Boolean, default: false},	
			light: {type:  Boolean, default: false},	
			headHideOnScroll: {type:  Boolean, default: false},	
			headElevateOnScroll: {type:  Boolean, default: false},	
			panelLeft:{type: Object,  default: () => {return{ drawer:true, show:false, class:'', width:270, filter:false,} }}	,
			panelRight:{type: Object,  default: () => {return{ drawer:false, show:false, class:'', width:300, filter:false,} }}	,
		},
		computed:{
			isPerefThemeDark(){
				return this.dark && !this.light ? true : this.$vuetify.theme.dark? true: false
			},
			isPerefThemeLight(){
				return this.light && !this.dark ? true : this.$vuetify.theme.light? true: false
			},
			mainLayoutConfig(){
				return this.layoutByName(this.layoutName)
			},
			slotNames(){
				let vm=this
				if(vm.mainLayoutConfig==null)
					return[]
				return Object.keys(vm.layoutDescByHead(this.layoutName))
			},
			currentAvatar(){
				let vm=this
				return nvl(vm.profileAvatar(),"https://randomuser.me/api/portraits/men/85.jpg")
			},
			getContentStyles(){
				let vm=this//финт ушами, что бы основная область не прокручивалась
				return {
					height: vm.oneScreen?'100px':null, 
					//background:vm.needBgIm?"url('storage/bg.jpg')":null , 
					backgroundAttachment: 'fixed',
				}
			},
			panelLeftDrawer(){ return this.panelLeft.drawer || this.panelLeft.show || this.panelLeft.filter	},
			panelRightDrawer(){ return this.panelRight.drawer || this.panelRight.show || this.panelLeft.filter	},
			panelLeftWidth(){ return this.panelLeft.filter? 358 : nvl(this.panelLeft.width,270)  },
			panelRightWidth(){ return this.panelRight.filter? 358 : nvl(this.panelRight.width,300)  },
			authAva () {return this.profileUserName()==''?'account_circle':'launch'},
			authItems(){
					return this.profileUserName()==''?null: [
					{ link: '$vuetify.texts.main.links.mainPage', 			icon: 'home', 					href:'\\user' },
					{ link: '$vuetify.texts.main.links.prodList', 			icon: 'library_books', 			href:'\\prodList'  },
				]
			},
		},
		components: {
			CHead, CFooter,CMsgList, 
			MInputFields: (resolve) => require(['../modules/m-input-fields.vue'], resolve),
			CLayouts: (resolve) => require(['./c-layouts.vue'], resolve),
		},
		mixins: [
			XStore,XDialog,XAuth,
		],
		methods: {
			authChange(){
				let vm=this
				if (vm.profileUserName()=='')
					vm.$root.$emit('systemLogin')
				else
					vm.$root.$emit('systemLogout')
			},
			onResize () {
				let vm=this,
					dxWidth = 0,
					dxHeight=0
				if(vm.mainLayoutConfig==null)// елси режим полотенца, то выходим
					return
				document.querySelectorAll('nav').forEach(el=> { if(!el.classList.contains('v-navigation-drawer--close') ) dxWidth+=el.offsetWidth; /*dxHeight+=el.offsetHeight;*/ } )
				document.querySelectorAll('footer, header').forEach(el=> { dxHeight+=el.offsetHeight; } )
				document.querySelectorAll('html').forEach(el=> { if (getComputedStyle( el, null ).overflowY=='scroll') dxWidth+=17; } )
				vm.layoutSizePxRecalc( {head:vm.layoutName, parentSizePx:{width: window.innerWidth-dxWidth, height: window.innerHeight-dxHeight } } )
			},
		},
		created: function (){
			let vm=this
			vm.panelLeftShowen= ['xs','sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1? false: nvl(vm.panelLeft.show,false)
			vm.panelRightShowen=['xs','sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1? false: nvl(vm.panelRight.show,false)
			vm.$root.$on('headDrawerLeftClick', (obj)=>{
				vm.panelLeftShowen=!vm.panelLeftShowen
			}); 
			vm.$root.$on('headDrawerRightClick', (obj)=>{
				vm.panelRightShowen=!vm.panelRightShowen
			});
			vm.$root.$on('openAuthDialog', (obj)=>{
				vm.dialogSelect(vm.dialogsConfig.authLogin.id)
				vm.dialogShowChange({name:"authLogin", isShow:true})
			});
		},
		mounted() {
			let vm=this
			vm.observer =  new IntersectionObserver(entries=>vm.needLabel= entries[0].intersectionRatio > 0);
			vm.observer.observe(vm.$refs.scrollArea);
			this.onResize()
		},
    }
</script>

<style lang="scss">
</style>