let totalAngkot = 10;
let angkotBeroperasi = 6;
let nomorAngkot = 1;
let angkotLembur = 8;

for (nomorAngkot; nomorAngkot <= totalAngkot; nomorAngkot++) {

  if (nomorAngkot <= angkotBeroperasi && nomorAngkot !== 5) {
    console.log(`Angkot No. ${nomorAngkot} sedang beroperasi`);
  } else if (nomorAngkot === 5 || nomorAngkot === 8 || nomorAngkot === 10) {
    console.log(`Angkot No. ${nomorAngkot} sedang lembur`);
  } else {
    console.log(`Angkot No. ${nomorAngkot} sedang tidak beroperasi`);
  }
}

