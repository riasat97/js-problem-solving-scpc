const date1= new Date('2023-06-23');
const date2= new Date('2023-06-22');
//console.log(date1,date2);
if(date1>date2)
console.log(`${date1} is after ${date2}`);
else if(date1<date2)
console.log(`${date2} is before than ${date1}`);
else
console.log('both dates are equal');