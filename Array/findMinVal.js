const numbers= [1,3,5,7,9,0];

//way 1
//console.log(numbers.sort()[0]);

//way 2
//console.log(Math.min(...numbers));

//way 3
// let min= numbers[0];

// for (const num of numbers) {
//     if(num<min)
//     min=num;
// }
// console.log(min);

// reduce

const min= numbers.reduce((prev,current)=>{
   return prev<current?prev:current;
   //return Math.min(prev,current)
})
console.log(min);