//core modules
//file system
const fs = require("fs");
// console.log(fs);

//readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda sir: ", (nama) => {
  rl.question("Masukkan no HP: ", (noHp) => {
    const contact = { nama, noHp };
    const file = fs.readFileSync("./contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
    console.log(contacts);
    fs.writeFileSync("./contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih telah memasukkan data");
    // console.log(`Terimakasih ${nama} sudah menginputkan ${noHp}`);
    rl.close();
  });
});
// // menuliskan string ke file secara synchronus
// try {
//   fs.writeFileSync("test.text", "hello world secara synchronus");
// } catch (error) {
//   console.log(error);
// }
// // menuliskan string ke file secara asynchronus
// fs.writeFile("textasync.txt", "hello world secara asynchronus", (err) => {
//   console.log(err);
// });

// //membaca isi file pakai method js toString
// const cetakHuruf = fs.readFileSync("./test.text");
// console.log(cetakHuruf.toString());

// //membaca isi file pakai option utf-8
// const cetakHuruf2 = fs.readFileSync("./test.text", "utf-8");
// console.log(cetakHuruf2);

// //membaca isi file secara asynchronus
// const cetakHuruf3 = fs.readFile("./textasync.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
