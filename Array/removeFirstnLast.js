const studentIds= [1,2,3,4,5,6,7,8,9,10];

//using array slice
//console.log(studentIds.slice(1));//removing first element

//console.log(studentIds.slice(0,9));//removing last element
//console.log(studentIds.slice(0,-1));

//using array splice
//console.log(studentIds.splice(0,1));// removing first item
//console.log(studentIds.splice(-1));// removing last item
console.log(studentIds.splice(studentIds.length-1,1));
console.log(studentIds);

//using pop for removing last item
//const afterRemoving= studentIds.pop();
//console.log(studentIds);