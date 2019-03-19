/*
  Напиши фукнцию findLongestWord(str), которая принимает
  параметром произвольную строку и возвращает самое длинное слово в этой строке.
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


// Вызовы функции для проверки
const findLongestWord = function (str) {
  const array = str.split(" ");
  let word = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > word.length) {
      word = array[i];
    }
  }
  return word;
}
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // 'Google'

console.log(
  findLongestWord("May the force be with you")
); // 'force'



