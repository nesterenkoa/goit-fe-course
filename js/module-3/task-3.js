/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
const checkForSpam = function (str) {
  return str.includes("spam") || str.includes("sale")
}

// Вызовы функции для проверки
console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

