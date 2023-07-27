// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumOfPositiveNumBersInArray=(arr)=>{
    let sum=0;
    for (const item of arr) {
        if(item%2>=0)
        sum+=item;
    }
    return sum;
}
console.log(sumOfPositiveNumBersInArray([2, -5, 10, -3, 7]));