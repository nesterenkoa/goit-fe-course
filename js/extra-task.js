'use strict';

let sharm = Number(15);
let hurgada = Number(25);
let taba = Number(6);

const seatReservationText = 'Введите необходимое количество мест';
const inputError = 'Ошибка ввода';
const cancelText = 'Нам очень жаль, приходите еще';

const seats = prompt(seatReservationText);
if (seats == null) {
  alert(cancelText)
} else if (seats != Number.parseInt(seats)) {
  alert(inputError)
} else if (seats <= 0) {
  alert(inputError)
} else {
  
  let group; // переменная для хранения выбранной пользователем группы
  let result; // переменная для хранения кнопки нажатой в окне confirm
  
  if (sharm >= seats) {
    result = confirm('Данное количество мест есть в группе sharm. Согланы ли Вы быть в данной группе?');
    if (result) {
      group = 'sharm';
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  }
  
  if (hurgada >= seats && !group) {
    result = confirm('Данное количество мест есть в группе hurgada. Согланы ли Вы быть в данной группе?');
    if (result) {
      group = 'hurgada';
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  }
  
  if (taba >= seats && !group) {
    result = confirm('Данное количество мест есть в группе taba. Согланы ли Вы быть в данной группе?');
    if (result) {
      group = 'taba';
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  }
  
  if (group) {
    alert(`Приятного путешествия в группе ${group}`)
  }
  
  if ((sharm < seats) && (hurgada < seats) && (taba < seats)) {
    alert('Извините, столько мест нет ни в одной группе!');
  }
  
}
