<script>
	import CLayout from './c-layout'
    export default {
		name:'c-layouts',
		data:() => ({
			rendersObjects:{},
			configPars:{},
			isResizing: false,
		}),
		props:{
			config: {type:  Object,  default: () =>{return {  name: 'first',   width:'50%',	height:'100%',  layout: 'horizontal' , data:[]}}},
		},
		computed:{
			resizable(){return nvl(this.config.resizable,false)	},
		},
        components: {
			CLayout,
		},
		methods: {
			recurPars({config,parent='',isLast=false}){
				let vm= this
				vm.$set(vm.configPars, config.name, {...config, parent,isLast})
				if(config.data!=undefined && config.data.length){
					config.data.forEach((element,idx) => {
						vm.recurPars({config:element, parent:config.name, isLast: idx< config.data.length-1?false:true } )
					});
					config.data.forEach( (row)=>{
						vm.configPars[row.name].last = config.data[config.data.length - 1].name
					})
				}
			},
			recurRend({config}){
				let vm= this, tmp=[]
				if(config.data!=undefined && config.data.length){
					config.data.forEach((element,idx) => {
						vm.recurRend({config:element} )
					});
					config.data.forEach((row,idx)=>{
						tmp.push(vm.rendersObjects[row.name])
						if(idx< config.data.length-1)
							tmp.push(vm.$createElement('div', { class: { 'multipane-resizer': true}, attrs:{ block:row.name}, on: {mousedown: this.onMouseDown,},  }))
					})
					vm.rendersObjects[config.name]= vm.$createElement('c-layout', {	props:{ config:vm.configPars[config.name]} }, tmp)
				}
				else 
					vm.rendersObjects[config.name]= vm.$createElement('c-layout', {	props:{ config:vm.configPars[config.name] } }, [vm.$slots[config.name], ] )
			},
			onMouseDown({ target: resizer, pageX: initialPageX, pageY: initialPageY }) {
				let vm = this,
					blockName = resizer.getAttribute('block')
				if ( !vm.resizable || !resizer.className || !resizer.className.match('multipane-resizer'))
					return
				let parentName = vm.configPars[blockName].parent,
					lastName=vm.configPars[blockName].last,
					{ $el: container } =  vm,
					 pane = resizer.previousElementSibling,
					initialPaneWidth=parseFloat(vm.configPars[blockName].width.replace("%","").replace("px","")),
					initialPaneHeight=parseFloat(vm.configPars[blockName].height.replace("%","").replace("px",""))
				let curLayout = vm.configPars[parentName].layout
				//let { offsetWidth: initialPaneWidth,    offsetHeight: initialPaneHeight,   } = pane
				let usePercentage = !!(pane.style.width + '').match('%')
				const { addEventListener, removeEventListener } = window

				const resize = (initialSize, offset = 0) => {
					if(initialSize==undefined )
						return
					if (curLayout == 'vertical') 
						return pane.style.width = usePercentage ? initialSize + offset / container.clientWidth * 100 + '%' : initialSize + offset + 'px'
					if (curLayout == 'horizontal') 
						return pane.style.height = usePercentage ?initialSize + offset / container.clientHeight * 100 + '%'   : initialSize + offset + 'px'
				}
				// This adds is-resizing class to container
				vm.isResizing = true
				// Resize once to get current computed size
				let size = resize()
				// Trigger paneResizeStart event
				vm.$emit('paneResizeStart', pane, resizer, size)
				const onMouseMove = function({ pageX, pageY }) {
					size =  curLayout == 'vertical' ? resize( initialPaneWidth, pageX - initialPageX) : resize(initialPaneHeight, pageY - initialPageY)
					vm.$emit('paneResize', pane, resizer, size)
				}

				const onMouseUp = function({ pageX, pageY }) {
					// Run resize one more time to set computed width/height.
					let changeSize =0, sizeLast=0, 
					size =  parseFloat( resize(curLayout == 'vertical' ? initialPaneWidth : initialPaneHeight, curLayout == 'vertical' ? pageX - initialPageX : pageY - initialPageY).replace("%","").replace("px",""))
					size=size>100?100:size 
					changeSize = (curLayout == 'vertical' ? initialPaneWidth:initialPaneHeight) - size
					sizeLast = parseFloat((curLayout== 'vertical' ? vm.configPars[lastName].width : vm.configPars[lastName].height ).replace("%","").replace("px","")) 
					if(sizeLast+changeSize-(usePercentage ? 5 : 100) <=0){
						changeSize=(usePercentage ? 5 : 100)-sizeLast
						size = (curLayout == 'vertical' ? initialPaneWidth : initialPaneHeight)-changeSize
						sizeLast=(usePercentage ? 5 : 100)
					}
					else 
						sizeLast+=changeSize
					if(vm.configPars[parentName].layout == 'vertical'){
						vm.configPars[blockName].width=size+(usePercentage ? '%' : 'px')
						vm.configPars[lastName].width=sizeLast+(usePercentage ? '%' : 'px')
					}
					else{
						vm.configPars[blockName].height=size+(usePercentage ? '%' : 'px')
						vm.configPars[lastName].height=sizeLast+(usePercentage ? '%' : 'px')
					}
					// This removes is-resizing class to container
					vm.isResizing = false
					removeEventListener('mousemove', onMouseMove)
					removeEventListener('mouseup', onMouseUp)
					vm.$emit('paneResizeStop', pane, resizer, size)
				}
				addEventListener('mousemove', onMouseMove)
				addEventListener('mouseup', onMouseUp)
			},
		},
		created: function (){
			let vm = this
			vm.recurPars({config:vm.config})
		},
		render: function (h) {
			let vm = this
			if(vm.config.data==undefined || !vm.config.data.length)
				return null
			vm.recurRend({config:vm.config})
			return vm.rendersObjects[vm.config.name]
		},
    }
</script>

<style lang="scss">
.custom-resizer {  width: 100%;  height: 100%;}

.custom-resizer > .pane {  text-align: center;  margin: 10px;  overflow: auto;}

.custom-resizer.layout-v > .multipane-resizer {  margin: 0; left: 0;  position: relative;  border-style: solid; border-width: 0 thin 0 0; border-image: repeating-linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;}
.custom-resizer.layout-h > .multipane-resizer {  margin: 0; left: 0;  position: relative;  border-style: solid; border-width: thin 0 0; border-image: repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;}
</style>