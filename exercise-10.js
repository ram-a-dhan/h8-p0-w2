function bandingkanAngka(angka1,angka2) {
    if (angka1 < angka2) {
        return true;
    } else if (angka1 > angka2) {
        return false;
    } else {
        return -1;
    }
}

var a = 0.9999999999999999;
var b = 1;
console.log(`is ${a} < ${b} ?`);
console.log(bandingkanAngka(a,b));

a = 100;
b = 1;
console.log(`is ${a} < ${b} ?`);
console.log(bandingkanAngka(a,b));

a = '50';
b = '50';
console.log(`is ${a} < ${b} ?`);
console.log(bandingkanAngka(a,b));
