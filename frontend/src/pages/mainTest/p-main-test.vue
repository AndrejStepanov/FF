<template>
	<c-layouts-slots :layoutsConfigs="layoutsConfigsCur" :layoutName="componentName" :parentLayoutConfig="parentLayoutConfig"  >
		<template #fourth  >
			<H1>fourth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #sixth  >
			<H1>sixth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #fifth  >
			<H1>fifth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #seventh  >
			<H1>seventh</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #eighth  >
			<H1>eighth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #nineth  >
			<H1>nineth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #tenth  >
			<H1>tenth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #eleventh  >
			<H1>eleventh</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
		<template #tvelth  >
			<H1>tvelth</H1> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		</template>
	</c-layouts-slots>

</template>
<script>
	import XPage from '@/mixins/x-page'
	export default {
		name:'p-main-test',
		data: () => ({
			armName:'Главная страница',
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
		mixins: [
			XPage,
		],
		methods: {

		},
		created: function (){
		},
	}
</script>