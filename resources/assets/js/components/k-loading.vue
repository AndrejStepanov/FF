<template>
        <v-container  fluid class="text-xs-center max-height"> 
            <v-layout  class='max-height' row wrap>
                <v-flex column >
                    <v-progress-circular  class='top-center' :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
                </v-flex>					
            </v-layout>
        </v-container>
</template>

<script>
    export default {
        name:'k-loading',

        data: () => ({     
        }),
    }
</script>

<style lang="scss">
	div.top-center 					{top:50%;}
	div.max-height 					{height: 100%;}
</style>