const items= [1,3,5,6,7,9,11];
const del= 6;

const cleannedArray= items.filter((item)=> item!==del);
console.log(cleannedArray);