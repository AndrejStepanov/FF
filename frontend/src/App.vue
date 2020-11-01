<template>
	<c-app :curentSystem="curentSystem" :panelLeft="{show:true, color:'accent', slotAppend:true }"  :panelRight="{show:false}"  >
		<template #panelLeft>

			<v-divider class="mb-1" />

			<v-list	dense  v-bind="lightSet"  	 >
				<v-list-item  v-if="profileUserLogin=='' || profileUserLogin==guestLogin" @click="$root.$emit('systemLogin')" >
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
						<v-list-item-title v-text="$vuetify.lang.t('$vuetify.system.simple.actions.Settings')"></v-list-item-title>
					</v-list-item>
					<v-list-item  link	@click="$root.$emit('systemLogout')" >
						<v-list-item-icon>
							<v-icon v-text="'close'"></v-icon>
						</v-list-item-icon>
						<v-list-item-title v-text="$vuetify.lang.t('$vuetify.system.simple.actions.authEnd')"></v-list-item-title>
					</v-list-item>
				</v-list-group>
			</v-list>

			<v-divider class="mb-2" />
		
			<v-treeview  v-bind="lightSet" dense  hoverable  :color="linkColor" :items="linksTree" :open="linkOpenPath"  open-on-click id = 'treeSystemLink'  >
				<template #label="{ item }">
					<router-link v-if="item.href_link!='' " :to="item.href_link" exact >{{item.link_name}}</router-link>
					<template v-else>
						{{item.link_name}}
					</template>
				</template>
				<template #prepend="{ item, open }">
					<router-link v-if="item.href_link!='' " :to="item.href_link" exact tag="div"  v-slot="{ navigate, isActive, isExactActive  }" >
						<div @click="navigate">
							<v-icon  :class="[ (isActive || isExactActive ) && 'router-link-exact-active-icon' ]">
								{{ item.children? (open ? 'folder_open' : 'folder') :'dashboard'  }}
							</v-icon>
						</div>
					</router-link>
					<v-icon v-else>
						{{ item.children? (open ? 'folder_open' : 'folder') :'dashboard'  }}
					</v-icon>				
				</template>
			</v-treeview>
			
			<v-divider class="mb-2" />	
			
		</template>		
		<v-skeleton-loader v-if="profileUserName==''" class="pa-3" :width="sceletSize.width-12*2" :height="sceletSize.height-12*2"	type="button,  divider, list-item, table"/>
		<transition v-else name="app-transition">
			<keep-alive>
				<router-view/>
			</keep-alive>
		</transition>		
	</c-app>
</template>

<script>
	import XApp from './mixins/x-app'
	export default {
		data: () => ({
			layoutsConfigs: { //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				name: 'mainLayout'
			}, 
			systemLinks:[],
			linksTree: [],
			linkOpenPath:[],
			guestLogin:process.env.VUE_APP_API_GUEST_LOGIN,
		}),
		computed:{
			lightSet(){
				return { dark:!this.$vuetify.theme.dark, light:this.$vuetify.theme.dark }
			},
			linkColor(){
				return this.$vuetify.theme.dark? 'black': 'white'
			},
			sceletSize(){
				return this.layoutSizePxByName('mainLayout','mainLayout')
			},
			/*linkOpenPath(){
				let vm =this, res = []
				vm.systemLinks.forEach(el => {
					if(el.link_id == this.$router.history.current.meta.linkId)
						res=el.parent_ids.split(',')
				})
				return res
			},*/
		},
		watch: {
			systemLinks (val, valOld) {
				let vm =this, containers={}, i=0
				vm.linksTree=[]
				vm.linkOpenPath=[]
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
				i= vm.$router.history.current.meta.linkId
				if( i>0 && vm.$h.nvl(containers[i])!='' )
					while( containers[i].link_parent_id>0){
						vm.linkOpenPath.push(containers[i].link_parent_id)
						i=containers[i].link_parent_id
					}
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
			let vm=this,
				response={}
			vm.$root.$on('userInfoRetrieved', async ()=>{
				response = await vm.$h.sendRequest( { href:'api/systemLinks', data:{ type:'get',} } )
				if(!response)
					return
				vm.systemLinks=response.data.data
			})
			vm.$root.$on('logoutProcessed', ()=>{
				vm.systemLinks=[]
			})
		},
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
</style>