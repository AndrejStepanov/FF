<template>
    <v-toolbar class='primary' dense app clipped-left clipped-right fixed >
        <v-toolbar-side-icon @click="$emit('clickLeftDrawer');"   v-if="showLeft" />
        <v-btn flat icon href='\'>
            <v-icon large  >stars</v-icon>
        </v-btn>

        <v-toolbar-title>{{curentSystem}}</v-toolbar-title>
        <v-spacer/>
        <c-profile/>
        <v-toolbar-side-icon @click="$emit('clickRightDrawer');"  v-if="showRight"/>
    </v-toolbar>
</template>

<script>
    import CProfile from './c-profile';

    export default {
        name:'c-head',

        data: () => ({            
        }),
        components: {
            CProfile,
        },
        props: {
            curentSystem:{type: String,  default: '' },
            showLeft:{type: Boolean,  default: false },
			showRight:{type: Boolean,  default: false },
        },
    }
</script>