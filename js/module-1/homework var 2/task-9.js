/*
  Пользователь может оформить доставку товара к себе в страну,
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крeдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/


let china = "Китай";
let southAmerica = "Южная Америка";
let australia = "Австралия ";
let india = "Индия";
let jamaica = "Ямайка";

let chinaPrice = 100;
let southAmericaPrice = 250;
let australiaPrice = 170;
let indiaPrice = 80;
let jamaicaPrice = 120;
let currency = "крeдитов";

const country = prompt("Ввудите Вашу страну");
switch (country.toLowerCase()) {
  case "китай":
    alert(`Доставка в ${china} будет стоить ${chinaPrice} ${currency}`);
    break;
  case "южная Америка":
    alert(`Доставка в ${southAmerica} будет стоить ${southAmericaPrice}  ${currency}`);
    break;
  case "австралия":
    alert(`Доставка в ${australia} будет стоить ${australiaPrice}  ${currency}`);
    break;
  case "индия":
    alert(`Доставка в ${india} будет стоить ${india}  ${currency}`);
    break;
  case "ямайка":
    alert(`Доставка в ${jamaica} будет стоить ${jamaicaPrice}  ${currency}`);
    break;
  default:
    alert("В вашей стране доставка не доступна");
}





