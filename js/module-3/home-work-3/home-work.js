'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function(login) {
//   if (login.length >= 4 && login.length <= 16){
//     return true
//   } else {
//     return false
//   }
// };

const  isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login)
};

const infoInputError = function (login) {
  console.log(`${login} Ошибка! Логин должен быть от 4 до 16 символов`);
};

const infoCorrectInput = function (login) {
  console.log(`${login} Логин успешно добавлен!`)
};

const infoRelogin = function (login) {
  console.log(`${login} Такой логин уже используется!`);
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return infoInputError(login)
  }
  
  if (!isLoginUnique(allLogins, login)) {
    return infoRelogin(login)
  }
  
  allLogins.push(login);
  return infoCorrectInput (login)
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
