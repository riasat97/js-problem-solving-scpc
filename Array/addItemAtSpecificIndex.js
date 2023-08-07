const items= [1,2,4,5,6,7];
const item=3;
const index=2;

//using splice
//const newArr= items.splice(2,0,item);
//console.log(items);

//using slice
const newArr= [...items.slice(0,index),item,...items.slice(index)];
console.log(newArr);