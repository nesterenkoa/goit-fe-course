const gospoda =  ["anna", "alexandr"] ;
const izvergi = ["anton", "tanya"];

 let userInput = prompt("Введите свое имя!");
 
 if (gospoda.includes(userInput.toLowerCase())) {
   alert(`Привет, о, Великая Госпожа ${userInput}!`);
 } else if (izvergi.includes(userInput.toLowerCase())) {
   alert("А, это ты...Изверг!");
 } else {
   alert ("Привет,незнакомец!");
 }
 
