<template>
    <c-app :curentSystem="curentSystem" :showLeft=true :showRight=true   >
        <v-navigation-drawer fixed v-model="drawerLeft" left :clipped="$vuetify.breakpoint.width > 1264"  app>
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
        </v-navigation-drawer>
        <v-navigation-drawer fixed v-model="drawerRight" right  :clipped="$vuetify.breakpoint.width  > 1264"  app >
            <v-list dense>
                <v-list-tile v-for="item in Links" :key="item.name" v-bind:href="item.is_new_type==1?'':item.href" >                        
                    <v-list-tile-action v-if="item.is_new_type==0 " >
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content >
                        <v-list-tile-title v-if="item.is_new_type==1 " >{{ item.type  }}</v-list-tile-title>
                        <v-list-tile-title v-else>{{ item.name }} </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </c-app>

</template>

<script>
    import CApp from '../components/c-app';

    export default {
        data: () => ({
            drawerLeft: true,
            drawerRight: true,
            curentSystem: 'Объекты',
            systems: [
                {name:'Объекты',title:'АРМы работы с объектами системы', icon: 'dashboard'},
            ],
            ALL_Links:[
                {system:'Объекты',color:'',type:'АРМ',name:'Работа с объектами',title:'Работы с деревом объектов!', icon: 'local_activity',disabled:0,is_new_type:0, href:'/Работа_с_объектами',},
            ],
            Links:[
            ],
        }),
        components: {
            CApp,
        },
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
                       newLinks.push({...link,is_new_type:1,name:link.type});
                    newLinks.push(link);
                });
                vm.Links=newLinks;
            },
        },
        created: function (){
            let vm=this
            vm.choose_sys(vm.curentSystem);
			vm.$root.$on('headDrawerLeftClick', (obj)=>{
				vm.drawerLeft=!vm.drawerLeft;
            }); 
			vm.$root.$on('headDrawerRightClick', (obj)=>{
				vm.drawerRight=!vm.drawerRight;
			});
        },
    }
</script>