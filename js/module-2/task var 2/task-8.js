// Напиши скрипт который:
//
//   - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
//   Используйте do...while.
// - Проверять что пользователь ввел не число не обязательно
// - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
// - После того как ввод был завершен, если массив не пустой,
//   скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
// Используйте цикл for...of
// */
let array = [];
let total = 0;

do {
  userInput = prompt("ВВедите число");
  const num = Number.parseInt(userInput);
  
  if ( userInput == num) {
    array.push(num);
  }
  else if (userInput === null && array.length == 0){
    alert("Приходите еще!");
  }
  else if ( userInput !== num && array.length == 0 ) {
    alert("Нужно ввести число!")
  }
} while (userInput !==null);
console.log(array);



for(let i = 0; i < array.length; i++){
  total += array[i];
}
console.log(total);
if (array.length) {
  alert(`Общая сумма чисел равна ${total}`);
}







