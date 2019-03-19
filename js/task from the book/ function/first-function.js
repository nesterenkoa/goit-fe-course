
var ourFirstFunction = function () {
  console.log("Привет, мир!");
};


let howManyTimes = 7;
let drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};

let double = function (number) {
  return number * 2;
};
double(2);
