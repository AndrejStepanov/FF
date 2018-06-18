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
            <k-tab></k-tab>
        </v-content>

        <k-head :showRight=true :showLeft=true :cur_sys='cur_sys'  @clickRightDrawer ="drawerRight = !drawerRight" @clickLeftDrawer="drawerLeft = !drawerLeft" app> </k-head>
        <k-footer app> </k-footer>
        <k-msg ref='msg'></k-msg>
    </v-app>
</template>

<script>
    import k_head from './k_head';
    import k_footer from './k_footer';
    import k_msg from './k_msg';
    import k_tab from './tab';

    export default {
        data: () => ({
            drawerLeft: true,
            drawerRight: true,
            right: null,
            left: null,
            title: '',
            cur_sys: 'Объекты',
            systems: [
                {name:'Объекты',title:'АРМы работы с объектами системы', icon: 'dashboard'},
            ],
            ALL_Links:[
                {system:'Объекты',color:'',type:'АРМ',name:'Дерево',title:'Работы с деревом объектов!', icon: 'local_activity',disabled:0,is_new_type:0, href:'/',},
            ],
            Links:[
            ],
        }),
        components: {
            'k-head': k_head,
            'k-footer':k_footer,
            'k-msg':k_msg,
            'k-tab':k_tab,
        },
        methods: {
            choose_sys: function (name){
                let newLinks=[],
                    cur_type='';
                this.cur_sys=name;
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
            this.choose_sys(this.cur_sys);
        },
    }
</script>

<style lang="scss">
    
</style>