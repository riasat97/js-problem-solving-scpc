let array = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Alice" }];

let object = { id: 2, name: "Jane" };

let isPresent = array.some((obj)=> JSON.stringify(obj)=== JSON.stringify(object));

console.log(isPresent);  // true