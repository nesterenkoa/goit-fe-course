/*
  Напиши функцию getTotal(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1
};

const orderC = {
  bread: 2,
  cheese: 2
};

const getTotal = function(items, order) {
  return Object.keys(order).reduce((acc, key) => acc += items[key] * order[key], 0)
};

// Вызовы функции для проверки
console.log(getTotal(products, orderA)); // 140
console.log(getTotal(products, orderB)); // 120
console.log(getTotal(products, orderC)); // 80
