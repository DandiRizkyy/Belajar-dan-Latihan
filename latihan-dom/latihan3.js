const p3 = document.querySelector(".p3");

function ubahWarna() {
  p3.style.backgroundColor = "red";
}

const p2 = document.querySelector(".p2");
p2.addEventListener("click", ubahWarnaP2);

function ubahWarnaP2() {
  p2.style.backgroundColor = "orange";
}

const p1 = document.querySelector(".p1");
p1.onclick = ubahWarnaP1;

function ubahWarnaP1() {
  p1.style.backgroundColor = "green";
}
