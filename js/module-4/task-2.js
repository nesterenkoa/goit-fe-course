/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};
tasksCompleted.Alex = 897;
var max = 0;
var maxName = "";
for ( name in tasksCompleted ) {
  if (max < tasksCompleted[name]) {
    max = tasksCompleted[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" )
console.log(tasksCompleted)
