const getDays=(date1,date2)=>{
    const diff= Math.abs(date1-date2);
    return (((diff/1000)/60)/60)/24;
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ));