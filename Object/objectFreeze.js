const obj={firstName:'riasat', lastName: 'raihan'};
Object.freeze(obj);
obj['firstName']= 'noor';
console.log(obj);