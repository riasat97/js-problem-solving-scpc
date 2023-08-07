function numInStr(arr) {
	const numInArr=[];
	for (const item of arr){
		const itemArr= item.split('');
		const hasNum= itemArr.some(ele=> Number(ele));
		if(hasNum) numInArr.push(item);
	}
	return numInArr;
}

console.log(numInStr(["1a", "a", "2b", "b"]));