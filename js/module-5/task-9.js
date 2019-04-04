/*
* Напиши функию isGuestsActive(guests), принимающую массив объектов гостей.
* Функция возвращает true если значение поля active всех объектов true, в противном случае false.
*
* Используй метод every или some, никаких for!
*/



let isGuestsActive = (guests)=> guests.every(guest =>guest.active);
// Вызовы функции для проверки
console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true }
  ])
); // false

console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: true },
    { name: "Ajax", active: true }
  ])
); // true

console.log(
  isGuestsActive([
    { name: "Mango", active: true },
    { name: "Poly", active: true },
    { name: "Ajax", active: false }
  ])
); // false
