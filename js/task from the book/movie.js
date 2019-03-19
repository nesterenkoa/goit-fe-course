let age = 12 ;
const userInput = prompt('Напишите Ваш возраст');
const inputAge = Number.parseInt(userInput);

if (userInput == null) {
  alert('Приходите еще!');
} else if (inputAge >= age) {
  alert( "Приятного просмотра!");
} else {
  if (confirm("ВЫ в сопровождении взрослого?")){
    alert("Желаем Вам приятного просмотра!");
  } else {
    alert(" Фильм доступен для просмотра c 12 лет!Или в сопровождении взрослого!");
  }
}






if (inputAge  >= Number.parseInt(age)) {
  alert( "Приятного просмотра!");
  
} else if (userInput == null) {
  alert('Приходите еще!');
}
else if  (inputAge <= Number.parseInt(age)) {
  if (confirm("ВЫ в сопровождении взрослого?")){
    alert("Желаем Вам приятного просмотра!");
  }
  else {
    alert(" Фильм доступен для просмотра c 12 лет!Или в сопровождении взрослого!");
  }
}

