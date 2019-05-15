// Есть список категорий с классом categories (на вкладке HTML).
//
// Напишите код, который для каждого элемента li (первая вложенность)
// в списке categories выведет в консоль:
//   - Текст непосредственно в нём (название категории)
// - Количество всех вложенных в него элементов li
//
// К примеру:
//   Категория: Животные
// Количество вложенных li: 4
// */
//

let categories = document.querySelectorAll('.categories > li');

categories.forEach(el => {
  // console.dir(el);
    console.log(el.firstChild);
    console.log(el.firstElementChild.childElementCount)
});
// ____________________________________________
// task-2
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

//
// let list = document.querySelector('.list');
// list.firstElementChild.style.color = 'red';
// list.lastElementChild.style.color = 'blue';
// console.log(list);
//
// // _____________________


// task-3
/*
  Дан ul склассом .list и массив строк.
  
//   Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
// */
//
// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
//
// let list = document.querySelector('.list');
//
// let result = elements.map(el => `<li>${el}</li>`);
//
// list.innerHTML = result.join('');
// console.log(list)
//
//
// второй вариант решения:

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// let list = document.querySelector('.list');

// let result = elements.reduce((acc, el) => acc + `<li>${el}</li>`, '');

// list.innerHTML = result;
//   console.log(list)

// ____________________________________________________________________________


// task-4


/*
  Напишите скрипт для создания галлереи изображений.
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];

  let galleryIndex = document.querySelector('.gallery')
console.log(galleryIndex);


 let result  = galleryItems.reduce((acc, el) => acc + `<li><img style ="width: 300px" src="${el.url}"><p>${el.alt}</p></li>`, '')


 galleryIndex.innerHTML = result;
 
 
 
//  _____________________________________________________________
// task-5
/*
  Есть список с классом .size-filter из произвольного
  количества чекбоксов, каждый из которых содержит
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
let input  = document.querySelectorAll(".size-filter input[checked]");
console.log (input);
function collectInputData (inputs) {
  let arr = Array.from (inputs);
 let val = arr.map(el => el.value);
  return val;
}
console.log (collectInputData (input));

_______________________________________________________________________________________________

