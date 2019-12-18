// 1. Looping with WHILE
console.log('\n');
console.log('=====================\n1. Looping with WHILE\n=====================');
console.log('\n----- 1st Looping -----');
var i = 2;
while (i <= 20) {
    console.log(`${i} I love coding`);
    i += 2;
}
console.log('\n----- 2nd Looping -----');
var j = 20;
while (j >= 2) {
    console.log(`${j} I will become fullstack developer`);
    j -= 2;
}

// 2. Looping with FOR
console.log('\n');
console.log('===================\n2. Looping with FOR\n===================');
console.log('\n----- 1st Looping -----');
for (var k = 1; k <= 20; k++) {
    console.log(`${k} I love coding`);
}
console.log('\n----- 2nd Looping -----');
for (var l = 20; l >= 1; l--) {
   console.log(`${l} I will become fullstack developer`);
}

// 3. Odd & Even Numbers
console.log('\n');
console.log('===================\n3. Odd & Even Numbers\n===================');
console.log('\n----- +1 Counter -----');
for (var m = 1; m <= 100; m++) {
    if (m % 2 === 0) {
        console.log(`${m} - EVEN`);
    } else {
        console.log(`${m} - ODD`);
    }
}

console.log('\n----- +2 Counter & Multiple of 3 -----');
for (var n = 1; n <= 100; n += 2) {
    if (n % 3 === 0) {
        console.log(`${n} is a multiple of ${3}`);
    } else {
        console.log(`${n}`);
    }
}

console.log('\n----- +5 Counter & Multiple of 6 -----');
for (var p = 1; p <= 100; p += 5) {
    if (p % 6 === 0) {
        console.log(`${p} is a multiple of ${6}`);
    } else {
        console.log(`${p}`);
    }
}

console.log('\n----- +9 Counter & Multiple of 10 -----');
for (var r = 1; r <= 100; r += 9) {
    if (r % 10 === 0) {
        console.log(`${r} is a multiple of ${10}`);
    } else {
        console.log(`${r}`);
    }
}

console.log('\n');
