/*
  Напишите скрипт который:
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/

const year = prompt('What is the year now');
if (year == 2018) {
  alert( 'Все верно!' );
} else {
  alert( 'Но ведь на вдоре 2018' );
}
