function daysUntil2021(date) {
	const targetDate= new Date(2021,0,1);
	const parsedDate= new Date(date);
	const dateDiff= Math.abs(targetDate- parsedDate) ;
	const diffInDays= (((dateDiff/1000)/60)/60)/24;
	return diffInDays!==1? diffInDays+ ' days': diffInDays+ ' day';
}