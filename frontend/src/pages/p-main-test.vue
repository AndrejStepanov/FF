<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="$h.camelize($options.name)" :parentLayoutName="parentLayoutName"  >
		<template v-slot:fourth  >
			<H1>fourth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:sixth  >
			<H1>sixth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:fifth  >
			<H1>fifth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:seventh  >
			<H1>seventh</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:eighth  >
			<H1>eighth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:nineth  >
			<H1>nineth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:tenth  >
			<H1>tenth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:eleventh  >
			<H1>eleventh</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template v-slot:tvelth  >
			<H1>tvelth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
	</c-layouts-slots>

</template>
<script>
	import CLayoutsSlots from '../components/c-layouts-slots'
	import XStore from '../mixins/x-store'
	export default {
		name:'p-main-test',
		data: () => ({
			layoutsConfigs: { //'horizontal' - внутри будут строки,  'vertical' - внутри будут столбики;
				name: 'first',  layout: 'vertical',  data:[
					{  name: 'second',		width:'50%',	  layout: 'horizontal', data:[
						{name: 'fourth',	height:'30%',},
						{name: 'eighth', 	height:'200px',  layout: 'vertical', resizable:false, childBalance:'tvelth', data:[
							{name: 'nineth',	width:'100px',	},
							{name: 'tvelth',	width:'100px',	},
							{name: 'tenth',		width:'100px',	resizable:false},
							{name: 'eleventh', 	width:'100px'}
						] },
						{name: 'sixth', },
					]},
					{  name: 'third',		width:'50%',	 layout: 'horizontal', data:[
						{name: 'fifth',		height:'50%'},
						{name: 'seventh'}
					]},
				]}, 
			layoutsCur:-1,
		}),
		props:{
			parentLayoutName : {type:  String, default: 'main'},
		},
		computed:{
			layoutsConfigsCur(){
				return 	this.layoutsCur>-1 && this.layoutsConfigs[this.layoutsCur]!=undefined? this.layoutsConfigs[this.layoutsCur]:this.layoutsConfigs
			},
		},
		components: {
			CLayoutsSlots, 
		},
		mixins: [
			XStore,
		],
		methods: {

		},
		created: function (){
		},
	}
</script>