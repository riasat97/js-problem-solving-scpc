const isPalindrome=(str)=>{
    const string= str.toLowerCase();
    const revStr= string.split('').reverse().join('');
    return string===revStr;
}
console.log(isPalindrome('momi'));