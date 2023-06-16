// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang 'javascript lanjutan'
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi int, ubah menit menjadi detik
  .map((waktu) => {
    //10:30 > di split [10, 30]
    const parts = waktu.split(":").map((part) => parseFloat(part)); //pakai parse float untuk conversi hasilnya ke float
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detiknya

  .reduce((accumu, current) => {
    return accumu + current;
  });

// ubah formatnya jadi jam menit detik

const jam = Math.floor(jsLanjut / 3600); //Math.floor digunakan untuk pembulatan kebawah, Math.sail digunakan untuk pembulatan keatas dan Math.round digunakan untuk pembulatan terdekat
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);

const detik = jsLanjut - menit * 60;
// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const totalVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pTotalVideo = document.querySelector(".jumlah-video");
pTotalVideo.textContent = `${totalVideo} Video`;

console.log();
