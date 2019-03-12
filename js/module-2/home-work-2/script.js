'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число');
  const isNumber = Number.parseInt(userInput) == userInput;
  if (userInput === null) {
    break;
} else if (isNumber) {
    numbers.push(Number.parseInt(userInput))
  } else if (!isNumber) {
    alert('Введите число!')
  }
} while (true);

console.log(numbers);

for(let i = 0; i < numbers.length; i++){
  total += numbers[i];
}
console.log(total);
if (numbers.length) {
  alert(`Общая сумма чисел равна ${total}`);
}
