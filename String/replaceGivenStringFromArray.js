const str="Riasat Noor Raihan Noor"
const replace= "Noor";
const replaced= 'Ibnat'

 const strArr= str.split(' ');
// const indexOfReplace= strArr.indexOf(replace);

// if(indexOfReplace){
//     strArr[indexOfReplace]= replaced
// }
// console.log(strArr.join(' '));

//better way 

const afterStrReplaced= strArr.map((str)=> str.replace(replace,replaced));
console.log(afterStrReplaced.join(' '));

//oneline
console.log(str.replace(new RegExp(replace, "g"),replaced));
