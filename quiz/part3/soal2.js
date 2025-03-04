// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

//LOOPING PERTAMA (MAJU)
const number = []
for (let i = 0; i <= 20; i++) {
    number.push(i);
}

// LOOPING KEDUA (MUNDUR)
const number2 = []
for (let i = 20; i >= 0; i--) {
    number2.push(i);
}

// HASIL
const result = number.join(',');
const result2 = number2.join(',');
console.log('LOOPING PERTAMA'); // LOOPING PERTAMA
console.log(result); //0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
console.log('\n')
console.log('LOOPING KEDUA'); //LOOPING KEDUA
console.log(result2); //20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0