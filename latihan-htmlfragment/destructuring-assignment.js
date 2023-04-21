// Destructuring Variables / Assignment

// Destructuring Array

// const perkenalan = ["Halo", "nama", "saya", "dandi"];
// const [a, b, c, d] = perkenalan;
// const [a, , , d] = perkenalan; //skip items nama dan saya

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function

// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

//rest parameter
// const [a, ...value] = [1, 2, 3];
// console.log(a);
// console.log(value);

//destructuring object

// const mhs = {
//   nama: "dandi",
//   umur: 22,
// };

// let { nama, umur } = mhs;
// console.table(nama);
// console.table(umur);

//assignment tanpa deklarasi object

// ({ nama, umur } = {
//   nama: "dandi",
//   umur: 22,
// });
// console.table(nama);
// console.table(umur);

//assign ke nama baru

// const { nama: a, umur: b } = {
//   nama: "dandi",
//   umur: 22,
// };
// console.table(a);
// console.table(b);

//memberikan dafault value

// const mhs = {
//   nama: "dandi",
//   umur: 22,
// };

// let { nama, umur, email = "myemail@gmail.com" } = mhs;
// console.table(nama);
// console.table(umur);
// console.table(email);

// memberi nilai default + assign ke variabel baru

// const mhs = {
//   nama: "dandi",
//   umur: 22,
// };

// let { nama: a, umur: b, email: c = "myemail@gmail.com" } = mhs;
// console.table(a);
// console.table(b);
// console.table(c);

// object pakai rest parameter

// const mhs = {
//   nama: "dandi",
//   umur: 22,
// };

// let { nama, ...value } = mhs;
// console.table(nama);
// console.table(value);

// mengambil field pada object setelah dikirim sebagai parameter untuk function

// const mhs = {
//   id: 20,
//   nama: "dandi",
//   umur: 22,
// };

// function getIdMahasiswa({ id }) {
//   return id;
// }

// console.log(getIdMahasiswa(mhs));

//latihan 1

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

//latihan 2
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a - b, a * b];
// }

// const [...hasil] = penjumlahanPerkalian(2, 3);
// console.log(hasil[0]);
// console.log(hasil[1]);
// console.log(hasil[2]);

//latihan 3 note: jika mau urutan tidak berpengaruh, pakai object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//   };
// }

// const { kurang, kali } = kalkulasi(2, 3);
// console.log(kurang);

// latihan 4 destructuring function
const mhs = {
  nama: "dandi",
  umur: 22,
  email: "dandi@gmail.com",
  nilai: {
    tugas: 80,
    uas: 90,
    uts: 90,
  },
};

function cetakNama({ nama, umur, nilai: { tugas, uas, uts } }) {
  return `Halo nama saya ${nama}, saya tahun ini berumur ${umur} tahun dan nilai tugas saya adalah ${tugas}`;
}

console.log(cetakNama(mhs));
