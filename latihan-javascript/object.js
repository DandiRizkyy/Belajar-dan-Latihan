//part 1
//1. membuat object literal

// let mahasiswa = {
//   nama: "Dandi",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan !`);
//   },
// };

// //2. membuat object menggunakan fungsi deklarasi (blueprint)

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan !`);
//   };

//   return mahasiswa;
// }

// let dandi = Mahasiswa("dandi", 20);

// membuat object menggunakan constructor
// pakai keyword new

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan !`);
//   };
// }

// let dandi = new Mahasiswa("dandi", 20);

// prototyping

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan !`;
};

Mahasiswa.prototype.main = function (main) {
  this.energi -= main;
  return `Halo ${this.nama}, selamat bermain !`;
};

let dandi = new Mahasiswa("dandi", 20);

//versi pakai class

class Mahasiswa2 {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan !`;
  }

  main(main) {
    this.energi -= main;
    return `Halo ${this.nama}, selamat bermain !`;
  }
}

let doni = new Mahasiswa2("Doni", 200);

angka = [];
console.log(angka);
//part 2
// //object literal
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama} selamat makan!`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama} energi telah ditambahkan!`);
//   },
// };

// //membuat object dengan function declaration
// function funcMahasiswa(nama, energi, hobi) {
//   //cara biasa
//   //   let mahasiswa = {};
//   //cara Object.create
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.hobi = hobi;
//   //   mahasiswa.makan = methodMahasiswa.makan;
//   //   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let dandi = funcMahasiswa("Dandi", 100, "main game");
// let mark = funcMahasiswa("Mark", 90, "bersepeda");

// console.log(dandi);
// console.log(mark);
