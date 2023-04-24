// // let funcOne = () => {
// //   return 1 + 2;
// // };

// // let konsol = funcOne();

// // function funcTwo() {
// //   return 3 + 1;
// // }

// // let konsol2 = funcTwo();

// // console.log(konsol);
// // console.log(konsol2);

// //contoh fungsi deklarasi
// const person = {
//   name: "John",
//   sayName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };

// person.sayName();

// //contoh fungsi arrow
// const person2 = {
//   name: "Michael",
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// person2.sayName();

// // pakai else if biasa dan synchronus
// const getUserSync = (id) => {
//   let nama = "";
//   if (id === 1) {
//     nama = "Dandi";
//   } else {
//     nama = "Rizky";
//   }
//   //return value jadi object
//   return {
//     id: id,
//     nama: nama,
//   };
//   //return valuenya jadi string aja
//   //   return nama;
// };

// //pakai operator ternary dan async
// const getUserAsync = (id, callback) => {
//   const time = id === 1 ? 3000 : 2000;
//   setTimeout(() => {
//     const nama = id === 1 ? "Dandi" : "Rizky";
//     callback({ id, nama });
//   }, time);
// };

// const nama = getUserSync(1);
// const nama2 = getUserSync(2);

// console.log(nama);
// console.log(nama2);

// const nama3 = getUserAsync(1, (hasil) => {
//   console.log(hasil);
// });

// const nama4 = getUserAsync(2, (hasil) => {
//   console.log(hasil);
// });

//COUNT SHEEP
// function countSheep(sheep) {
//   let results = "";
//   for (let i = 1; i <= sheep; i++) {
//     results = results + i + "Sheep..."; // bisa pakai string concat atau
//     results += `${i} Sheep...` // bisa pakai template literal
//   }
//   return results;
// }

// console.log(countSheep(5));

// // MEMISAHKAN 2 STRING MENGGUNAKAN SPLIT
// function shortenToDate(longDate) {
//   return longDate.split(",")[0];
// }

// console.log(shortenToDate("Friday May 2, 7pm"));

// FUNGSI PEMBAGIAN
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
function divisors(integer) {}
