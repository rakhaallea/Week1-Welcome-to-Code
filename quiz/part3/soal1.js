// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// LOOPING PERTAMA (MAJU)
let i = 1
const number = [];
while (i <= 20) {

    number.push(i);
    i++;
};

// LOOPING PERTAMA (MUNDUR)
let j = 20
const number2 = [];
while (j > 0) {

    number2.push(j);
    j--;
};

// HASIL
const result = number.join(',');
console.log('LOOPING PERTAMA');
console.log(result); // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
console.log('\n');

const result2 = number2.join(',');
console.log('LOOPING KEDUA')
console.log(result2); // 20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1