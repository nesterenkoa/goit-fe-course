/*
  Напиши скрипт, который проверяет произвольную строку
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
let longestWord = '';

const words = message.split(' ');

console.log(words);

for (let i = 0; i < words.length; i++) {
  console.log(`i == ${i}  ----------------`);
  console.log(`Текущее слово "${words[i]}", longestWord == "${longestWord}"`);
  
  if (words[i].length > longestWord.length) {
    
    console.log('   присваиваем переменной longestWord значение ', words[i]);
    
    longestWord = words[i];
  }
}

console.log(longestWord); // 'force'
