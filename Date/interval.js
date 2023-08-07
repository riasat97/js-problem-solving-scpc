const intervalId=setInterval(()=>{
    console.log('log.........');
},5000);

setTimeout(()=>{
    clearInterval(intervalId);
},21000)
