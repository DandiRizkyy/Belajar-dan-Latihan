const angka = [-1, 8, 8, 1, 4, -5, -4, 3, 2, 9];

// //mencari angka >=3
// angka.filter;
// //for
// // const newAngka = [];
// // for (let i = 0; i < angka.length; i++) {
// //   if (angka[i] >= 3) {
// //     newAngka.push(angka[i]);
// //   }
// // }

// // console.log(newAngka);

// //filter
// const newAngka = angka.filter((a) => {
//   return a >= 3;
// });
// console.log(newAngka);

// //map
// //bikin array baru dan kalikan semua dari array lama
// const newKaliAngka = newAngka.map((a) => {
//   return a * 2;
// });
// console.log(newKaliAngka);

// //reduce
// //bikin array baru dan semua isi dri array lama ditambahkan 2
// const newTambahAngka = angka.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(newTambahAngka);

//Method chaining
//cari angka > 5
//kalikan 3 angka tsb
//jumlahkan angka tsb
const hasil = angka
  .filter((a) => {
    return a > 5;
  })
  .map((a) => {
    return a * 3;
  })
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

console.log(hasil);
