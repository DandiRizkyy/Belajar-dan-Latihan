// let coba = new Promise((resolve) => {
//   setTimeout(function () {
//     resolve("selesai");
//   }, 2000);
// });

// coba.then(function () {
//   console.log(coba);
// });

function cobaPromise() {
  return new Promise((resolve, reject) => {
    let waktu = 6000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaaan");
    }
  });
}

//console menggunakan cara then catch (promise)
let coba = cobaPromise();
coba
  .then(function () {
    console.log(coba);
  })
  .catch(function () {
    console.log(coba);
  });

//console menggunakan cara try catch (async await)
async function cobaAsync() {
  try {
    coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
    console.log(err);
  }
}

cobaAsync();
