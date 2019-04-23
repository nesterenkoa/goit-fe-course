/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


let list = document.querySelector('.list');
list.firstElementChild.style.color = 'red';
list.lastElementChild.style.color = 'blue';
console.log(list);

