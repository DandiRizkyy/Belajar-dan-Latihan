// let funcOne = () => {
//   return 1 + 2;
// };

// let konsol = funcOne();

// function funcTwo() {
//   return 3 + 1;
// }

// let konsol2 = funcTwo();

// console.log(konsol);
// console.log(konsol2);

//contoh fungsi deklarasi
const person = {
  name: "John",
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayName();

//contoh fungsi arrow
const person2 = {
  name: "Michael",
  sayName() {
    console.log(`My name is ${this.name}`);
  },
};

person2.sayName();

// pakai else if biasa dan synchronus
const getUserSync = (id) => {
  let nama = "";
  if (id === 1) {
    nama = "Dandi";
  } else {
    nama = "Rizky";
  }
  //return value jadi object
  return {
    id: id,
    nama: nama,
  };
  //return valuenya jadi string aja
  //   return nama;
};

//pakai operator ternary dan async
const getUserAsync = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "Dandi" : "Rizky";
    callback({ id, nama });
  }, time);
};

const nama = getUserSync(1);
const nama2 = getUserSync(2);

console.log(nama);
console.log(nama2);

const nama3 = getUserAsync(1, (hasil) => {
  console.log(hasil);
});

const nama4 = getUserAsync(2, (hasil) => {
  console.log(hasil);
});
