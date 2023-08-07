// const countDown=(count)=>{
//     console.log('remaining time in seconds ',count);
//     if(count>0){
//         setTimeout(()=>{
//             countDown(count-1);
//         },1000)
//     }

// }
const countDown=(count)=>{
    console.log('time remaining',count);
    if(count>0){
        setTimeout(()=>{
            countDown(count-1);
        },1000)
    }
    
}
countDown(10);