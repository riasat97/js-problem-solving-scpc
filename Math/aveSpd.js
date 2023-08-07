const aveSpd=(upTime, upSpd, downSpd)=>{
    const uptimeInhr= upTime/60;
    const downTime= (uptimeInhr*upSpd)/downSpd;
    return (uptimeInhr*upSpd+ downTime*downSpd)/(uptimeInhr+downTime);
}
console.log(aveSpd(18, 20, 60));