const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
console.log(hotel.name)

hotel.name = "Best Hotel";

console.log(hotel.name)

hotel.address = "1, Beach ave.";
hotel.manager = "Chuck Norris";
console.log(hotel);
************

let name = "Resort Hotel";
let stars = 5;

let hotel ={
  name,
  stars,
  capacity:400
}

console.log(hotel)
*************

const key = 'person';

const object = {};

object[key] = 'Mango';

console.log(object); // {person: 'Mango'}
delete hotel.person
  console.log(object)
*******

const hotel = {
  name : "Resort Hotel",
  stars: 5,
  guests: undefined
};

console.log(hotel.stars); // 5
let hasStars = hotel.hasOwnProperty('stars');
console.log(hasStars); // true

console.log(hotel.pool); // undefined
let hasPool = hotel.hasOwnProperty('pool');
console.log(hasPool); // false
*************


const hotel = {
  name : "Resort Hotel",
  stars: 5,
  capacity: 100,
};

// Перебор ключей key объекта hotel
for (const key in hotel) {
  console.log('Key: ', key);
}

// Key: name
// Key: stars
// Key: capacit
***************
const hotel = {
  name : "Resort Hotel",
  stars: 5,
  capacity: 100,
};

const keys = Object.keys(hotel); //["name", "stars", "capacity"]
const values = Object.values(hotel); //["Resort Hotel", 5, 100]
const entries = Object.entries(hotel); //[Array(2), Array(2), Array(2)]
***********
const hotel = {
  name : "Resort Hotel",
  stars: 5,
  capacity: 100,
};

const keys = Object.keys(hotel); //["name", "stars", "capacity"]

for (const key of keys) {
  console.log( 'Value: ', hotel[key] );
}
// Value: Resort Hotel
// Value: 5
// Value: 100
*********

