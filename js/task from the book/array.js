let dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];
// dinosaursAndNumbers[2]; вернет весь вложенный маcсив, то dinosaursAndNumbers[2][0]; — лишь первый элемент этого
// // вложенного массива ("трицератопс").

// dinosaursAndNumbers[2];
// ["трицератопс", "стегозавр", 3627.5]
// dinosaursAndNumbers[2][0];
// "трицератопс"

// let animals =[];
// animals.push("cat");
// console.log(animals);
// animals.push("dog");
// animals.push("Bestik");
// console.log(animals);
// animals.unshift("pug");
// console.log(animals);
// animals.length
//
// animals.push("dig, oli, yma");
// console.log(animals);
//
// let lastAnimals = animals.pop();
// console.log(lastAnimals);
// animals.unshift(lastAnimals);
// console.log(animals);
// let firstAnimals = animals.shift();
// console.log(firstAnimals);
// console.log(animals);
//
// let name= animals[3];
// console.log(name);


let furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
let scalyAnimals = ["Удав", "Годзилла"];
let featheredAnimals = ["Ара", "Додо"];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals );
console.log(furryAndScalyAnimals);

furryAnimals.join("-");
