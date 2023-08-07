const isAnagram=(str1,str2)=>{
    const first= str1.toLowerCase().split('').sort().reverse().join('');
    const second= str2.toLowerCase().split('').sort().reverse().join('');
    console.log(first===second);
}
isAnagram('Army','Mary')