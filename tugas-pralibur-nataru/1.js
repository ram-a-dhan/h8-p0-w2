/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
//	find min, mid, max with manual array bubble sort
//	FOR min <= X <= max
//  	SWITCH X
//  		case (min, mid, max)	--> don't add to lost numbers
//  		default					--> add to lost numbers

function lostNumbers(first, second, third) {

	// sort the numbers in array form
	var nums = [first, second, third];
	var temp;
	for (var i = 0; i < nums.length-1; i++) {
		for (var j = 0; j < nums.length-1-i; j++) {
			if (nums[j] > nums[j+1]) {
				temp = nums[j];
				nums[j] = nums[j+1];
				nums[j+1] = temp;
			} 
		}
	}
	// return nums[nums.length-1];
	// loop to find internumbers but not the mid number
	var x = [];
	for (var k = nums[0]; k <= nums[nums.length-1]; k++) {
		switch (k) {
			case nums[0]:
				break;
			case nums[1]:
				break;
			case nums[2]:
				break;
			default:
				x.push(k);
			break;
		}
	}
	if (x.length === 0) {
		return 'Tidak ada nangka sama sekali! :(';
	} else {
		return x;
	}
}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali
