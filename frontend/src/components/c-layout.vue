<template>
  <div :class="classnames" :style="{ width:configSizes.width+'px', height:configSizes.height+'px' }" :name='name' >
    <slot />
  </div>
</template>

<script>
import XStore from '@/mixins/x-store'
export default {
	name: 'c-layout',
	data() {
		return {
		}
	},
	props: {
		head:{type:  String, required: true},	
		name:{type:  String, required: true},	
	},
	computed: {
		configPars(){return this.layoutDescByName(this.head,this.name)	},
		configSizes(){return this.layoutSizePxByName(this.head,this.name)	},
		classnames() {
			return [
				'multipane',
				'layout-' + this.configPars.layout.slice(0, 1),
				this.configPars.data!=undefined && this.configPars.data.length>0? 'custom-resizer ':'scroll',
				this.configPars.isLast? 'auto-size':'',
			].concat( this.configPars.cssClass.split(' ') )
		},
	},
	mixins: [
		XStore,
	],
	methods: {
	},
}
</script>

<style lang="scss">
.multipane {   /*display: -webkit-box;  display: -ms-flexbox;*/ overflow: hidden; 
    &.layout-h {flex-direction: column; }
    &.layout-v { flex-direction: row;  display: -webkit-box;  }
}

/*.multipane > div {  position: relative;  z-index: 1;}*/
.multipane.scroll {overflow: auto;  padding: 0px 0px 0px 0px;   /*margin: 5px 5px 5px 0px;*/}
.multipane.auto-size {flex-grow: 1;}

.multipane-resizer {  display: block;  position: relative;  z-index: 2;}

.layout-h > .multipane-resizer {  width: 100%;  height: 3px;  margin-top: -10px;  top: 1px;  cursor: row-resize;}

.layout-v > .multipane-resizer {  width: 3px;  height: 100%;  margin-left: -10px;  left: 1px;  cursor: col-resize;}
</style>
