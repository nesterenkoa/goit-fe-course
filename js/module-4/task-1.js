/*
  Напиши скрипт, который, для объекта user, последовательно:
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
console.log(user);

user.mood = 'javascript';
console.log(user);

user.premium = false;
console.log(user);

const keys = Object.entries(user);
console.log(keys);


for (entry of keys ){
  const key = entry[0];
  const value = entry[1];
  
  console.log(`${key}: ${value}`)
}


// for (let i=0; i < keys.length; i++)
//   {
//   console.log(keys:[i]);

//   }

