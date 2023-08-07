function LongestWord(sen) {
    const words = sen.split(' ');
    const max = words.reduce((prev, curr) => {
        let cleanedWord= curr.replace(/[^\w\s]/gi,'')
        return prev.length > cleanedWord.length ? prev : cleanedWord
    }, '');

    return max;

}
console.log(LongestWord('i$&&$$ love you'));  