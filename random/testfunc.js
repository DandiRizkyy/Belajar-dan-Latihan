//splice(memilih index no brp untuk diisi value baru, memilih index no brp untuk di delete, value baru )
// const arr = ["apple", "banana", "orange"];
// arr.splice(3, 0, "man", "woman");
// console.log(arr);

//slice (dimulai dari index berapa, stop di index berapa)
// const arr1 = ["apple", "banana", "orange"];
// const arr2 = arr1.slice(1, 3);
// console.log(arr2);
// console.log(arr1);

//concat
// const arr3 = [1, 2, 3];
// let arr4 = [];
// arr4 = arr4.concat(arr3);
// console.log(arr4);

// testarr = [
//   {
//     name: "andi",
//     age: 30,
//   },
//   {
//     name: "budi",
//     age: 40,
//   },
// ];
// testarr.splice(0, 1);
// console.log(testarr);

//mencari ganjil genap
// let looparr = [1, 2, 3, 4, 5];
// for (i = 0; i < looparr[i]; i++) {
//   if (looparr[i] % 2 == 0) {
//     console.log(`The result of ${looparr[i]} even`);
//   } else {
//     console.log(`The result of ${looparr[i]} odd`);
//   }
// }

let looparr2 = "andi";
let newString = "";
// console.log(looparr2.length);
for (let i = 0; i < looparr2.length; i++) {
  if (i % 2 == 0) {
    newString += looparr2[i].toLowerCase();
  } else {
    newString += looparr2[i].toUpperCase();
  }
}

for (let i = 0; i < newString.length; i++) {
  if (i % 2 == 0) {
    console.log(`The index ${[i]} of ${newString[i]} letter is even`);
  } else {
    console.log(`The index ${[i]} of ${newString[i]} letter is odd`);
  }
}
