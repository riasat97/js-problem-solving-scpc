function countDuplicates(array) {
    let counts = {};
  
    array.forEach(element => {
        counts[element]= (counts[element] || 0)+1;
    });

    // array.forEach((num)=>{
    //     if(counts[num])
    //     counts[num]++;
    //     else
    //     counts[num]=1;
    // })

    let duplicateCounts= {};

    for (const key in counts) {
       if(counts[key]>1)
       duplicateCounts[key]=counts[key]
    }
  
    return duplicateCounts;
  }
  // Example usage (same as before)
  let numbers = [1, 2, 3, 4, 5, 2, 6, 3, 4,4];
  let duplicateCounts = countDuplicates(numbers);
  
  console.log(duplicateCounts);