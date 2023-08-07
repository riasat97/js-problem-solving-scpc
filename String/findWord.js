const isLowerCase=(character)=>{
    return character=== character.toLowerCase();
}
const detetWord=(str)=>{
    const strArr= str.split('');
    const strArrInLowerCase= strArr.filter((character)=> isLowerCase(character));
    return strArrInLowerCase.join('');
}

console.log(detetWord('UcUNFYGaFYFYGtNUH'));