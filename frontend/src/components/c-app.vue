<template>
	<v-app  v-resize.quiet="onResize" >
		<c-head app ref="head" v-if="needHeader"  :dark="isPerefThemeDark" :light="isPerefThemeLight" :showLeft="panelLeftDrawer" :showRight="panelRightDrawer" :needLabel="needLabel" 
			:fixed="headFixed" :headHideOnScroll="headHideOnScroll" :headElevateOnScroll="headElevateOnScroll"/>
		<v-navigation-drawer app v-if="panelLeftDrawer" :dark="isPerefThemeDark" :light="isPerefThemeLight" v-model="panelLeftShowen" left  touchless :class="panelLeft.class" :width="panelLeftWidth" :color="panelLeft.color">
			<slot name="panelLeft"/>
			<template v-if="panelLeft.gradient!=''" v-slot:img="props">
				<v-img :gradient="panelLeft.gradient" v-bind="props"	/>
			</template>
			<template v-if="panelLeft.slotAppend" v-slot:append>
				<slot name="panelLeftAppend"  />
			</template>
		</v-navigation-drawer>
		<v-navigation-drawer app v-if="panelRightDrawer" :dark="isPerefThemeDark" :light="isPerefThemeLight"  v-model="panelRightShowen" right  touchless :class="panelRight.class" :width="panelRightWidth">
			<slot name="panelRight"/>
		</v-navigation-drawer>
		<v-main ref='content' :style="getContentStyles" >
			<div ref='scrollArea'/>
			<c-layouts   :name="layoutName" :size="$vuetify.breakpoint">
				<template  v-for="(slotName, index) in slotNames"    v-slot:[slotName] >
					<v-container   v-if=" slotName=='pageLayout' " fluid fill-height id = 'pageLayoutId' :key="index" class="overflow-auto   padding-0" >
						<slot  />
					</v-container>
					<div v-else :key="index">
						<slot  :name="slotName" />
					</div>
				</template>
			</c-layouts>
		</v-main>
		<c-footer v-if="needFooter" :dark="isPerefThemeDark" :light="isPerefThemeLight" />
		<c-msg-list   />
		<slot name="dialogs" />
		<component v-for="(row, name) in dialogsShowen " :key="name" v-bind:is="row.config.component" :dialogLink="row.link"  />
	</v-app>
</template>

<script>	
	import XAuth from '@/mixins/x-auth'
	import XDialogsConfig from '@/mixins/x-dialogs-config'
	import CHead from '@/components/c-head'
	import CFooter from '@/components/c-footer'
	import CMsgList from '@/components/c-msg-list'
	import CLayouts from '@/components/c-layouts'
	export default {
		name:'c-app',
		data:() => ({
			panelLeftShowen: false,
			panelRightShowen: false,
			needLabel: true,
		}),
		props:{
			layoutName : {type:  String, default: 'mainLayout'},
			needFooter: {type:  Boolean, default: false},
			needHeader: {type:  Boolean, default: true},
			oneScreen: {type:  Boolean, default: true},
			headFixed: {type:  Boolean, default: true},
			needBgIm: {type:  Boolean, default: true},
			dark: {type:  Boolean, default: false},
			light: {type:  Boolean, default: false},
			headHideOnScroll: {type:  Boolean, default: true},
			headElevateOnScroll: {type:  Boolean, default: false},
			panelLeft:{type: Object,  default: () => {return{ drawer:true, show:false, class:'', width:270, filter:false, gradient:'', color:'', src:'', slotAppend:false} }},
			panelRight:{type: Object,  default: () => {return{ drawer:false, show:false, class:'', width:300, filter:false,} }},
		},
		computed:{
			isPerefThemeDark(){
				return this.dark && !this.light ? true : this.$vuetify.theme.dark? true: false
			},
			isPerefThemeLight(){
				return this.light && !this.dark ? true : this.$vuetify.theme.light? true: false
			},
			mainLayoutConfig(){
				return this.layoutByHead(this.layoutName)
			},
			slotNames(){
				let vm=this
				if(vm.mainLayoutConfig==null)
					return[]
				return Object.keys(vm.layoutDescByHead(this.layoutName))
			},
			currentAvatar(){
				let vm=this
				return vm.$h.nvl(vm.profileAvatar(),"https://randomuser.me/api/portraits/men/85.jpg")
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
			panelLeftWidth(){ return this.panelLeft.filter? 358 : this.$h.nvl(this.panelLeft.width,270)  },
			panelRightWidth(){ return this.panelRight.filter? 358 : this.$h.nvl(this.panelRight.width,300)  },
			authAva () {return this.profileUserName()==''?'account_circle':'launch'},
			authItems(){
					return this.profileUserName()==''?null: [
					{ link: '$vuetify.system.main.links.mainPage', 			icon: 'home', 					href:'\\user' },
					{ link: '$vuetify.system.main.links.prodList', 			icon: 'library_books', 			href:'\\prodList'  },
				]
			},
		},
		components: {
			CHead, CFooter,CMsgList, CLayouts,
			MInputFields: (resolve) => require(['@/modules/inputFields/m-input-fields.vue'], resolve),
			MTableSettings: (resolve) =>{ require(['@/modules/tableSettings/m-table-settings.vue'], resolve) },
		},
		mixins: [
			XDialogsConfig, XAuth,
		],
		methods: {
			onResize () {
				let vm=this,
					dxWidth = 0,
					dxHeight=0
				if(vm.mainLayoutConfig==null)// елси режим полотенца, то выходим
					return
				document.querySelectorAll('div.v-application--wrap>nav').forEach(el=> { if(!el.classList.contains('v-navigation-drawer--close') ) dxWidth+=el.offsetWidth; } )
				document.querySelectorAll('div.v-application--wrap>footer, div.v-application--wrap>header').forEach(el=> { dxHeight+=el.offsetHeight; } )
				document.querySelectorAll('html').forEach(el=> { if (getComputedStyle( el, null ).overflowY=='scroll') dxWidth+=17; } )
				vm.layoutSizePxRecalc( {head:vm.layoutName, parentSizePx:{width: window.innerWidth-dxWidth, height: window.innerHeight-dxHeight } } )
			},
		},
		async created (){
			let vm=this
			vm.panelLeftShowen= ['xs','sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1? false: vm.$h.nvl(vm.panelLeft.show,false)
			vm.panelRightShowen=['xs','sm'].indexOf(vm.$vuetify.breakpoint.name)!=-1? false: vm.$h.nvl(vm.panelRight.show,false)
			vm.$root.$on('headDrawerLeftClick', (obj)=>{
				vm.panelLeftShowen=!vm.panelLeftShowen
			})
			vm.$root.$on('headDrawerRightClick', (obj)=>{
				vm.panelRightShowen=!vm.panelRightShowen
			})
			await vm.initDialogs(vm.dialogsConfig)
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