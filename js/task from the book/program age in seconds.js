
// Ваш возраст в секундах:
const  secondsInAYear = 31536000;
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
