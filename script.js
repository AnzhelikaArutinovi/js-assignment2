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
// let user = {
//   firstName: "giorgi",
//   lastName: "saakadze",
//   age: 32,
//   isLoggedIn: true,
// };

// let statement = (x) => {
//   if (x["isLoggedIn"] == true) {
//     return `${x["firstName"]} ${x["lastName"]}`;
//   }
//   return x["isLoggedIn"];
// };

// let result3 = statement(user);
// console.log(result3);

// 4. ფუნქცია - რიცხვების მასივიდან აბრუნებს მაქსიმალურ მნიშვნელობას
// function getMax(...numberArray) {
//   let maxValue = numberArray[0];
//   for (let i = 0; i < numberArray.length; i++) {
//     if (maxValue < numberArray[i]) {
//       maxValue = numberArray[i];
//     }
//     continue;
//   }
//   return maxValue;
// }
// let result4 = getMax(-1, -30, -8, -11, -4, -6, -9);
// console.log(result4);

// 5. თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;
// let OddEven = (x) => {
//   return x % 2 == 1 ? "this number is odd" : "this number is even";
// };
// let result5 = OddEven(6);
// console.log(result5);

// 6. გამოვიტანოთ მხოლოდ ის სიტყვები, რომლის სიმბოლოების რაოდენობდა მეტია 4-ზე და მოიცავს ‘av’ სიმბოელობის თანმიმდევრობას
// let array1 = ["html", "css", "python", "javascript", "bootstrap"];

// 6 (1) - პირველი ხერხი - for loop
// for (let i = 0; i < array1.length; i++) {
//   let element = array1[i];
//   {
//     (element.length > 4 && element.includes("av")) ? console.log(element) : "";
//   }
// }

// 6 (2) - მეორე ხერხი - for of loop
// for (let element of array1) {
//   if (element.length > 4 && element.includes("av")) {
//     console.log(element);
//   }
// }

// 6 (3) - მესამე ხერხი - foreach()
// array1.forEach( element => {
//   if (element.length > 4 && element.includes("av")) {
//     console.log(element);
//   }
// });

// 7. ციკლის საშუალებით მიიღეთ reverse ვერსია
// let array2 = [1, 2, 3, 4, 5];
// let array3 = [];
// for (let i = array2.length - 1; i >= 0; i--) {
//   array3.push(array2[i]);
// }
// console.log(array3);

// 8. ფუნქციის საშუალებით გამოვთვალოთ უსერის ასაკი, თუ გადაცემული ასაკი მეტია 18-ზე - სრულლოვანი, თუ ნაკელებია - არასწულწლოვანი.
// let ageInfo = (birthYear) => {
//   let age = 2023 - birthYear;
//   let ageType = birthYear > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
//   console.log(age);
//   return ageType;
// };
// let ageData = ageInfo(1995);
// console.log(ageData);
