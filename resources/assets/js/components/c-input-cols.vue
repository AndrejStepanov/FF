<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex v-for="(arr, index) in colsData" v-bind:key="index"  :class="classes">
				<c-input  v-for="row in arr"  v-bind:key="row.id" v-bind:id="row.id" v-bind:columnCode="row.column_code" v-bind:columnName="row.column_name" v-bind:columnDesc="row.column_desc" :dialogId="dialogId"
					v-bind:procType="row.proc_type" v-bind:isNull="row.isNull" v-bind:columnType="row.column_type" v-bind:columnSize="row.column_size" v-bind:cssClass="row.css_class" v-bind:sortSeq="row.sort_seq" />
			</v-flex>
		</v-layout>
	</v-container>	
</template>

<script>
    import CInput from './c-input';

    export default {
		name:'c-input-cols',
        data: () => ({	
			colsData:[],
			colsCnt:0,
		}),
		props:{
			data: {type: Array, required: true},
			dialogId: {type: Number},
		},
        components: {
            CInput,
        },
        methods: {
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
		},
        created: function (){
			let vm=this;
			let len = vm.data.length,
				rowInColA=0,
				rowInColB=0,
				curRow=0,
				col=0,
				checkRow=[]
			vm.colsCnt=Math.ceil(len/window._Fun.MAX_INPUT_IN_COL)
			vm.colsCnt=vm.colsCnt>4?4:vm.colsCnt;
			rowInColA=Math.ceil(len/vm.colsCnt)
			for(let i=1; i<=vm.colsCnt;i++){
				vm.colsData.push([]);
				if(rowInColB==0 && window._Fun.isInteger( (len-curRow)/(vm.colsCnt-i+1) )  )
					rowInColB=(len-curRow)/(vm.colsCnt-i+1)
				if(rowInColB>0)
					curRow+=rowInColB
				else
					curRow+=rowInColA
				checkRow.push(curRow);
			}
			vm.data.forEach((row,i )=>{
				if(checkRow.find(row =>row===i ) )
					col++;
				vm.colsData[col].push(row);
			});
			
        },
    }
</script>