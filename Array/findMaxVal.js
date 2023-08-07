const numbers= [1,2,4,5,6,23,233];
// way 1

//console.log(numbers.sort((a,b)=>b-a)[0]);

//way 2

//console.log(Math.max(...numbers));

//way 3
// let max= numbers[0];
// for (const num of numbers) {
//     if(num>max)
//     max=num;
// }
// console.log(max);

// way 4

const max= numbers.reduce((prev,curr)=>{
   return prev>curr?prev:curr
})
console.log(max);