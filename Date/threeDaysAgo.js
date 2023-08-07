function threeDaysAgo(date) {
	const subtractThreeDays= date.getDate()-3;
	date.setDate(subtractThreeDays);
	console.log(date.toISOString().slice(0, 10));
	const year= date.getFullYear();
	const month= date.getMonth()+1;
	const monthFormatted= ('0'+month).slice(-2)
	const day= date.getDate();
	const dayFormatted= ('0'+day).slice(-2)
	return `${year}-${monthFormatted}-${dayFormatted}`;
}

threeDaysAgo(new Date());