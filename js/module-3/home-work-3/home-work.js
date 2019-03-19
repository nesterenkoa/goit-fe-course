const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16){
    return true
  } else {
    return false
  }
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login)
};

const addLogin = function(allLogins, login) {
  const valid = isLoginValid(login);
  if (!valid) {
    return console.log(`${login} Ошибка! Логин должен быть от 4 до 16 символов`);
  } else {
    const uniqueness = isLoginUnique(allLogins, login)
    if (uniqueness) {
      allLogins.push(login);
      console.log(`${login} Логин успешно добавлен!`)
    } else {
      console.log(`${login} Такой логин уже используется!`);
    }
    
  }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
