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
                    <v-list-tile v-for="item in Links" :key="item.name" @click="">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            
            {{title}}
     
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

    export default {
        data: () => ({
            drawerLeft: true,
            drawerRight: true,
            right: null,
            left: null,
            title: '',
            cur_sys: 'Мониторинг',
            systems: [
                {name:'Мониторинг',title:'Мониторинг описание ссылки', icon: 'dashboard'},
                {name:'Планирование',title:'Планирование описание ссылки', icon: 'healing'},
                {name:'Производство',title:'Производство описание ссылки', icon: 'content_cut'},
                {name:'Качество',title:'Качество описание ссылки', icon: 'local_offer'},
                {name:'Служебная',title:'Служебная описание ссылки', icon: 'directions_run'}
            ],
            ALL_Links:[
                {system:'Мониторинг',color:'',name:'VIP',title:'Просмотреть ВСЕ!', icon: 'local_activity',disabled:0},
                {system:'Мониторинг',color:'',name:'Печи',title:'Просмотр информации по печам', icon: 'school',disabled:0},
                {system:'Мониторинг',color:'',name:'Стан',title:'Просмотр информации по стану', icon: 'restaurant',disabled:0},
                {system:'Мониторинг',color:'',name:'Склад',title:'Просмотр информации по складу', icon: 'directions_run',disabled:0},
                {system:'Планирование',color:'',name:'Годовой план',title:'Просмотр информации', icon: 'school',disabled:0},
                {system:'Планирование',color:'',name:'Месячный план',title:'Просмотр информации', icon: 'directions_run',disabled:0},
                {system:'Производство',color:'',name:'Печи',title:'Просмотреть ВСЕ!', icon: 'local_activity',disabled:0},
                {system:'Производство',color:'',name:'Стан',title:'Просмотр информации по стану', icon: 'restaurant',disabled:0},
                {system:'Качество',color:'',name:'Завяки',title:'Просмотр информации по печам', icon: 'dashboard',disabled:0},
                {system:'Качество',color:'',name:'Лаборотория',title:'Просмотр информации по печам', icon: 'healing',disabled:0},
                {system:'Качество',color:'',name:'Аттестация',title:'Просмотр информации по стану', icon: 'restaurant',disabled:0},
                {system:'Служебная',color:'',name:'Журнал операций',title:'Просмотр информации по стану', icon: 'local_offer',disabled:0},
            ],
            Links:[
            ],
        }),
        components: {
            'k-head': k_head,
            'k-footer':k_footer,
            'k-msg':k_msg,
        },
        methods: {
            choose_sys: function (name){
                let newLinks=[];
                this.cur_sys=name;
                this.ALL_Links.forEach(link => {
                    if (link.system==name )
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
            this.choose_sys('Мониторинг');
        },
    }
</script>

<style lang="scss">
    
</style>