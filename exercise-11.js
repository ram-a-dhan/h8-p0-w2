function balikKata(kata) {
    var atak ='';
    var i = kata.length;
    while (i > 0) {
        i--;
        atak += kata[i];
    }
    return atak;
}

var word = 'esrever emordnilap rorrim margibma';
console.log(`\"${word}\" dibalik jadi \"${balikKata(word)}\"`);
const bonus = 'kasur rusak';
console.log(`\"${bonus}\" dibalik tetep jadi \"${balikKata(bonus)}\"`);
