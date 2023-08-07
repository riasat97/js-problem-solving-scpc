const isInt=(num)=>{
    return num%1===0;
}
const isInteger= (num)=>{
    return parseInt(num)===num;
}
console.log(Number.isInteger(1.1));
console.log(isInteger(1.2));
console.log(isInt(1));