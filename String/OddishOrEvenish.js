function oddishOrEvenish(num) {
	const splitNumArr= num.toString().split('').map(Number);
	const total= splitNumArr.reduce((total,num)=>total+=num,0);
	return total%2===0?'Evenish':'Oddish';
}
console.log(oddishOrEvenish(43));