/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const kanctovary = {
  pencil: 10,
  pen: 15,
  notebook: 20
};


function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.sale = function (product) {
    
    if (this.products[product]) {
      console.log(`продаю вам 1 ${product} по цене ${this.products[product]}`)
    } else {
      console.log(`Извините, но у меня нет ${product}, я торгую лишь ${Object.keys(this.products)}`)
    }
  }
}
const x = new Cashier('Lenok', products);

const y = new Cashier('Oleg', kanctovary);


























// this.customerMoney = 0;
//
// this.setCustomerMoney = function(value){
//
//
// };
// this.countTotalPrice = function (order) {
//
// };
// this.countChange = function (totalPrice) {
//
// };
//  this.onSuccess = function (change) {
//
// };
//  this.onError = function () {
//
//  };
//  this.reset = function () {
//    this.customerMoney = 0;
//  };



// /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };
//
// /* Пример использования */
// const mango = new Cashier('Mango', products);
//
// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0
//
// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// const totalPrice = mango.countTotalPrice(order);
//
// // Проверям что посчитали
// console.log(totalPrice); // 110
//
// // Вызываем setCustomerMoney для запроса денег покупателя
// mango.setCustomerMoney(300);
//
// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300
//
// // Вызываем countChange для подсчета сдачи
// const change = mango.countChange();
//
// // Проверяем что нам вернул countChange
// console.log(change); // 190
//
// // Проверяем результат подсчета денег
// if(change !== null) {
//   // При успешном обслуживании вызываем метод onSuccess
//   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
// } else {
//   // При неудачном обслуживании вызываем метод onError
//   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }
//
// // Вызываем reset при любом исходе обслуживания
// mango.reset();
//
// // Проверяем значения после reset
// console.log(mango.customerMoney); // 0


/*
  Необходимо создать функцию-конструктор Cashier.
  
  Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе):
    - name - строка, имя кассира, передается при вызове конструктора
    
    - productDatabase - объект база данных продуктов, передается при вызове конструктора
    
    - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0
    
    - setCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.
    
    - countTotalPrice(order) - метод, получает объект списка покупок, считает общую стоимость покупок.
      🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
         а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
         Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
     
    - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
        * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
        * Если денег было передано достаточно, возвращает разницу денег.
        * Если в customerMoney меньше денег чем в totalPrice, возвращает null
        
    - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.
    
    - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'
    
    - reset() - метод, сбрасывает поле customerMoney 0.
*/
