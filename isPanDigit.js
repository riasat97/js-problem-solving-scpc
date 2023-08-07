// const isPandigital=(num)=>{
//     const numArray= [0,1,2,3,4,5,6,7,8,9];
//     const splitNum= num.toString().split('').map(Number);
//     return numArray.every((num)=>{
//         return splitNum.includes(num)});
// }

function isPandigital(num) {
	//console.log(typeof num.toString()[0]);
	var allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	return allDigits.filter(digit => num.toString().includes(digit)).length == 10;
}

console.log(isPandigital(9814023568910));