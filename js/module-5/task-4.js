/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей.
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

let getActiveGuests= (guests)=>  guests.filter( arr => arr.isActive);

// Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax
