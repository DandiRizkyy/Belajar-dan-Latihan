let totalAngkot = 10;
let angkotBeroperasi = 6;
let nomorAngkot = 1;

for (nomorAngkot; nomorAngkot <= totalAngkot; nomorAngkot++) {
  if (nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} sedang beroperasi`);
  } else {
    console.log(`Angkot No. ${nomorAngkot} sedang tidak beroperasi`);
  }
}

// if (30 >= 10) {
//     console.log('benar');
// } else {
//     console.log('salah');
// }