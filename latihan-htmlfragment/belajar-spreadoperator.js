// menggabungkan 2 array

// let mhs = ["dodi", "mike"];
// let mhs2 = ["junaedi", "anton"];

// let mhs3 = [...mhs, ...mhs2];
// console.log(mhs3);

// mengcopy array
// let mhs = ["dodi", "mike"];
// let mhs1 = [...mhs];
// mhs1[0] = "cahya";
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((m) => `<span>${m}</span>`).join("");
nama.innerHTML = huruf;

console.log(huruf);
