// latihan dom traversal

let close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     close[i].parentElement.style.display = "none";
//   });
// }

close.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.target.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
console.log(nama.nextElementSibling);
