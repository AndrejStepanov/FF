<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex v-for="(arr, index) in colsData" :key="index"  :class="classes" >
				<c-input  v-for="row in arr"  :key="row.id"  :data="row" :needCheckBox="needCheckBox" :dialogId="dialogId" :paramsId="paramsId"/>
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
			dialogId: {type: Number},
			paramsId: {type: Number},
			needCheckBox: {type: String, default:'N'},
		},
		computed: {
			classes () {
				return [
					{'xs12': this.colsCnt==1},
					{'xs6': this.colsCnt==2},
					{'xs4': this.colsCnt==3},
					{'xs3': this.colsCnt==4},
				]
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
				vm.colsCnt=Math.ceil(len/MAX_INPUT_IN_COL)
				vm.colsCnt=vm.colsCnt>4?4:vm.colsCnt;
				rowInColA=Math.ceil(len/vm.colsCnt)
				for(let i=1; i<=vm.colsCnt;i++){
					colsData.push([]);
					if(rowInColB==0 && isInteger( (len-curRow)/(vm.colsCnt-i+1) )  )
						rowInColB=(len-curRow)/(vm.colsCnt-i+1)
					if(rowInColB>0)
						curRow+=rowInColB
					else
						curRow+=rowInColA
					checkRow.push(curRow);
				}
				vm.inputs.forEach((row,i )=>{
					if(checkRow.find(row =>row===i ) )
						col++;
					colsData[col].push(row);
				});
				vm.$root.$emit('dialog'+vm.dialogId+'InputsCols'+vm.paramsId, {rowInColA,colsCnt:vm.colsCnt}); 
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