function afterNDays(days, n) {
	console.log(days,n);
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const daysAfterIncrement=[];
	for(let day of days){
		const indexOfDay= daysOfWeek.indexOf(day);
		const dayAfterIncrement= daysOfWeek[(indexOfDay+n) % 7];
		daysAfterIncrement.push(dayAfterIncrement);
	}
	return daysAfterIncrement
}