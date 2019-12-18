var i, j, str;
// 1. Line of Stars
console.log('\n');
console.log('========== 1. Line of Stars ==========');
var rows1 = 5;
for (i = 1; i <= rows1; i++) {
    console.log('*');
}

console.log('\n');
console.log('========== 2. Block of Stars ==========');
var rows2 = 10;
for (i = 1; i <= rows2; i++) {
    str = '';
    for (j = 1; j <= rows2; j++) {
        str += ' * ';
    }
    console.log(str);
}

console.log('\n');
console.log('========== 3. Pythagoras of Stars ==========');
var rows3 = 15;
for (i = 1; i <= rows3; i++) {
    str = '';
    for (j = 1; j <= i; j++) {
        str += ' * ';
    }
    console.log(str);
}