/*
  Напиши функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
let isObjectEmpty = function (b) {
  // return !Object.keys(b).length
  if (Object.keys(b).length > 0) {
    return false
  } else {
    return true
  }
}


// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({a: 1})
); // false

console.log(
  isObjectEmpty({a: 1, b: 2})
); // false
