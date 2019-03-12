/*
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:
    - "even" если value четное
    - "odd" если value не четное

  PS: попробуй использовать тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
//
// console.log(`${value} is ${type}`);


const randomNumber = Math.random() * 100; // случайное ЧИСЛО с плавающей точкой (float) 91.03123
const num = Math.floor(randomNumber); // toFixed округляет число в формате float до N символов после точки
let type = num % 2 ? 'odd' : 'even';
console.log(`${num} is ${type}`);
