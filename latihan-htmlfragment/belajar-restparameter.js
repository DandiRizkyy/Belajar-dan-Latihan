// rest parameter

// function myFunc(a, b, ...rest) {
//   // menggunakan rest parameter
//   //   return `a = ${a}, b = ${b}, sisanya adalah ${rest}`;

//   // menggunakan default arguments dari function
//   //   return Array.from(arguments);

//   // menggunakan spread operator
//   return [...arguments];
// }

// // console.log(myFunc(1, 2, 3, 4, 5));

// // menjumlahkan

// function jumlahkan(...rest) {
//   //menggunakan for
//   //     let hasil = 0;
//   //   rest.forEach((element) => {
//   //     hasil += element;
//   //   });
//   //   return hasil;

//   //menggunakan reduce
//   return rest.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["dono", "kasino", "indro", "james", "bond"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Dandi",
//   frontEnd1: "budi",
//   frontEnd2: "andi",
//   backend: "john",
//   uiux: "hendra",
//   devOps: "ferry",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

//filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "dandi", false, 11, true, "mark"));
