// const fact=(num)=>{
//     let res=1;
//     for(let i=2;i<=num;i++){
//         res*=i;
//     }
//     return res;
// }
const fact=(num)=>{
    if(num===0)
    return 1;
    return num* fact(num-1);
}
console.log(fact(5));