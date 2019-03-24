/*
  Напиши функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа.
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
  { name: 'Poly', age: 7, mood: 'happy'},
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

const getAllPropValue = function (arr, key) {
  let x =[];
  for (let obj of arr) {
    x.push(obj[key]);
  }
  return x
};

console.log(getAllPropValue(users, "mood"));
console.log(getAllPropValue(users, "age"));
console.log(getAllPropValue(users, "name"));



