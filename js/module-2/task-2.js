/* Есть массив имен пользователей */

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
users.shift();
console.log(users);// ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
users.pop(); // ["Poly", "Ajax"]
console.log(users);
// Добавить в начало массива любое имя
users.unshift ("Best");
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push("Rom", "Cola")
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
console.log(users.length);
console.log(typeof users);
