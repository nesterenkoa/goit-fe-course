//  Попросить пользователя ввести произвольную строку
//  и записать ее в переменную string

//  PS: для перебора массива используте цикл for или for...of


let string;
let arr;

string = prompt('Введите текст');
// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
arr = string.split(' ');
console.log(arr);

// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr
for(let i = 0; i < arr.length; i++) {
  console.log(i);
};

// Используя цикл, вывести в консоль все элементы массива arr
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
};

for(const value of arr) {
  console.log(value);
};

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
let index = 0;
for(const value of arr) {
  // console.log(index + ':' + value);
  console.log(`${index} : ${value}`);
  index++;
};

