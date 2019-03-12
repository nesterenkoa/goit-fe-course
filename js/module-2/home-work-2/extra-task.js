'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userInput;

do {
  userInput = prompt("Введите, пожалуйста, свой пароль") ;
  if (userInput == null){
    break;
  } else if (passwords.includes(userInput)) {
   alert('Добро пожаловать!');
   break;
 } else {
   attempts -= 1;
   alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
 }
  
  if (attempts === 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
} while (attempts > 0);


