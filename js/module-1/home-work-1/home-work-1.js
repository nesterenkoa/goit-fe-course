'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const loginText = 'Введите, пожалуйста, Ваш ЛОГИН';
const passwordText = 'Введите, пожалуйста, Ваш ПАРОЛЬ';
const canceledText = 'Отменено пользователем!';
const welcomeText = 'Добро пожаловать!';
const loginErrorText = 'Доступ запрещен, неверный логин!';
const passwordErrorText = 'Доступ запрещен, неверный пароль!';

const login = prompt(loginText);
// // Variant 1
// if (login == adminLogin) {
//   const password = prompt(passwordText);
//
//   if (password == null) {
//     alert(canceledText)
//   } else if (password !== adminPassword) {
//       alert(passwordErrorText)
//   } else {
//     alert(welcomeText)
//   }
// } else if (login !== adminLogin) {
//   alert(loginErrorText);
// } else {
//   alert(canceledText)
// }

// Variant 2
if (login == null) {
  alert(canceledText)
} else if (login !== adminLogin) {
  alert(loginErrorText);
} else {
  const password = prompt(passwordText);
  
  if (password == null) {
    alert(canceledText)
  } else if (password !== adminPassword) {
    alert(passwordErrorText)
  } else {
    alert(welcomeText)
  }
}
