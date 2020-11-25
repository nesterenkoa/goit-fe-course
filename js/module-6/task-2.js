/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/





// class StringBuilder {
//   constructor (string){
//     this._value = string;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = this._value + str
//   }
//   prepend(str) {
//     this._value = str + this._value
//   }
//   pad(str) {
//     this._value = str +  this._value + str
//   }
// }
//
//
// const builder = new StringBuilder('.');
//
// builder.append('^');
// console.log(builder.value); // '.^'
//
// builder.prepend('^');
// console.log(builder.value); // '^.^'
//
// builder.pad('=');
// console.log(builder.value); // '=^.^='
