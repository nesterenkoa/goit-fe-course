let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

let randomBodyPart = randomBodyParts [Math.floor(Math.random() * randomBodyParts.length)];
let randomAbjective = randomAdjectives [Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords [Math.floor(Math.random() * randomWords.length)];

let userInput = prompt("Чтобы получить дразнилку напишите что-нибудь");

let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAbjective + " " + randomWord  + "!!!";
console.log(randomInsult);
// let randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");


if ( userInput == null ){
  alert(`Ах,так!!! Получай! ${randomInsult}`) ;
}

else
{
  alert(`${randomInsult}`);
}


