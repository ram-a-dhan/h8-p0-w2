function konversiMenit(menit) {
    var jam = 0;
    while (menit >= 60) {
        menit -= 60;
        jam++;
    }
    if (jam < 10) {
        jam = '0' + jam;
    }
    if (menit < 10) {
        menit = '0' + menit;
    }
    return `${jam}:${menit}`;
}

var minute = 4140;
console.log(`${minute} minute(s) is equal to ${konversiMenit(minute)} hour(s)`);
console.log('NICE');
minute = 260;
console.log(`${minute} minute(s) is equal to ${konversiMenit(minute)} hour(s)`);
console.log('LMAO');
