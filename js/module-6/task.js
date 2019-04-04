/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/



class Car {
  constructor({maxSpeed = 0, price = 0}) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this.price = price;
  }
  
  get price () {
    return this._price;
  }
  
  set price (value) {
    this._price = value;
  }
}

const avto = new Car({ maxSpeed: 50, price: 2000 });

console.log(avto.price);// 2000

avto.value = 4000;
console.log(avto.value); // 4000
