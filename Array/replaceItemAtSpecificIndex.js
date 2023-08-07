const arr= [1,2,3,4,5];
const index=1;
const item=0;

//using splice
//const newArr= arr.splice(1,1,item);
//console.log(arr);

//using slice
const newArr= [...arr.slice(0,index),item,...arr.slice(index+1)];
console.log(newArr);