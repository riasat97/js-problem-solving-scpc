const findDup= (arr)=>{
    const dup= arr.filter((num,index)=> arr.indexOf(num)==index );
    return dup;
}

const numbers= [1,2,3,4,5,6,7,8,9,10,2,3,5,8];
console.log(findDup(numbers));
