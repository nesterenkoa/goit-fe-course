// Напиши скрипт который:
//
//   - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
//
// - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
//
// - Если введенное значение совпадает со значением переменной correctPassword,
//   показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
//
// - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
// */


let cancelText = "Ожидаю ввода пароля";
let correctPasswordText = "Доступ в секретный бункер разрешен!";
let text = "Активирована система защиты";
const correctPassword = 123;
 let userInput = prompt("Введите пароль доступа");
 
 if (userInput == null) {
   alert(`${cancelText}`);
 }
 
 else if (Number.parseInt(userInput) === correctPassword){
   alert(`${correctPasswordText}`);
 }
 
 else {
   alert(`${text}`);
 }
