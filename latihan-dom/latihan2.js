// menggunakan query selector (menghasilkan element)

const p = document.querySelector("section#b ul li:nth-child(2)");
p.style.backgroundColor = "red";

// seleksi elemen dengan scooping

const iniParagraf = document.getElementById("b");
iniBaruParagraf = iniParagraf.querySelector("p");
iniBaruParagraf.style.backgroundColor = "red";
iniBaruParagraf = iniParagraf.querySelector("ul li:nth-child(1)");
iniBaruParagraf.style.backgroundColor = "magenta";
iniBaruParagraf = iniParagraf.querySelector("ul li:nth-child(3)");
iniBaruParagraf.style.backgroundColor = "black";
iniBaruParagraf = iniParagraf.querySelector("ul");
iniBaruParagraf.style.backgroundColor = "blue";
