// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in 
// reverse() method. 

const strRev=(str)=>{
    let revStr='';
    for (let i=str.length-1;i>=0;i-- ) {
       revStr+=str[i];
    }
    return revStr;
}
console.log(strRev('Hello world')); 