
const countDownInterval=(count)=>{
console.log('time remaining',count);
const invervalId=setInterval(()=>{
    count--;
    console.log('time remaining',count);
    if(count<=0){
        clearInterval(invervalId);
    }
},1000)
}
countDownInterval(10);