let tanya = true;
while (tanya){

//menangkap input dari player

let input = prompt('Pilih : gajah, orang, semut ')

//menangkap input dari computer
//generate bilangan random
let random = Math.random();


if (random < 0.37) {
    random = 'gajah';
} else if (random >= 0.37 && random <= 0.67) {
    random = 'semut';
} else {
    random = 'orang';
}

let hasil = '';
//menentukan rules
if (input === random) {
    hasil = 'SERI!';
} else if (input == 'gajah') {
    // if (random == 'orang') {
    //     alert('MENANG!');
    // } else {
    //     alert('KALAH!');
    // }
    hasil = (random == 'orang')? 'MENANG!' : 'KALAH!';
} else if (input == 'orang') {
    // if (random == 'gajah') {
    //     alert('KALAH!');
    // } else {
    //     alert('MENANG!');
    // }
    hasil = (random == 'gajah')? 'KALAH!' : 'MENANG!';
} else if (input == 'semut') {
    // if (random == 'orang') {
    //     alert('KALAH!');
    // } else {
    //     alert('MENANG!');
    // }
    hasil = (random == 'orang')? 'KALAH!' : 'MENANG!';
} else if (input == 'orang') {
    // if (random == 'semut') {
    //     alert('MENANG!');
    // } else {
    //     alert('KALAH!');
    // }
    hasil = (random == 'semut')? 'MENANG!' : 'KALAH!';
} else {
    alert('SALAH INPUT');
}

//menampilkan hasil
alert(`Kamu memilih ${input} dan komputer memilih ${random} hasilnya adalah..`)
console.log(input);
console.log(random);
alert(hasil);
console.log(hasil);

tanya = confirm("lagi?");
}