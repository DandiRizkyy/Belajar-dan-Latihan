// for..of
// const mhs = ["dandi", "mark", "mikael"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((e) => console.log(e));

// for (const m of mhs) {
//   console.table(m);
// }

//string
// const nama = "dandi";
// for (const m of nama) {
//   console.log(m);
// }

//nodelist
const element = document.querySelectorAll(".nama");

for (n of element) {
  console.log(n.innerHTML);
}

//arguments
function jumlahAngka() {
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5));

// for.. in untuk looping properti object

const mhs = {
  nama: "dandi",
  umur: 22,
};

for (m in mhs) {
  console.log(m);
}
