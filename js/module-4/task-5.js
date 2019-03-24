/*
  Напиши функцию countTotalSalary(salaries).
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

let countTotalSalary = function (salaries) {
  sum = 0;
  for (let name in salaries) {
    sum += salaries[name];
  }
  return sum
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

// Вызовы функции для проверки
console.log(
  countTotalSalary({})
); // 0
