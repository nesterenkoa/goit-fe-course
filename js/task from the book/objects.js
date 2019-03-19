let dog = { name: "Оладушек", age: 6, color: "белый", bark: "Гав тяф тяф!" };
let cat = { name: "Гармония", age: 8, color: "черепаховый" };
Object.keys(dog);
Object.keys(cat);

let cat ={};
cat ["legs"]= 3;
cat ["name"]= "Bestik";
cat ["color"]= "grey";

console.log(cat);

let cat ={};
cat.legs =3;
cat.name = "Bestik";
cat.color = "grey";


// Массивы Объектов
let dinosaurs = [
  {name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" }
];
console.log(dinosaurs[0] ["name"]);
console.log(dinosaurs[1].period);



let anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

let friends = [anna, dave, kate];
console.log(friends[0]);
console.log(friends[1].luckyNumbers[0]);

let owedMoney = {};
owedMoney ["Джимми"] = 5;
owedMoney ["Анна"] = 3;
owedMoney ["Джимми"]+=5
 console.log(owedMoney);

// Храние информации о фильмах
let movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD"
  },
  "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD"
  }, "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"], format: "Blu-ray"
  }
};
let findingNemo = movies["В поисках Немо"];
findingNemo.duration;
findingNemo.format;


let cars = {
  releaseDate: 2006,
  duration:117,
  actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
  format: "Blu-ray"
};
movies["Тачки"] = cars;

