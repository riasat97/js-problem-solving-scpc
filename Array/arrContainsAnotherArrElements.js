const arr1= [1,2,3,4,5,6,7,8,9,10]
const arr2= [1,2];

const matched= arr1.some((item)=>{
    return arr2.includes(item)
});
console.log(matched);

const matchedAll= arr2.every((item)=>{
    return arr1.includes(item)
});
console.log(matchedAll);