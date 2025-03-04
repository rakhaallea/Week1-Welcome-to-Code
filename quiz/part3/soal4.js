// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// Loop dengan pertamban 2
for (let i = 3; i < 100; i += 2) {
    if (i % 3 === 0) {
        console.log(`${i} kelipatan 3`);
    }
}

// Loop dengan pertamban 5
console.log('\n')

for (let i = 6; i < 100; i += 2) {
    if (i % 6 === 0) {
        console.log(`${i} kelipatan 6`);
    }
}

// Loop dengan pertamban 9
console.log('\n')

for (let i = 10; i <= 100; i += 2) {
    if (i % 10 === 0) {
        console.log(`${i} kelipatan 10`);
    }
}