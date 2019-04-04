'use strict';


const scientist = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
},
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];




// 1) отримати масив вчених що народилися в 19 ст

//filter
const scientists19 = (scientist) => scientist.filter (key => key.year >= 1801 && key.year<= 1900).map(scientist =>scientist.first).sort();
// console.log(scientists19(scientist));
// console.log(scientist19.first)


// 2) знайти суму років скільки прожили всі вченні
const  scientistsReduce =(scientist) =>scientist.reduce((acc, arr)=> acc += (arr.passed -arr.year),0);
// console.log (scientistsReduce(scientist));
//reduce


// 3)  Вывести кто сколько прожил

const  scientistsLive =(scientist)=> scientist.map(ar => `${ar.first} ${ar.passed - ar.year}`);
// console.log(scientistsLive(scientist));


// 3) Відсортувати вчених по алфавіту
const  scientistsAlf = (scientist)=> scientist.sort((ar) => ar.first ) ;
// console.log(scientistsAlf(scientist));
//sort

// 4) Відсортувати вчених по даті народження
const  scientistsAge = (scientist)=> scientist.sort((a ,b) => a.year - b.year) ;
// console.log(scientistsAge(scientist));
//sort

//sort



// 5) Відсортувати вчених по кількості прожитих років

// const  scientistsLiveSort =(scientist)=> scientist.map(ar => ({name: ar.first, years: ar.passed - ar.year})).sort((a, b) => a.years - b.years);
// console.log(scientistsLiveSort(scientist));

//sort




/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/*
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//   const result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] > num) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

const findGreaterThanMap =(num, arr) => arr.filter(ar => ar > num);


console.log( findGreaterThanMap(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
console.log( findGreaterThanMap(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
console.log( findGreaterThanMap(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
****************************
/*
  Функция multiplyBy принимает два параметра - число и массив.
  Возвращает массив все значения которого умножены на число.
*/
// const multiplyBy = (num, arr) => {
//   let result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     result.push(arr[i] * num);
//   }

//   return result;
// };
const multiplyBy = (num,arr) => arr.map(ar => ar*num);

console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]
******************
/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
// function summAllNumbers(...args) {
//   let accumulator = 0;

//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }

//   return accumulator;
// }
const summAllNumbers = (arr) => arr.reduce((acc,arr) =>acc + [arr],0);

console.log( summAllNumbers(1, 2, 3) ); // 6
console.log( summAllNumbers(1, 2, 3, 4) ); // 10
console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
// const findEvery = (num, arr) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }

//   return true;
// };
const findEvery = (num, arr) => arr.every(ar => ar >= num);
console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true














