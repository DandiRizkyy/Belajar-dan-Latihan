// let mahasiswa = {
//   nama: "brow",
//   nrp: "8282828282",
//   alamat: "jalan ya jalan",
// };

// console.log(JSON.stringify(mahasiswa));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   }
// };

// xhr.open("GET", "latihan1.json", true);
// xhr.send();

$.getJSON("latihan1.json", function (data) {
  console.log(data);
});
