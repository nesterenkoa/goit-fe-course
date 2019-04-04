/*
  Напишите функию findGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const guests = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 }
];

 let getGuestById = (guests, id) => guests.find(ar => ar.id === id);

// Вызовы функции для проверки
console.log (getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}

console.log(getGuestById(guests, 1)); // {id: 1, name: 'Mango', age: 20}

console.log(getGuestById(guests, 5)); // undefined
