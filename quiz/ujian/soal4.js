//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    const splitStr = str.split('');
    let countX = 0;
    let countY = 0;

    for (let i = 0; i < str.length; i++) {
        if (splitStr[i] === "x") {
            countX += 1;
        }
        if (splitStr[i] === "o") {
            countY += 1;
        }
    }

    if (countX === countY) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true