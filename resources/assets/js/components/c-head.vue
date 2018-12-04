<template>
    <v-toolbar class='primary z-index--4' dense app clipped-left clipped-right fixed  >
        <v-toolbar-side-icon @click="toolbarClicked('Left')"   v-if="showLeft" />
        <v-btn flat icon href='\'>
            <v-icon large  >stars</v-icon>
        </v-btn>

        <v-toolbar-title v-if="$vuetify.breakpoint.name!='xs'" >{{curentSystem}}</v-toolbar-title>
        <v-spacer/>
        <c-profile/>
        <v-toolbar-side-icon @click="toolbarClicked('Right')"  v-if="showRight"/>
    </v-toolbar>
</template>

<script>
    import CProfile from './c-profile';

    export default {
        name:'c-head',

        data: () => ({            
        }),
        props: {
            curentSystem:{type: String,  default: '' },
            showLeft:{type: Boolean,  default: false },
			showRight:{type: Boolean,  default: false },
        },
       components: {
            CProfile,
        },
        methods:{
            toolbarClicked(side){
                this.$root.$emit('headDrawer'+side+'Click');
            }
        }
    }
</script>
<style>
	.z-index--4		{ z-index: 4; }
</style>