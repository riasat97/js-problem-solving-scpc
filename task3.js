// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequentElementInArr= (arr)=>{
    const newArr={};
    arr.forEach((element,index) => {
       if(newArr[element])
       newArr[element]++;
       else newArr[element]=1;
    });
    let maxVal=0;
    let maxKey;
    for (const key in newArr) {
        if(newArr[key]>maxVal){
            maxVal= newArr[key];
            maxKey= key;
        }
    }
    return maxKey;
}
console.log(mostFrequentElementInArr([3, 5, 2, 5, 3, 3, 1, 4, 5]));