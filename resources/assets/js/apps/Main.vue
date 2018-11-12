<template>
	<c-app :curentSystem="curentSystem" :panelLeftShow="true" :panelLeftDrawer="true" :panelRightShow="true" :panelRightDrawer="true"  >
		<template slot="panelLeft">
			<v-list dense>
				<v-list-tile v-for="item in systems" :key="item.name" @click="choose_sys(item.name);">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ $vuetify.t(item.name) }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</template>
		<template slot="panelRight">
			<v-list dense>
				<v-list-tile v-for="item in Links" :key="item.id" v-bind:href="item.is_new_type==1?'':item.href" :title="item.is_new_type!=1?$vuetify.t(item.title):''" >                        
					<v-list-tile-action v-if="item.is_new_type!=1 " >
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content >
						<v-list-tile-title v-if="item.is_new_type==1 " >{{ $vuetify.t(item.type) }}</v-list-tile-title>
						<v-list-tile-title  v-else>{{ $vuetify.t(item.name) }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</template>
	</c-app>
</template>

<script>
	import XApp from '../mixins/x-app'
	export default {
		data: () => ({
			systems: [
				{name:'$vuetify.texts.main.systems.objects.name' ,title:'$vuetify.texts.main.systems.objects.title', icon: 'dashboard'},
			],
			ALL_Links:[
				{id:1, system:'$vuetify.texts.main.systems.objects.name',color:'',type:'$vuetify.texts.main.links.types.ARM',name:'$vuetify.texts.main.links.objWork.name',	icon: 'local_activity',	href:'/Работа_с_объектами',	title:'$vuetify.texts.main.links.objWork.title', },
				{id:2, system:'$vuetify.texts.main.systems.objects.name',color:'',type:'$vuetify.texts.main.links.types.ARM',name:'$vuetify.texts.main.links.obgView.name', icon: 'dvr', 			href:'/Просмотр_объектов',	title:'$vuetify.texts.main.links.obgView.title', },
			],
			Links:[
			],
		}),
		mixins: [
			XApp,
		],
		methods: {
			choose_sys: function (name){
				let vm=this,
					cur_type=''
				vm.Links=[]
				vm.curentSystem=vm.$vuetify.t(name);
				vm.ALL_Links.forEach(link => {
					if (link.system!=name )
						return;
					if(cur_type!=link.type)
					   vm.Links.push({...link,is_new_type:1, id:(link.id*-1)});
					cur_type=link.type;
					vm.Links.push(link);
				});
			},
		},
		created: function (){
			let vm=this
			vm.choose_sys(vm.systems[0].name);
		},
	}
</script>