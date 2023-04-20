// menghitung jumlah huruf di dalam array menggunakan .map + 10
// let mahasiswa = ["Andi", "Budi", "Mike"];

// let jumlahHuruf = mahasiswa.map((nama) => {
//   return nama.length + 10;
// });

// console.log(jumlahHuruf);

// menghitung jumlah huruf di dalam array menggunakan .map dan dijadikan object
let mahasiswa = ["Andi", "Budi", "Mike"];

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));

console.table(jumlahHuruf);

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  this.classList.toggle("size");

  setTimeout(function () {
    this.classList.toggle("caption");
  }, 600);
});
