// Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)
const countVowelsAndConsonants=(str)=>{
    const string= str.toLowerCase(str);
    let vowels=0;
    let consonants=0;
    for( let char of string){
        if(/[a-z]/.test(char)){
            if(/[aeiou]/.test(char))
            vowels++;
            else consonants++;
        }
    }
    return {vowels,consonants};
}
const str='Hello World';
console.log('The number of Vowels: ',countVowelsAndConsonants(str).vowels);
console.log('The number of Consonants: ',countVowelsAndConsonants(str).consonants);