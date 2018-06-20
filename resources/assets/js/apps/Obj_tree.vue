<template>
    <v-app dark>
        <v-content>
            <v-navigation-drawer fixed v-model="drawerLeft" left :clipped="$vuetify.breakpoint.width > 1264"  app>
                <v-tree :data = "tree_data"   allow-batch whole-row @item-click = "itemClick" :textFieldName="tree_text" :socetHref="socetHref" :socetEvent="socetEvent" :socetChanel="socetChanel" >  </v-tree>
            </v-navigation-drawer>
			<!--<k-loading v-if="data_loading"/>-->
        </v-content>

        <k-head :showRight=false :showLeft=true :cur_sys='cur_sys'  @clickLeftDrawer="drawerLeft = !drawerLeft" app> </k-head>
        <k-footer app> </k-footer>
        <k-msg ref='msg'></k-msg>
    </v-app>
</template>

<script>
    import head from '../components/k-head';
    import footer from '../components/k-footer';
    import msg from '../components/k-msg';
    import loading from '../components/k-loading';
    import VJstree from '../components/tree/tree';

    export default {
        data: () => ({
			drawerLeft: true,
			data_loading:true,
            cur_sys: 'Работа с объектами',
            tree_text: 'tree_name',
            socetHref: '/socet_command',
            socetEvent: 'object-tree-by-root',
            socetChanel: 'channel-ObjTreeData',
			tree_data: [{}]
		}),
        components: {
            'k-head': head,
            'k-footer':footer,
            'k-msg':msg,
            'k-loading':loading,
            'v-tree':VJstree,
        },
        methods: {
			itemClick(node) {
				if(node.data.opened)
					node.data.closeChildren();
				else
					node.data.openChildren();
			},
        },
        created: function (){
			let vm = this;
			window._Vue.axios.post('/socet_command', {
				type: 'object-tree-by-root',
				_token: window.Laravel.csrfToken
			}).catch(
				(error) => vm.$root.$emit('show-message', {title:'Ошибка запроса данных',text:'Запросить данные не удалось!', status:error.response.status})
			);			
        },
    }
</script>

<style lang="scss">
	div.tree div.tree-selected,
	div.tree div.tree-hovered 	  	{color:black;}
</style>