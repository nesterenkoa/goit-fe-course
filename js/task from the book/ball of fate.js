let phrases =[
  " Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет"
];
let randomWord = phrases[Math.floor(Math.random() * phrases.length)];

const userInput = prompt('Задайте свой вопрос, и магический шар судьбы ВАм ответит=)');

if (userInput == null) {
  alert('Подумайте и приходите еще!');
}
  else {
  alert(`${randomWord}`);
  }

