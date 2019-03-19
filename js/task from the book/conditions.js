 let name = "Николай";
 userInput = prompt("Введите свое имя!");
if (userInput.length > name.length) {
  alert("Ну и длиннющее же у вас имя!");
}

else{
  alert("В Вашem имени меньшe 6 букв!");
 }
 console.log(userInput);


 var lemonChicken = false;
 var beefWithBlackBean = true;
 var sweetAndSourPork = true;
 if (lemonChicken) {
   console.log("Отлично! Я буду курицу с лимоном!");
 } else if (beefWithBlackBean) {
   console.log("Заказываю говядину.");
 } else if (sweetAndSourPork) {
   console.log("Ладно, закажу свинину.");
 } else {
   console.log("Что ж, остается рис с яйцом.");
 }
