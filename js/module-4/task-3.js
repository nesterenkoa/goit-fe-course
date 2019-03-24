/*
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
let countProps = function (a) {
  // let counter = 0;
  // for (let key in a) {
  //   counter+=1;
  // }
  // return counter
  return Object.keys(a).length
}

// alert( "Всего свойств: " + counter );

console.log(countProps({})); // 0

console.log(countProps({a: 1, b: 3, c: 'hello', gf:876})); // 3
