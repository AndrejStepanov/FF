<template>
	<c-app :curentSystem="curentSystem" :panelLeft="{show:true}"  :panelRight="{show:true}"  :mainPanelConfig="mainPanelConfig" >
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
		<template slot="fourth">
			<H1>fourth</H1> fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif  ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y
		</template>
		<template slot="sixth">
			<H1>sixth</H1> fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y
			
		</template>
		<template slot="fifth">
			<H1>fifth</H1> fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y
			
		</template>
		<template slot="seventh">
			<H1>seventh</H1> fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y fkwsehf vbsjfy siof goaseif gwaoeifygewoiyfgaweoif ygwoaeiyvg weoiycg weaoiyg weaioy gweiv gweoivyu gweoivyg weaif gwoaeyfwfli uygweofuiwaegfpoweug fpowufag poewfugwoeafuihgwae of8y
			
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
			mainPanelConfig:  //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;  Последнему слою выставлять размер бессмысленно
				{  name: 'first',   width:'100%',	height:'100%',  layout: 'vertical',  data:[
					{  name: 'second',   width:'70%',	height:'100%',  layout: 'horizontal', data:[
						{name: 'fourth',   width:'100%',	height:'60%',  layout: 'vertical'},
						{name: 'sixth',   width:'100%',	height:'40%',  layout: 'vertical'},
					]},
					{  name: 'third',   width:'30%',	height:'100%',  layout: 'horizontal', data:[
						{name: 'fifth',   width:'100%',	height:'40%',  layout: 'vertical'},
						{name: 'seventh',   width:'100%',	height:'60%',  layout: 'vertical'}
					]},
				]}, 
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