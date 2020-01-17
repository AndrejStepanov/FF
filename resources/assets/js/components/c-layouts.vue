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
			resizable(){return nvl(this.config.resizable,false)	},
			config(){return this.layoutByName(this.name)	},
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
			recurRend({config,idx,cnt, layoutParent}){
				let vm= this, tmp=[]
				if(config.data!=undefined && config.data.length){
					config.data.forEach((element,idx) => {
						vm.recurRend({config:element, idx, cnt:config.data.length, layoutParent:config.data.layout} )
					});
					config.data.forEach((row,idx)=>{
						tmp.push(vm.rendersObjects[row.name])
						if(idx< config.data.length-1)
							tmp.push(vm.$createElement('div', { class: { 'multipane-resizer': true}, attrs:{ block:row.name}, on: {mousedown: this.onMouseDown,},  }))
					})
					vm.rendersObjects[config.name]= vm.$createElement('c-layout', {	props:{ config:vm.configPars[config.name], sizes:vm.configSizes[config.name]} }, tmp)
				}
				else 
					vm.rendersObjects[config.name]= vm.$createElement('c-layout', {	props:{ config:vm.configPars[config.name], sizes:vm.configSizes[config.name]} }, [vm.$slots[config.name], ] )
			},
			onMouseDown({ target: resizer, pageX: initialPageX, pageY: initialPageY }) {
				let vm = this,
					blockName = resizer.getAttribute('block')
				if ( !vm.resizable || !resizer.className || !resizer.className.match('multipane-resizer'))
					return
				let parentName = vm.configPars[blockName].parent,
					{ $el: container } =  vm,
					pane = resizer.previousElementSibling,
					paneLast = resizer.parentElement.lastChild,
					initialPaneWidth=parseFloat(pane.style.width),
					initialPaneHeight=parseFloat(pane.style.height),
					curLayout = vm.configPars[parentName].layout
				let curAttr = curLayout == 'vertical'?'width':'height',
					initialSizeLast = parseFloat( paneLast.style[curAttr])
				const { addEventListener, removeEventListener } = window

				const resize = (initialSize, offset = 0) => {
					paneLast.style[curAttr] = initialSizeLast- offset + 'px'
					return pane.style[curAttr] = initialSize + offset + 'px'
				}
				// This adds is-resizing class to container
				vm.isResizing = true
				// Resize once to get current computed size
				let size =  curLayout == 'vertical' ? resize( initialPaneWidth, 0) : resize(initialPaneHeight, 0)
				const onMouseMove = function({ pageX, pageY }) {
					size =  curLayout == 'vertical' ? resize( initialPaneWidth, pageX - initialPageX) : resize(initialPaneHeight, pageY - initialPageY)
				}

				const onMouseUp = function({ pageX, pageY }) {
					// Run resize one more time to set computed width/height.
					let changeSize =0, sizeLast=0
					size =  parseInt(  parseFloat( size) / (curLayout == 'vertical'?container.clientWidth : container.clientHeight  )*100 )||1
					vm.layoutSizeSet({head:vm.name, name:blockName, size:{[curAttr]:size}, } )
					vm.layoutSizePxRecalc({head:vm.name ,name:parentName, }	)	
					vm.isResizing = false
					removeEventListener('mousemove', onMouseMove)
					removeEventListener('mouseup', onMouseUp)
				}
				addEventListener('mousemove', onMouseMove)
				addEventListener('mouseup', onMouseUp)
			},
		},
		created: function (){
			let vm = this
		},
		render: function (h) {
			let vm = this
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