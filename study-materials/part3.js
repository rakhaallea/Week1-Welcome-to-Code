// console.group("User Detail");
// console.log("Nama: Budi");
// console.log("Umur: 25");
// console.groupEnd();

// console.time("Loop");
// for(let i = 0; i < 1000000; i++) {
//     // proses
// }
// console.timeEnd("Loop");

// function hitungTotal(harga, jumlah) {
//     console.log("Input:", { harga, jumlah });
    
//     const total = harga * jumlah;
//     console.log("Total:", total);
    
//     if (total > 1000000) {
//         console.warn("Transaksi besar terdeteksi");
//     }
    
//     return total;
// }

// hitungTotal(2000000, 1)

// let produk = {
//     nama: "Laptop",                    // string
//     harga: 15000000,                  // number
//     stok: 5,                          // number
//     spesifikasi: ["i7", "16GB RAM"],  // array
//     tersedia: true,                   // boolean
//     getInfo: function() {             // function
//         return `${this.nama} - Rp${this.harga}`;
//     }
// };

// // Menggunakan berbagai tipe data
// if (produk.stok > 0 && produk.tersedia) {
//     console.log(produk.getInfo());
//     console.log("Spesifikasi:", produk.spesifikasi.join(", "));
// }

console.log(0.1 + 0.2);         // 0.30000000000000004
// Solusi: gunakan toFixed() atau kalikan dengan 100 saat perhitungan
console.log((0.1 + 0.2).toFixed(2));  // "0.30"