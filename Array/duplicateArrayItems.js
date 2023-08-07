const numbers= [1,2,2,3,3,4,5];

const dup= numbers.filter((num,index,arr)=> arr.indexOf(num)==index);
console.log(dup);

//count
console.log(dup.length);