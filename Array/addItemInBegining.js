const array= [2,3,4,5];
// const addedOne= array.splice(0,0,1);
// console.log(addedOne);
// console.log(array);

//using spread operator
const newArray=[1,...array];
console.log(newArray);

// at end

const endArr= [...array,1];
console.log(endArr);