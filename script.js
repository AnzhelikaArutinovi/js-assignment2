"use strict";
// 1. ფუნქცია - n რაოდენობის მნიშვნელობის გადაცემისას მხოლოდ დადებითი რიცხვების ჯამის დაბრუნება
// function sumPositive(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     if (num > 0) {
//       sum += num;
//     }
//     continue;
//   }
//   return sum;
// }
// let result1 = sumPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result1);

// 2. ფუნქცია - ყველა რიცხვის ჯამი
// function sumAll(...numbers1) {
//   let sum = 0;
//   for (let num of numbers1) {
//     sum += num;
//   }
//   return sum;
// }
// let result2 = sumAll(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result2);

// 3. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით თუ isloggedin არის true და false თუ isloggedin false-ია;

let user = {
  firstName: "giorgi",
  lastName: "saakadze",
  age: 32,
  isLoggedIn: true,
};

let statement = (arrayName) => {
  if ([arrayName].isLoggedIn == true) {
    return `${[arrayName].firstName} ${[arrayName].lastName}`
  } return isLoggedIn
  }

let result3 = statement('user');
console.log(result3);

// 5. თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;

// let OddEven = (x) => {
//   return x % 2 == 1 ? "this number is odd" : "this number is even";
// };
// let result5 = OddEven(6);
// console.log(result5);
