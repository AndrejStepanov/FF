<script>
	import CLayout from './c-layout'
	import XStore from '../mixins/x-store'
	export default {
		name:'c-layouts',
		data:() => ({
			rendersObjects:{},
			isResizing: false,
			sizes:{}
		}),
		props:{
			size: {type:  Object,  default: () =>{return {  width: 100,	height:100 } } },
			name:{type:  String, default: 'main'},	
		},
		watch:{
			size:function (newVal, oldVal){	this.layoutSizePxRecalc({head:this.name ,parentSizePx:newVal, }	)}
		},
		computed:{
			config(){return this.layoutByHead(this.name)	},
			configPars(){return this.layoutDescByHead(this.name)	},
			configSizes(){return this.layoutSizePxByHead(this.name)	},
		},
		components: {
			CLayout,
		},
		mixins: [
			XStore,
		],
		methods: {
			recurRend({config,idx_cur, cnt_cur}){
				let vm= this, tmp=[]
				if(config.data!=undefined && config.data.length){
					config.data.forEach((element,idx) => {
						vm.recurRend({config:element, idx_cur:idx, cnt_cur:config.data.length} )
					})
					config.data.forEach((row,idx)=>{
						tmp.push(vm.rendersObjects[row.name])
						if(idx< config.data.length-1)
							tmp.push(
								vm.$createElement('div', { 
									class: { 'multipane-resizer': true}, 
									attrs:{ block:row.name,}, 
									on:  {mousedown:   vm.configPars[row.name].balanceLayout !=  '' &&  vm.configPars[row.name].changeLayout !=  '' ? vm.onMouseDown: ()=>{} ,}  ,  
								})
							)
					})
					vm.rendersObjects[config.name]= vm.$createElement('c-layout', {	props:{ head: vm.name, name:config.name,  } }, tmp)
				}
				else 
					vm.rendersObjects[config.name]= vm.$createElement('c-layout', {	props:{ head: vm.name, name:config.name, } }, [vm.$slots[config.name], ] )
			},
			onMouseDown({ target: resizer, pageX: initialPageX, pageY: initialPageY }) {
				let vm = this,
					blockName = resizer.getAttribute('block')
				if ( !resizer.className || !resizer.className.match('multipane-resizer') || vm.configPars[blockName].balanceLayout=='')
					return
				let	pane = resizer.parentElement.querySelector('div[name='+ vm.configPars[blockName].changeLayout+']') ,
					paneLast = resizer.parentElement.querySelector('div[name='+ vm.configPars[blockName].balanceLayout+']') ,
					curLayout = vm.configPars[blockName].parentLayout,	
					curAttr = curLayout == 'vertical'?'width':'height',
					initialPaneSize=vm.configSizes[ vm.configPars[blockName].changeLayout ][curAttr],
					initialSizeLast = parseFloat( paneLast.style[curAttr])
				const { addEventListener, removeEventListener } = window
				const resize = (initialSize, offset = 0) => {
					if(initialSize + offset<0)
						return pane.style[curAttr]+ 'px'
					paneLast.style[curAttr] = initialSizeLast - offset + 'px'
					return pane.style[curAttr] = initialSize + offset + 'px'
				}				
				let size =  resize( initialPaneSize, 0) 
				const onMouseMove = function({ pageX, pageY }) {
					size =   resize( initialPaneSize, curLayout == 'vertical' ? pageX - initialPageX: pageY - initialPageY)
				}
				const onMouseUp = async function({ pageX, pageY }) {
					await vm.layoutSizeSet({head:vm.name, name: blockName , size, } )
					vm.isResizing = false
					removeEventListener('mousemove', onMouseMove)
					removeEventListener('mouseup', onMouseUp)
					if(vm.configSizes[ vm.configPars[blockName].changeLayout ][curAttr] ==  initialPaneSize )
						resize( initialPaneSize, 0)
				}
				vm.isResizing = true
				addEventListener('mousemove', onMouseMove)
				addEventListener('mouseup', onMouseUp)
			},
		},
		created: function (){
		},
		render: function (h) {
			let vm = this
			if(vm.config==null)
				return
			vm.recurRend({config:vm.config})
			return vm.rendersObjects[vm.config.name]
		},
	}
</script>

<style lang="scss">
.custom-resizer {  width: 100%;  height: 100%;}
.multipane .c-table.tabFullHeight>div {overflow: initial;}

.custom-resizer > .pane {  text-align: center;  margin: 10px;  overflow: auto;}

.custom-resizer.layout-v > .multipane-resizer {  margin: 0; left: 0;  position: relative;  border-style: solid; border-width: 0 thin 0 0; border-image: repeating-linear-gradient(0deg,rgb(80, 80, 80) 0, rgba(255, 255, 255, 0.5) 2px,transparent 0,transparent 4px) 1 repeat;}
.custom-resizer.layout-h > .multipane-resizer {  margin: 0; left: 0;  position: relative;  border-style: solid; border-width: thin 0 0; border-image: repeating-linear-gradient(90deg,rgb(80, 80, 80) 0, rgba(255, 255, 255, 0.5) 2px,transparent 0,transparent 4px) 1 repeat;}
</style>