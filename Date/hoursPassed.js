function hoursPassed(t1, t2) {
	console.log(t1,t2)
	let h1= parseInt(t1);
	let h2= parseInt(t2);
	if(t1 === t2)return 'No time has passed.';
	if(t1==='12:00 AM')h1=0;
	if(t1.slice(-2)==='AM' && t2.slice(-2)==='PM') return h2-h1+12+' hours';
	return h2-h1+ ' hours';
}