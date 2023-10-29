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

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера
//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const login = prompt("Ведіть логін");
// if (login === "Адмін") {
//   const password = prompt("Ведіть пароль");
//   if (!password) {
//     alert("Скаcовано!");
//   } else if (password === "Я головний") {
//     alert("Добрий день!");
//   } else {
//     alert("Невірний пароль");
//   }
// } else {
//   alert("Я вас не знаю");
// }

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// );

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);

// const result = {};
// function makeTask({
//   completed = false,
//   category = "General",
//   priority = "Normal",
//   text,
// }) {
//   return { completed, text, category, priority };
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

// function add(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// function addOverNum(first, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > first) {
//       total += arg;
//     }
//   }
//   return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// function findMatches(array, ...args) {
//     const matches = [];
//         for(const item of args){
//             if(array.includes(item)) {
//                 matches.push(item)
//             }
//         }

//     return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const bookShelf = {

//     books: ["The last kingdom", "The guardian of dreams"],

//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },

//   };

//   console.log(bookShelf.getBooks());
//   console.log(bookShelf.addBook("Haze"));
//   console.log(bookShelf.removeBook("Red sunset"));
//   console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// TASK 1
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// const obj = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// // function isProperty(obj, key) {
// //   const arr = Object.keys(obj);
// //   return arr.some(item =>  item === key)

// //   console.log(arr);
// // };
// // console.log(isProperty(obj, "car1"))

// function isProperty(obj, key) {
//   return Object.keys(obj).includes(key)
// };
// console.log(isProperty(obj, "car"))

//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

//   const stones = [
//     { name: "Смарагд", price: 1300, quantity: 4 },
//     { name: "Діамант", price: 2700, quantity: 6 },
//     { name: "Сапфір", price: 400, quantity: 7 },
//     { name: "Щебінь", price: 150, quantity: 100 },
//   ];

// function calcTotalPrice(stones, stonesName){
//   const{price, quantity} = stones.find((stone) => stone.name === stonesName)
//   return price * quantity
// }

// console.log(calcTotalPrice(stones, "Діамант"));

// Завдання 29.10.23

//! 4. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//! 5. Виправте помилки, щоб код працював

// const item = {
//     getQuantity() {
//         console.log(this.quantity);
//     },
//     quantity: 5,
// }

// function callAction(action) {
//       action.apply(item)
//   }

// callAction(item.getQuantity);

// ! 8. Напишіть функцію savePassword(password), яка приймає
//  пароль і повертає внутрішню функцію, що приймає
// рядок і повертає буль true, якщо рядок збігається зі збереженим
// паролем і false - якщо не збігається

// function savePassword(password) {

//     return (check) => check === password ? true : false;
// }

// const check = savePassword("qwerty");
// console.log(check("qwerty"))

//! 9. Напишіть функцію зберігання знижки.Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// function discountFu(discount) {
//   return (sum) => sum - sum * discount / 100
// }

// const calculateSum = discountFu(10)(900)
// console.log(calculateSum);

// /!  Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(userLogin, userMail) {
//     this.#login = userLogin;
//     this.#email = userMail;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(userLogin) {
//     this.#login = userLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(userMail) {
//     this.#email = userMail;
//   }
// }

// const newClient = new Client('&&&' ,'^^^^^')
// console.log(newClient.login = "www.google.com");
// console.log(newClient.login);

//! 14. Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel

// const workerObj = {
//   name: "Mango",
//   surname: "Worker",
//   age: 30,
//   position: "FE developer",
//   salary: 5000,
// };

// class Worker {
//   constructor({name, age, salary}) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorker extends Worker {
//     constructor (obj, hierarchyLevel) {
//         super(obj)
//         this.hierarchyLevel = hierarchyLevel; 
//     }
//     getHierarchyLevel() {
//         return this.hierarchyLevel;
//       }
// }

// const newWorker = new TopLevelWorker (workerObj, 'TopRanked')
// console.log(newWorker.getHierarchyLevel());
// console.log(newWorker.getSalary());
