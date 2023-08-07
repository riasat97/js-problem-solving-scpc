const date1= new Date('2023-06-23');
const date2= new Date('2023-06-22');
//console.log(date1,date2);
const difference= Math.abs(date2-date1);
console.log(difference);

const diffInSeconds= difference/1000;
console.log(diffInSeconds);
const differenceInMintues= difference/(1000*60);
console.log(differenceInMintues);
const diffInHours= difference/(1000*60*60);
console.log(diffInHours);
const diffInDays= difference/(1000*60*60*24);
console.log(diffInDays);

