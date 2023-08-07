const orderedMatrix = (a, b) => {
    const totalArr = [];
    let count=1;
    for (let i = 0; i < a; i++) {
        let arr = [];
        for (let j = 0; j < b; j++) {
            arr.push(count++);
        }
        totalArr.push(arr);
    }
    return totalArr;
}
console.log(orderedMatrix(5, 5))