// Write a code to calculate if the string is palindrome ? (Use javascript only)

const isPalindrome=(str)=>{
    const string= str.toLowerCase();
    const revString= string.split('').reverse().join('');
    return string === revString? 'palindrome':'no';
}
console.log(isPalindrome('BMom'));