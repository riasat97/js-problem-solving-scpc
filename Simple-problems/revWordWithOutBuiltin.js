function reverseWords(str){
    const words= str.split(' ');
    const res=[];
    for(let i=words.length-1;i>=0;i--){
        res.push(words[i])
    }
    return res.join(' ');
}


const myString = 'I am a good boy';
console.log(reverseWords(myString));