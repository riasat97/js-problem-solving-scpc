function numLeapYears(years) {
	const [yearStart, yearEnd] = years.split('-').map(Number);
	console.log(yearStart, yearEnd);
	let count=0;
	for( let i= yearStart; i<=yearEnd; i++){
		const leapYear= isLeapyear(i);
		if(leapYear) count++;
	}
	return count;
}
// const isLeapyear= (year)=>{
// 	if ((year%4===0 && year%100!==0) ||year%400==0)
// 		return true;
// 	return false;
// }
const isLeapyear= (year)=>{
	const date= new Date(year,1,29).getMonth();
    if (date===1)//still feb- will output march(2) in case of not a leap year
    return true;
    else return false;
}
console.log(numLeapYears("1980-1984"));