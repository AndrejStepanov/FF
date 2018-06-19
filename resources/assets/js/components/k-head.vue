<template>
    <v-toolbar class="nav_head" dense app clipped-left clipped-right fixed >
        <v-toolbar-side-icon @click="$emit('clickLeftDrawer');"   v-if="showLeft" ></v-toolbar-side-icon>
        <v-btn flat icon href='\'>
            <v-icon large  >stars</v-icon>
        </v-btn>

        <v-toolbar-title>{{cur_sys}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <k-profile> </k-profile>
        <v-toolbar-side-icon @click="$emit('clickRightDrawer');"  v-if="showRight"></v-toolbar-side-icon>
    </v-toolbar>
</template>

<script>
    import profile from './k-profile';

    export default {
        name:'k-head',

        data: () => ({            
        }),
        components: {
            'k-profile':profile
        },
        props: {
            cur_sys:{type: String,  default: '' },
            showLeft:{type: Boolean,  default: false },
			showRight:{type: Boolean,  default: false },
        },
    }
</script>

<style lang="scss">
    
</style>