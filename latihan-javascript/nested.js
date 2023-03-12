let bintang ='';

for (let i = 3; i > 0; i--) {
    for (let j = 0; j < i ; j++) {
        bintang += '*';
    } 
 
    bintang += '\n';
}
console.log(bintang);