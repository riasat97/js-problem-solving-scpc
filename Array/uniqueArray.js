const numbers= [1,2,2,3,3,4,5,0];
const unique= numbers.filter((num,index,arr)=> arr.indexOf(num)===index);
const sorted= unique.sort();
console.log(sorted);