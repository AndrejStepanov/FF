<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex v-for="(arr, index) in colsData" :key="index"  :class="[classes,  colsData.length>0&&index!=colsData.length? 'pr-3':'',  colsData.length>0&&index>0? 'pl-3':'' ]" >
				<c-input  v-for="(row, num) in arr" :ref="row.code" :key="row.id"  :data="row" :needCheckBox="needCheckBox" :needSign="needSign" :dialogId="dialogId" :paramsForm="paramsForm" :listItemMin="listItemMin" :needPT="allPT||num>0"/>
			</v-flex>
		</v-layout>
	</v-container>	
</template>

<script>
    import CInput from './c-input';

    export default {
		name:'c-input-cols',
        data: () => ({	
			colsCnt:0,
		}),
		props:{
			inputs: {type: Array, required: true},
			dialogId: {type: Number, defuault:0},
			paramsForm: {type: String, defuault:''},
			maxCols: {type: Number, defuault:4},
			maxInputCountInCol:{type: Number, defuault:0},
			fixColCnt:{type: Number, defuault:0},
			needCheckBox:{type:  Boolean, default:false},
			needSign:{type:  Boolean, default:false},
			listItemMin:{type:  Boolean, default:false},
			allPT:{type:  Boolean, default:false},
		},
		computed: {
			classes () {
				return [
					'xs'+(12/this.colsCnt),
				]
			},
			maxInputInCol(){
				return this.maxInputCountInCol>0?this.maxInputCountInCol:this.$h.MAX_INPUT_IN_COL
			},
			colsData(){
				let vm=this;
				let len = vm.inputs.length,
					rowInColA=0,
					rowInColB=0,
					curRow=0,
					col=0,
					checkRow=[],
					colsData=[]
				if(vm.fixColCnt>0)
					vm.colsCnt=vm.fixColCnt
				else{
					vm.colsCnt=Math.ceil(len/vm.maxInputInCol)
					vm.colsCnt=vm.colsCnt>vm.maxCols?vm.maxCols:vm.colsCnt;
				}
				if(vm.colsCnt>len)
					vm.colsCnt=len
				rowInColA=Math.ceil(len/vm.colsCnt)
				for(let i=1; i<=vm.colsCnt;i++){
					colsData.push([]);
					if(rowInColB==0 && vm.$h.isInteger( (len-curRow)/(vm.colsCnt-i+1) )  )
						rowInColB=(len-curRow)/(vm.colsCnt-i+1)
					if(rowInColB>0)
						curRow+=rowInColB
					else
						curRow+=rowInColA
					checkRow.push(curRow)
				}
				vm.inputs.forEach((row,i )=>{
					if(checkRow.find(row =>row===i ) )
						col++
					colsData[col].push(row)
				});
				vm.$root.$emit('dialog'+vm.dialogId+'InputsCols', {rowInColA,colsCnt:vm.colsCnt})
				return colsData
			},
		},
        components: {
            CInput,
        },
        methods: {
		},
        created: function (){
			
        },
    }
</script>