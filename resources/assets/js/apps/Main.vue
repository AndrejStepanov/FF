<template>
	<c-app :curentSystem="curentSystem" :panelLeftShow="true" :panelLeftDrawer="true" :panelRightShow="true" :panelRightDrawer="true"  >
		<template slot="panelLeft">
			<v-list dense>
				<v-list-tile v-for="item in systems" :key="item.name" @click="choose_sys( item.name );">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.name }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</template>
		<template slot="panelRight">
			<v-list dense>
				<v-list-tile v-for="item in Links" :key="item.id" v-bind:href="item.is_new_type==1?'':item.href" >                        
					<v-list-tile-action v-if="item.is_new_type!=1 " >
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content >
						<v-list-tile-title v-if="item.is_new_type==1 " >{{ item.type  }}</v-list-tile-title>
						<v-list-tile-title v-else>{{ item.name }} </v-list-tile-title>
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
				{name:'Объекты',title:'АРМы работы с объектами системы', icon: 'dashboard'},
			],
			ALL_Links:[
				{id:1, system:'Объекты',color:'',type:'АРМ',name:'Работа с объектами',icon: 'local_activity',	href:'/Работа_с_объектами',title:'Работы с деревом объектов!', },
				{id:2, system:'Объекты',color:'',type:'АРМ',name:'Просмотр объектов', icon: 'dvr', 				href:'/Просмотр_объектов',title:'Просмотр созданных в системе объектов!', },
			],
			Links:[
			],
		}),
		mixins: [
			XApp,
		],
		methods: {
			choose_sys: function (name){
				let vm=this
				let newLinks=[],
					cur_type='';
				vm.curentSystem=name;
				vm.ALL_Links.forEach(link => {
					if (link.system!=name )
						return;
					if(cur_type!=link.type)
					   newLinks.push({...link,is_new_type:1, id:(link.id*-1)});
					cur_type=link.type;
					newLinks.push(link);
				});
				vm.Links=newLinks;
			},
		},
		created: function (){
			let vm=this
			vm.choose_sys(vm.systems[0].name);
		},
	}
</script>