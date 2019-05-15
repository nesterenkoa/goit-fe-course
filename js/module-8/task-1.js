// /*
//   Напишите скрипт который реализует следующий функционал.
//
//   Есть кнопка с классом button, текст которой отображает
//   кол-во раз которое по ней кликнули, обновляется при каждом клике.
// */
//
// const button = document.querySelector(".button");
//
//
// function plus() {
//   button.textContent++
// }
//
// button.addEventListener('click', plus);
//
//
// ______________________________________________________________________________________________
// /* task 2
//   Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
//   получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
// */
// let input = document.querySelectorAll ('input');
// let btn = document.querySelector ('[data-action="add"]');
// result =document.querySelector(".result");
//
// function plus() {
//   result.textContent = Number(input[0].value) + Number(input[1].value)
// };
//
//
// // btn.addEventListener('click', plus);
// _____________________________________________________________________________
/* task -4


  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

function submit(event) {
  event.preventDefault();
  
  const input  = document.querySelector("input:checked");
  const result  = document.querySelector(".result");
  result.innerText = `Result: ${input.value}`;
}

const btn  = document.querySelector(".btn");
btn.addEventListener('click', submit);
