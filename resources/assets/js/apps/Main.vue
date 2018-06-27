<template>
    <v-app dark>
        <v-content>
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

        </v-content>

        <c-head :showRight=true :showLeft=true :curentSystem='curentSystem'  @clickRightDrawer ="drawerRight = !drawerRight" @clickLeftDrawer="drawerLeft = !drawerLeft" app/>
		<c-footer app/>
		<c-msg-list />
    </v-app>
</template>

<script>
    import CHead from '../components/c-head';
    import CFooter from '../components/c-footer';
    import CMsgList from '../components/c-msg-list';

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
            CHead,CFooter,CMsgList,
        },
        methods: {
            choose_sys: function (name){
                let newLinks=[],
                    cur_type='';
                this.curentSystem=name;
                this.ALL_Links.forEach(link => {
                    if (link.system!=name )
                        return;
                    if(cur_type!=link.type)
                       newLinks.push({...link,is_new_type:1,name:link.type});
                    newLinks.push(link);
                });
                this.Links=newLinks;
                this.systems.forEach(system => {
                    if (system.name==name )
                       this.title=system.title ;      
                });
            },
        },
        created: function (){
            this.choose_sys(this.curentSystem);
        },
    }
</script>