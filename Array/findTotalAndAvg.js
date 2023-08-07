const numbers= [1,2,3,4,5,6,7,8,9,10];

//normal way
// let total= 0;
// for (const num of numbers) {
//     total+=num
// }
// console.log(total);
// console.log(total/numbers.length);

//js way
const total= numbers.reduce((acc,current)=> acc+current,0);
console.log(total);
console.log(total/numbers.length);