
// cколько секунд в часе
const secondsInAMinute = 60;
const minutesInAHour  = 60;

let secondsInAHour = secondsInAMinute * minutesInAHour;
console.log(secondsInAHour);

// сколько секунд в сутках
const hoursInADay = 24;
 let secondsInADay = secondsInAHour * hoursInADay;
 console.log(secondsInADay);

 // сколько cекунд в году
const daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

// возраст в секундах
let age = 25;
let ageInSeconds = age  *  secondsInAYear;
console.log(ageInSeconds);

// // Инкремент и декремент
// let highFives = 0;
// ++highFives;
// 1
// ++highFives;
// 2
// --highFives;
// 1
//
// console.log(highFives);
//
// // += (плюс-равно) и –= (минус-равно)
//
// let x = 10;
// x = x + 5;
//  console.log(x);
//
//  // Аналогично записи:
// let y = 10;
// y += 5;
// console.log(x);
//
// // врздушные шарики:
// // let balloons = 100;
// // balloons *= 2;
// // console.log(balloons);
//
// let balloons = 100;
// balloons /= 4;
// console.log(balloons);


// Ваш возраст в секундах:
  const inputAge = prompt('Давайте узнаем Ваш возраст в секундах. Введите Ваш возраст.');
  const yourAge = inputAge * secondsInAYear;
  // alert( `Вот сколько секунд Вы прожили ${yourAge}`);
if (inputAge  == Number.parseInt(inputAge)) {
  alert( `Вот сколько секунд Вы прожили: ${yourAge}`);
} else if (inputAge == null) {
  alert( 'Приходите еще!' );
} else {
  alert( 'Необходимо было ввести целое число!' );
}

