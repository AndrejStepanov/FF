<template>
	<c-app :curentSystem="curentSystem" :panelLeft="{show:true, color:'accent', slotAppend:true }"  :panelRight="{show:false}" class='font-size-standart'  >
		<template #panelLeft>

			<v-divider class="mb-1" />

			<v-list	dense  v-bind="lightSet"  	 >
				<v-list-item  v-if="profileUserLogin=='' || profileUserLogin==guestLogin" @click=" if (profileUserName!='') $root.$emit('systemLogin')" >
					<v-list-item-avatar	class="align-self-center"		contain	height="30"	>
						<v-progress-circular v-if="profileUserName==''"    indeterminate     :size="20"     />
						<v-icon	v-else v-text="'account_circle'"	/>
					</v-list-item-avatar>

					<v-list-item-content>
						<v-list-item-title > {{profileUserName!=''?profileUserName:$vuetify.lang.t('$vuetify.system.simple.labels.auth')}} 	</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			
				<v-list-group v-else :color="linkColor"	>
					<template #activator>
						<v-list-item-avatar	class="align-self-center"	contain	height="30"	>
							<v-icon v-text="'account_circle'"	/>
						</v-list-item-avatar>

						<v-list-item-content  >
							<v-list-item-title 	v-text="profileUserName"	/>
							<v-list-item-subtitle >
								<small>{{$vuetify.lang.t('$vuetify.system.simple.labels.activeTo')}}</small>  {{$moment(profileExpiresIn*1000).format('DD.MM hh:mm')  }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</template>
					
					<v-list-item  link >
						<v-list-item-icon>
							<v-icon v-text="'cached'"></v-icon>
						</v-list-item-icon>
						<v-list-item-title v-text="$vuetify.lang.t('$vuetify.system.simple.actions.chacngePass')"></v-list-item-title>
					</v-list-item>
					<v-list-item  link >
						<v-list-item-icon>
							<v-icon v-text="'settings'"></v-icon>
						</v-list-item-icon>
						<v-list-item-title v-text="$vuetify.lang.t('$vuetify.system.simple.actions.settings')"></v-list-item-title>
					</v-list-item>
					<v-list-item  link	@click="$root.$emit('systemLogout')" >
						<v-list-item-icon>
							<v-icon v-text="'close'"></v-icon>
						</v-list-item-icon>
						<v-list-item-title v-text="$vuetify.lang.t('$vuetify.system.simple.actions.authEnd')"></v-list-item-title>
					</v-list-item>
				</v-list-group>
			</v-list>

			<template v-if="profileUserLogin!=''">
				<v-divider class="mt-2" />
				<v-bottom-navigation	v-model="curPanel"	v-bind="lightSet"	shift background-color="transparent" class='box-shadow-none'	>
					<v-btn>
						<span>{{$vuetify.lang.t('$vuetify.system.simple.labels.struct')}}</span>
						<v-icon>account_tree</v-icon>
					</v-btn>

					<v-btn>
						<span>{{$vuetify.lang.t('$vuetify.system.simple.labels.functional')}}</span>
						<v-icon>apps</v-icon>
					</v-btn>

				</v-bottom-navigation>
				
				<v-divider class="mb-2" />

				<v-treeview v-show="curPanel==0" v-bind="lightSet" dense  hoverable  :color="linkColor" :items="linksTree" :open="linkOpenPath"  open-on-click id = 'treeSystemLink'  >
					<template #label="{ item }">
						<router-link v-if="item.href_link!='' " :to="item.href_link" exact  >{{item.link_name}}</router-link>
						<template v-else>
							{{item.link_name}}
						</template>
					</template>
					<template #prepend="{ item, open }">
						<router-link v-if="item.href_link!='' " :to="item.href_link" exact tag="div"  v-slot="{ navigate, isActive, isExactActive  }"  >
							<div @click="navigate">
								<v-icon  :class="[ (isActive || isExactActive ) && 'router-link-exact-active router-link-active' ]">
									{{ item.children? (open ? 'folder_open' : 'folder') :'dashboard'  }}
								</v-icon>
							</div>
						</router-link>
						<v-icon v-else>
							{{ item.children? (open ? 'folder_open' : 'folder') :'dashboard'  }}
						</v-icon>				
					</template>
				</v-treeview>

				<div v-show="curPanel==1" >
					<template v-for="(value, key) in pageButtons " >
						<v-tooltip  v-if="pageButtons[key].title!=''"	:key="key"   bottom  > 
							<template v-slot:activator="{ on, attrs }">
								<v-btn	v-on="on" tile class=" btn-functional ml-4  mb-4"	height="68px" :disabled="pageButtons[key].disabled"	width="68px"	color="transparent"   
									v-bind="{...lightSet,...attrs}" @click="$root.$emit(pageButtons[key].event, pageButtons[key].param)"  >
									<v-icon >{{pageButtons[key].icon}}</v-icon>
								</v-btn>
							</template>
							<span >{{$vuetify.lang.t(pageButtons[key].title)}}</span>	
						</v-tooltip>
						<v-btn v-else :key="key" tile class=" btn-functional ml-4  mb-4"	height="68px"	:disabled="pageButtons[key].disabled" width="68px"	color="transparent"   
							v-bind="lightSet" @click="$root.$emit(pageButtons[key].event, pageButtons[key].param)">
							<v-icon >{{pageButtons[key].icon}}</v-icon> 
						</v-btn>
					</template>
				</div>
				
			</template>
		</template>		
		<v-skeleton-loader v-if="profileUserName==''" class="pa-3" :width="sceletSize.width-12*2" :height="sceletSize.height-12*2"	type="button,  divider, list-item, table"/>
		<transition v-else name="app-transition">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</transition>
	</c-app>
</template>

<script> //view_comfy apps 
	import XApp from './mixins/x-app'
	export default {
		data: () => ({
			layoutsConfigs: { //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				name: 'mainLayout',  layout: 'horizontal',  data:[
					{name: 'pageLayout'}
				]
			}, 
			systemLinks:[],
			systemLinksLoading:false,
			systemLinksStruct:{},
			linksTree: [],
			//linkOpenPath:[],
			guestLogin:process.env.VUE_APP_API_GUEST_LOGIN,
			curPanel:0,
			componentName:'app',
		}),
		computed:{
			lightSet(){
				return { dark:!this.$vuetify.theme.dark, light:this.$vuetify.theme.dark }
			},
			linkColor(){
				return this.$vuetify.theme.dark? 'black': 'white'
			},
			sceletSize(){
				return this.layoutSizePxByName('mainLayout','pageLayout')
			},
			linkOpenPath(){
				let vm = this, i=0, res=[]
				if (vm.$h.nvl(vm.$route.name)=='')
					return res
				i= vm.$route.meta.linkId
				if( i>0 && vm.$h.nvl(vm.systemLinksStruct[i])!='' )
					while( vm.systemLinksStruct[i].link_parent_id>0){
						res.push(vm.systemLinksStruct[i].link_parent_id)
						i=vm.systemLinksStruct[i].link_parent_id
					}
				return res
			},
			pageButtons(){
				return this.pageButtonByPage( this.$h.camelize(this.$h.nvl(this.$route.name,'')) )
			},			
		},
		watch: {
			systemLinks (val, valOld) {
				let vm =this, containers={}
				vm.linksTree=[]
				vm.systemLinks.forEach(el => {
					el.id = el.link_id
					el.name = el.link_name
					if(el.link_parent_id==null ){
						vm.linksTree.push( {children:[],  ...el,} )
						containers[el.id] = vm.linksTree[ vm.linksTree.length-1 ]
					}
					else{
						//containers[el.parent_id].children=containers[el.parent_id].children||[]
						containers[el.link_parent_id].children.push(el)
						containers[el.id]= containers[el.link_parent_id].children[ containers[el.link_parent_id].children.length-1 ]
					}
				})
				vm.systemLinksStruct = Object.assign({}, this.systemLinksStruct, containers)
			},
		},
		mixins: [
			XApp,
		],
		methods: {
			linkChange(val){
				console.log(val);
			},
		},
		created: async function (){
			let vm=this
			vm.$root.$on('userInfoRetrieved', async ()=>{
				vm.systemLinks = await vm.$h.sendRequestForData( { href:'api/systemLinks',  loadingVar:'systemLinksLoading' }, vm )
			})
			vm.$root.$on('logoutProcessed', ()=>{
				vm.systemLinks=[]
			})
		},
		errorCaptured(err,vm,info) {
			console.error('errorCaptured',err);
			this.$h.showMsg({ title: this.$h.nvl(err.title,'$vuetify.errors.systemErrorJs.title')  , text: this.$h.nvl(err.text ,err.message),	params: {creator:'js', status:-1, trace: info+'<br>'+err.stack.replace(/\n/g,'<br>') }, withThrow:false,})
			return false;
		}
	}
</script>
<style>
.v-list-group__header.v-list-item--active:not(:hover):not(:focus):before{ opacity:.24 !important}
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {    margin-left: 0px !important;}
#treeSystemLink a {color:inherit;}
#treeSystemLink a.router-link-exact-active { font-weight: bold; }
#treeSystemLink i.router-link-exact-active-icon { text-decoration: underline; -webkit-text-decoration-skip: ink;    text-decoration-skip-ink: auto;}
.app-transition-enter-active,
.app-transition-leave-active {  transition-property: opacity;  transition-duration: 0.25s;}
.app-transition-enter-active {  transition-delay: 0.25s;}
.app-transition-enter,
.app-transition-leave-active {  opacity: 0;}

/*
.btn-functional>span	{      display: flex;    flex-direction: column;    top: 0px;left: 0px; align-items: center;    position: absolute; height: 68px; width: 68px;}
.btn-functional-icon	{      font-size: 46px !important;    flex-grow: 1;}
.btn-functional-title	{      white-space: initial;    font-size: 12px;    flex-grow: 99;}
*/
</style>