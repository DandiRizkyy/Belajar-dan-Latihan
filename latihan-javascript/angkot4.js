let totalAngkot = 10;
let angkotBeroperasi = 6;
let nomorAngkot = 1;
let angkotLembur = 8;

for (nomorAngkot; nomorAngkot <= totalAngkot; nomorAngkot++) {
  if (nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} sedang beroperasi`);
  } else if (nomorAngkot === 8) {
    console.log(`Angkot No. ${nomorAngkot} sedang lembur`);
  } else {
    console.log(`Angkot No. ${nomorAngkot} sedang tidak beroperasi`);
  }
}

