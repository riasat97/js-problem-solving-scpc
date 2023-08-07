function groupBy(array, key) {
    return array.reduce((result, element) => {
      const groupValue = element[key];
      if (!result[groupValue]) {
        result[groupValue] = [];
      }
      result[groupValue].push(element);
      return result;
    }, {});
  }
  
  // Example usage
  const persons = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
  ];
  
  const groupedByAge = groupBy(persons, 'age');
  console.log(groupedByAge);