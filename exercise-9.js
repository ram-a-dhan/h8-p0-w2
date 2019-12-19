// 1. Shout Out
console.log('\n');
console.log('========== 1. Shout Out ==========');

function shoutOut() {
    return 'Hello Function!';
}

console.log(shoutOut());


// 2. Calculate Multiply
console.log('\n');
console.log('========== 2. Calculate Multiply ==========');

const calculateMultiply = function(a,b) {
    return a * b;
};

var num1 = -9;
var num2 = 11;
console.log(calculateMultiply(num1,num2));

// 3. Process Sentence
console.log('\n');
console.log('========== 3. Process Sentence ==========');

const processSentence = (nama,umur,alamat,hobi) => `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobi yaitu ${hobi}!`;

var name    = 'Ram';
var age     = 30;
var address = 'Jl. Lili BSD Serpong';
var hobby   = 'coding Javascript';
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

console.log('\n');