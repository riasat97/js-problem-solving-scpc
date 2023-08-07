const reverseOdd=(str)=>{
    const words= str.split(' ');
    const revWords= [];
    for (const word of words){
        if(word.length%2!==0){
            const rev=word.split('').reverse().join('');
            revWords.push(rev);
        }
        else revWords.push(word);
    }
    return revWords.join(' ');
}
console.log(reverseOdd("One two three four"));