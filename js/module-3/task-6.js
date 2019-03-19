/*
  Напиши функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*/

const findLargestNumber = function (array) {
  let num = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }
  }
  return num;
};
// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // 128
