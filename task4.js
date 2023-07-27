// Task 4: Create a function that takes a sorted array of numbers and a target value as input. 
// The function should find two numbers in the array that add up to the target value. 
// Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

// O(n^2)
const sumOfTwoNumberSEqTarget= (arr,target)=>{
    const originalArr= [...arr];
    
    for (const keyOrg in originalArr) {
        const arrExceptItem= originalArr.filter(element=> element!== originalArr[keyOrg]);
        for (const key in arrExceptItem) {
            if(arrExceptItem[key]+originalArr[keyOrg] === target) {                
                return [parseInt(keyOrg) ,originalArr.indexOf(arrExceptItem[key])];
            }
        }
    }
    return [];

}
// O(n)
function findTwoSumIndices(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }
console.log(sumOfTwoNumberSEqTarget([1, 3, 6, 8, 11, 15], 9));
console.log(findTwoSumIndices([1, 3, 6, 8, 11, 15], 9));