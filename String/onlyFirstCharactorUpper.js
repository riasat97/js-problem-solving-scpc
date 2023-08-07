const days=[ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];

// const upperDays= days.map((day)=>{
//     const firstC=day.charAt(0).toUpperCase();
//     const rest= day.substring(1);
//     return firstC+rest;
// })
// console.log(upperDays);

//using for of

const upper=[];

for (const day of days) {
    const upperDay= day.charAt(0).toUpperCase()+ day.substring(1);
    upper.push(upperDay);
}
console.log(upper);