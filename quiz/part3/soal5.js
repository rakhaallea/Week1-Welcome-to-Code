// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let pattern = "";

for (i = 0; i < input; i++) {
    for (j = 0; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n"
}

console.log(pattern);