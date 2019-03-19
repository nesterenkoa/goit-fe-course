//
// let animals = ["лев", "фламинго", "белый медведь", "удав"];
// let userInput = prompt("ВВедите число от 1 до 3.");
// for (let i = userInput; i <= animals.length; ) {
//   alert("В этом зоопарке есть " + animals[i] + ".");
// };

for (let x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

let x = 3;
while (x < 10000) {
  x = x * 3;
}
console.log(x);
****************

let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
let text ="прекрасное животное";

for (let i = 0; i < animals.length; i++)
  console.log(animals[i] = animals[i] + "-"+ text);
***************
​
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var word = "";
while (word.length < alphabet.length) {
  word += alphabet[Math.floor(Math.random() * alphabet.length)];
}


***************
let  input = "javascript is awesome";
let output = "";
for (let i =0; i < input.length;i++) {
  console.log(input[i]) ;
  const bukwa = input[i];
  // switch (bukwa.toLowerCase()) {
  //   case "a":output += 4;
  //   break;
  //   case "e": output +=3;
  //   break;
  //   case "i": output +=1;
  //   break;
  //   case "o": output +=0;
  //   break;
  //   default: output += bukwa;
  // }
  
  const dictionary = {
    a : 4,
    e : 3,
    i : 1,
    o : 0
  };
  
  if (dictionary.hasOwnProperty(bukwa)) {
    output += dictionary[bukwa];
  } else {
    output += bukwa;
  }
}

************
