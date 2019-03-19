const words = [];

for (let i = 0; i < 4; i++) {
  const userInput = prompt('Введите число');
  words.push(userInput);
  console.log(`Шаг ${i}, пользователь ввел ${userInput}, words ==`, words);
}

do {
  const userInput = prompt('закройте чтобы остановить');
  console.log('Вы ввели: ', userInput);
  if (userInput == null) {
    break;
  }
} while(true);

console.log('finished');
