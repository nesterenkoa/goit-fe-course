let sillyString = "эЙ, Как дЕла?" ;
let lowerString =   sillyString.toLowerCase();
let firstCharacter =  lowerString[0];
let   firstCharacterUpper = firstCharacter.toUpperCase();
let restOfString = lowerString.slice(1) ;

firstCharacterUpper+  restOfString;
console.log( firstCharacterUpper+  restOfString)

  // второй вариант
// let sillyString = "эЙ, кАК деЛа?";
// sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();


let nomer =[3,2,1];

nomer.join("больше,чем");
console.log(nomer.join(" больше,чем "));
