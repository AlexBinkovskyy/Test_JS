// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = parseInt(prompt("введіть число"));
// if (min <= 15) {
//   console.log("Перша чверть");
// } else if (min <= 30) {
//   console.log("Друга чверть");
// } else if (min <= 45) {
//   console.log("Третя чверть");
// } else if (min <= 60) {
//   console.log("Четверта чверть");
// } else {
//     console.log("Невірне значення");
// }

// const min = parseInt(prompt("введіть число"));
// switch (true){
//     case (min <= 15):
//         console.log("Перша чверть");
//         break;
//     case (min <= 30):
//         console.log("2 чверть");
//         break;
//     case (min <= 45):
//         console.log("3 чверть");
//         break;
//     case (min <= 60):
//         console.log("4 чверть");
//         break;
// }

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = parseInt(prompt("введіть число"));
// let result;
// switch (num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Літо";
//     break;
//   case 4:
//     result = "Осінь";
//     break;
//   default:
//     result = "Немає такої пори року";
//     break;
// }
// console.log(result);


//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// 01
// const min = 0;
// const max = 100;
// for (let i = max; i >= min; i--) {
//     console.log(i);
// }

// 02
// const min = 0;
// const max = 50;
// // let evenNum = 0;
// for (let i = min; i <= max; i++){
//     if (i % 2 === 0) {
//         // evenNum += i;
//         console.log(i);
//     }
//     // console.log(evenNum);
// }

// 03
// const min = 0;
// const max = 50;
// function eveNum(min, max) {
//     let total = 0;
//     for (let i = min; i <= max; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//             total += i;
//         }
//     }
//     return total
// }
// console.log(eveNum(10, 60));