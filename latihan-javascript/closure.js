// function init() {
//   let nama = dandi;
//   function tampilNama() {
//     console.log(nama);
//   }

//   tampilNama();
// }

// init();

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu} ~`);
  };
}

let selamatPagi = ucapkanSalam("pagi");

console.dir(selamatPagi("dandi"));

// cara 1
// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

//cara 2 (immidiate invoke function)
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
