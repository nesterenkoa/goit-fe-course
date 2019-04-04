/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }
  
  turnOn(){
    this.running = true
  }
  
  turnOff(){
   this.running = false
  }
  
  accelerate(spd){
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd <= this.maxSpeed){
      this.speed = spd
    }
  }
  
  decelerate(spd){
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (spd <= this.maxSpeed && spd > 0){
      this.speed = spd
    }
  }
  
  drive(hours){
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (this.running === true) {
      this.distance =+ hours * this.speed
    }
  }
  static getSpecs (car) {
    console.log(car.maxSpeed, car.speed, car.running, car.distance)
  }
}




const car = new Car({ maxSpeed: 100 });

// car.turnOn();
// console.log(car.running); // true
//
// car.turnOff();
// console.log(car.running); // false
//
// car.accelerate(99);
// console.log(car.speed); // 99
//
// car.decelerate(88);
// console.log(car.speed); // 88
//
// car.drive(100);
// console.log(car.distance); // 0;
//
// car.turnOn();
// car.drive(100);
// console.log(car.distance); // // 8800



// task-4
/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/


car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
