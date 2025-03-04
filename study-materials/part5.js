// const mobil = { 
//     merek: "Toyota", tahun: 2020,
//     warna: "Merah", harga: 50000000 
//  };
// for (const key in mobil) {
//   console.log(key, ":", mobil[key]); // merek: Toyota, tahun: 2020
// }


//Latihan Soal Looping
// for (let i = 1; i <= 100; i++) {
//     if (i % 28 === 0) { // Kelipatan 4 dan 7 (KPK = 28)
//         console.log("FOURSEVEN");
//     } else if (i % 4 === 0) {
//         console.log("FOUR");
//     } else if (i % 7 === 0) {
//         console.log("SEVEN");
//     } else {
//         console.log(i);
//     }
// }

// Nested Loop
for (let i = 0; i < 3; i++) {       // Outer loop
    console.log(`Outer: ${i}`);

    for (let j = 0; j < 2; j++) {    // Inner loop
        console.log(`  Inner: ${j}`);
    }
}