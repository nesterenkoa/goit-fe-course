/*
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const randomNumber = Math.random() * 100; // случайное ЧИСЛО с плавающей точкой (float) 91.03123
const num = Math.floor(randomNumber); // toFixed округляет число в формате float до N символов после точки
let type = num % 2 ? 'odd' : 'even';
console.log(`${num} is ${type}`);
