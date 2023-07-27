const secondSmallestNumInArr= (arr)=>{
    if (arr.length<2)
    return 'array must oontain atleast two elements';
    const sortedArr= arr.slice().sort((a,b)=>a-b);
    return sortedArr[1];
}

console.log(secondSmallestNumInArr([4,2,1,5,6,7,8,3]));