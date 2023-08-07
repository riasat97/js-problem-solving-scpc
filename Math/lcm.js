function lcm(n1, n2) {
	const maxNum= Math.max(n1,n2);
	let n= maxNum;
	return divideByBoth(n,n1,n2);
}
const divideByBoth= (n,n1,n2)=>{
	while(n){
		if(n%n1===0 && n%n2===0){
			return n;
		}
		n++;
	}
	return 1;
}

function lcm(n1, n2) {
	var smaller = Math.min(n1,n2);
	var larger = Math.max(n1,n2);
	
	var res = larger;
	while (res % smaller !== 0) {
		res += larger;
	}
	
	return res;
}