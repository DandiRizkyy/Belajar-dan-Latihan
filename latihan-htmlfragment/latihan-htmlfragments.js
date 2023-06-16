//1. html fragments

// const mhs = {
//   nama: "Dandi Rizky",
//   umur: 22,
//   nrp: "112233",
//   email: "dandi@gmail.com",
// };

// looping
// const mhs = [
//   {
//     nama: "Dandi Rizky",
//     email: "dandi@gmail.com",
//   },
//   {
//     nama: "Mike",
//     email: "mike@gmail.com",
//   },
//   {
//     nama: "Dono",
//     email: "dono@gmail.com",
//   },
// ];

// const element = `
// <div class="mhs">
//     ${mhs
//       .map(
//         (m) =>
//           `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// conditionals
// pakai ternary
// const lagu = {
//   judul: "Kau Adalah",
//   penyanyi: "Isyana Sarasvati",
//   feat: "Rayi Putra",
// };

// const element = ` <div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>
// `;

//4. nested
// HTML fragment bersarang

const mhs = {
  nama: "Dandi Rizky",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Object",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const element = `<div class="mhs">
    <h2>Nama: ${mhs.nama}</h2>
    <h4>Semester: ${mhs.semester}</h4>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
    
</div>`;
document.body.innerHTML = element;
