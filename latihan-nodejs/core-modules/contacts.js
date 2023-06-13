//core modules
//file system
const { rejects } = require("assert");
const fs = require("fs");
// console.log(fs);

//readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat folder data jika belum ada
const dirPath = "./data";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat contact json jika belum ada
const contactData = "./data/contacts.json";

if (!fs.existsSync(contactData)) {
  fs.writeFileSync(contactData, "[]", "utf-8");
}

// bikin promise yang nantinya digunakan untuk async await
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp }; // membuat object dengan cara es6, harusnya kan nama: nama key values pair.
  const file = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);
  // console.log(contacts);
  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  console.log("Terimakasih telah memasukkan data");
  // console.log(`Terimakasih ${nama} sudah menginputkan ${noHp}`);
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
