// Oson masalalar

// 1-MASALA

// function kvNum(num) {
//   return num ** 2;
// }

// console.log(kvNum(5));

// 2-MASALA

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(5, 7));

// 3-MASALA

// function hello() {
//   let userName = prompt("Ismingizni kiriting:");
//   return `Salom, ${userName}`;
// }

// console.log(hello());

// 4-MASALA

// function num() {
//   let num1 = +prompt("1-son");
//   let num2 = +prompt("2-son");
//   return num1 > num2 ? num1 : num2;
// }

// console.log(`Katta son`, num());

// 5-MASALA

// function numSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let numbers = [5, 2, 4, 6, 3];

// console.log(numSum(numbers));

// 6-MASALA

// function number() {
//   let num = +prompt("Son kiriting:");
//   if (num > 0) {
//     return console.log("Musbat son");
//   } else if (num < 0) {
//     return console.log("Manfiy son");
//   } else {
//     return console.log("0");
//   }
// }
// number();

// 7-MASALA

// function wordLength(word) {
//   return word.length;
// }

// console.log(wordLength("salom"));

// 8-MASALA

// function str(str1, str2) {
//   return str1 + " " + str2;
// }

// console.log(str("Salom", "dunyo"));

// 9-MASALA

// function smalNum(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// let numbers = [10, 14, 9, 5, 20];

// console.log(smalNum(numbers));

// 10-MASALA

// function reverseWord(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseWord("salom"));

// Massiv va funksiyalar

// 1-MASALA

// function numbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// let nums = [1, 2, 3, 4, 5];

// numbers(nums);

// 2-MASALA

// function maxlNum(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// let numbers = [10, 14, 9, 100, 5, 20];

// console.log(maxlNum(numbers));

// 3-MASALA

// function arrLength(arr) {
//   return arr.length;
// }

// let numbers = [1, 2, 3, 4, 5, true];

// console.log(arrLength(numbers));

// 4-MASALA

// function numSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let numbers = [5, 3, 2];

// console.log(numSum(numbers));

// 5-MASALA

// function numCount(arr, element) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       count++;
//     }
//   }

//   return count;
// }

// let numbers = [1, 2, 3, 4, 1, 5, 6, 7, 1, 9, 1, 10];
// let value = 1;
// let res = numCount(numbers, value);
// console.log(`${value} soni ${res} marta uchradi`);

// 6-MASALA

// function toqSon(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(toqSon(numbers));

// 7-MASALA

// function reverseArr(arr) {
//   return arr.reverse();
// }

// let numbers = ["hello", true, 1, 2, 3, 4, 5];

// console.log(reverseArr(numbers));

// 8-MASALA

// function manfiySon(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// let numbers = [1, 2, 3, 4, 5, -6, -7, -8, -9, -10];

// console.log(manfiySon(numbers));

// 9-MASALA

// function removeElement(arr) {
//   arr.pop();
//   return arr;
// }

// let numbers = [1, 2, 3, 4, 5, 6];

// console.log(removeElement(numbers));

// 10-MASALA

// function addElement(arr) {
//   arr.push(7);
//   return arr;
// }

// let numbers = [1, 2, 3, 4, 5, 6];

// console.log(addElement(numbers));

// 11-MASALA

// function arrPlus(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];

// console.log(arrPlus(array1, array2));

// 12-MASALA

// function kvNum(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] ** 2);
//   }
//   return res;
// }

// let numbers = [1, 2, 3, 4, 5];

// console.log(kvNum(numbers));

// 13-MASALA

// function numbers(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers(nums));

// 14-MASALA

// function words(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       res.push(arr[i].toUpperCase());
//     }
//   }
//   return res;
// }
// let str = ["hello", "world", 1, 2, 3, true];

// console.log(words(str));

// 15-MASALA

// function wordsLength(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       res.push(arr[i].length);
//     }
//   }
//   return res;
// }

// let str = ["hello", "world", true, 1, 2, 3];

// console.log(wordsLength(str));
