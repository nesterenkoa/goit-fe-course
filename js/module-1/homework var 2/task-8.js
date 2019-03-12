/*
  Создай скрипт поиска отелей, где пользователь
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов"
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

const numText = 'Введите число от 1 до 5';
const text1 = 'Каталог хостелов';
const text2 = 'Каталог бюджетных отелей';
const text3 = 'Каталог отелей ***';
const text4 = 'Каталог отелей ****';
const text5 = 'Каталог лучших отелей';
const cancelText = 'Нам очень жаль, приходите еще';
const inputError = 'Неверный ввод, возможные варианты 1-5!';

let userInput = prompt(numText);
let number = Number.parseInt(userInput);
if (userInput == null) {
  alert(cancelText);
}
  else if (userInput != number)
  {
    alert(inputError);
  }
  else if (number < 1 || number > 5) {
  alert(inputError);
}
else {
  switch (number) {
  case 1:
    alert(text1);
    break;
  case 2:
    alert(text2);
    break;
  case 3:
    alert(text3);
    break;
  case 4:
    alert(text4);
    break;
  case 5:
    alert(text5);
    break;
}

}
