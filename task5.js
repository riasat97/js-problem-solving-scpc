// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input 
//and return the result of the operation.

function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
      default:
        return 'Error: Invalid operator';
    }
  }

console.log(calculate(5, 3, '+')); // Output: 8 (5 + 3)
console.log(calculate(10, 4, '-')); // Output: 6 (10 - 4)
console.log(calculate(2, 7, '*')); // Output: 14 (2 * 7)
console.log(calculate(10, 2, '/')); // Output: 5 (10 / 2)
console.log(calculate(5, 0, '/')); // Output: "Error: Division by zero"
console.log(calculate(7, 3, '^')); // Output: "Error: Invalid operator"