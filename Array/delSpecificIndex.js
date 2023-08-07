const items=[1,3,5,6,7,9,11];
const index= 3;

//using splice
//const newItems= items.splice(index,1);
//console.log(newItems);
//console.log(items);

//using slice
const cleannedItems= [...items.slice(0,index),...items.slice(index+1) ];
console.log(cleannedItems);