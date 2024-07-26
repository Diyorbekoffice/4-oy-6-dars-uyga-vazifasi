// // 1-masala
// let num = 8;
// let arr = [];
// for (let i = 1; i <= num; i++) {
//     arr.push(i);
// } console.log(arr);

// // 2-masala
// let arrToq = [];
// let arrToqSum = 0;
// let arrJuft = [];
// let arrJuftSum = 0;
// let res = [];
// for (let i = 1; i < 10; i++) {
//     if (i % 2 == 0) {
//         arrToq.push(i);
//         arrToqSum += i;
//     } else {
//         arrJuft.push(i);
//         arrJuftSum += i;
//     }
// }
// res.push(arrToqSum , arrJuftSum)
// console.log('Toq sonlar: ' + arrToq);
// console.log('Juft sonlar: ' + arrJuft);
// console.log('Yigindilardan iborat massiv: ' + res);

// // 3-masala
// let arr1 = [1, 2, 3, 4];
// let arr2 = [10, 20, 30, 40];
// let sum = +[];
// let combinedArray = arr1.concat(arr2);
// for (let i = 0; i < combinedArray.length; i++) {
//     sum += combinedArray[i];
// }
// console.log('Massivlarni Birlashtirish: ' + combinedArray);
// console.log('Massiv elementlarini yig\'indisi: ' + sum);

// // 4-masala
// let arr = [1, 2, 3, 4, 6, 7, 8];
// let newArr = [];
// for (let i = arr.length - 1; i >=0 ; i--) {
//     newArr.push(arr[i]);
// } console.log(newArr);

// // 5-masala
// let arr = [2, 3, 4, 6, 7, 8];
// let minArr = Math.min(...arr)
// console.log(minArr ** 4);




// // 1-masala
// let arr = [2, 3, 4, 6, 7, 8];
// let maxArr = Math.max(...arr)
// console.log(maxArr);

// // 2-masala
// let arr = [1, 'hello', 3, 'world', true, 'foo', 7, 'bar']; // true string tipida emas 
// let stringArr = arr.filter(item => typeof item === 'string').length;
// console.log(stringArr);

// // // 3-masala
// let arr = [10, 11, 12, 13, 14];
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] % 2 === 0) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }
// }
// console.log(arr);

// // 4-masala
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
// for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] % 2 !== 0) {
//         newArr[i] = 0;
//     }
// }
// console.log(newArr);

// // 5-masala
// let array = [10, 20, 30, 40, 50];
// for (let i = 0; i < array.length; i++) {
//     array[i] = i;
// }
// console.log(array);

// // 6-masala
// let array = [1, 3, 4, 6, 9, 12, 15, 20];
// let filteredArray = array.filter(item => item % 3 !== 0);
// console.log(filteredArray); 

// // 7-masala
// let array = [2, 4, 6, 8, 10];
// let sum = array.reduce((acc, current) => acc + current, 0);
// let newArray = array.map(item => sum !== 0 ? item / sum : 0);
// console.log("Yig'indi:", sum); 
// console.log("Yangi massiv:", newArray); 

// // 8-masala
// let array = [1, 2, 3, 4, 5];
// for (let i = array.length - 1; i > 0; i--) {
//     array[i] = array[i - 1];
// }
// console.log(array); 

// // 9-masala
// let array = [10, -5, 3, -2, 7];
// let newArr = array.filter(item => item >= 0);
// console.log(newArr.length);

// // 10-masala
// let arr = [10, -5, 3, -2, 7, -4];
// let newArr = arr.filter(item => item < 0).reduce((acc, current) => acc + current, 0);
// console.log(newArr);

// // 11-masala
// let array = ["hello", "world", "javascript"];
// let upperCaseArray = array.map(item => item.toUpperCase());
// console.log(upperCaseArray);

// // 12-masala
// let arr = [1, -2, 3, 4, -5, 6];
// let newArr = arr.filter(item => item > 0).reduce((acc, current) => acc * current, 1);
// console.log(newArr);

// // 13-masala
// let array = ["short", "a very long string", "medium", "tiny"];
// let longestString = array.reduce((longest, current) => current.length > longest.length ? current : longest, "");
// let shortestString = array.reduce((shortest, current) => current.length < shortest.length ? current : shortest, array[0]);
// console.log("Eng uzun satr:", longestString); 
// console.log("Eng qisqa satr:", shortestString);











