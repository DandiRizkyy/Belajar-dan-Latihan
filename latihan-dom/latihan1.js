// seleksi satu2 berdasarkan id (menghasilkan element)
const judul = document.getElementById("judul");
judul.style.backgroundColor = "grey";
judul.style.color = "red";
judul.innerHTML = "HAI broder";

//menseleksi elemen menggunakan tag name (menghasilkan htmlcollections)

const p = document.getElementsByTagName("p");
// bisa pakai for untuk menyeleksi semua element
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}
// atau bisa menseleksi perbiji dengan seleksi nomor berapa didalam array
p[3].style.backgroundColor = "blue";

//menseleksi elemen menggunakan class name (menghasilkan htmlcollections)
const p1 = document.getElementsByClassName("p1");
p1[0].style.backgroundColor = "orange";
