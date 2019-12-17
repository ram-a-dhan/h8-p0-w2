var tgl = 31;
var bln = 12;
var thn = 2200;

if (tgl >= 1 && tgl <= 31 && thn >= 1900 && thn <= 2200) {
    switch (bln) {
        case 1:
            console.log(`${tgl} Januari ${thn}`);
            break;
        case 2:
            console.log(`${tgl} Februari ${thn}`);
            break;
        case 3:
            console.log(`${tgl} Maret ${thn}`);
            break;
        case 4:
            console.log(`${tgl} April ${thn}`);
            break;
        case 5:
            console.log(`${tgl} Mei ${thn}`);
            break;
        case 6:
            console.log(`${tgl} Juni ${thn}`);
            break;
        case 7:
            console.log(`${tgl} Juli ${thn}`);
            break;
        case 8:
            console.log(`${tgl} Agustus ${thn}`);
            break;
        case 9:
            console.log(`${tgl} September ${thn}`);
            break;
        case 10:
            console.log(`${tgl} Oktober ${thn}`);
            break;
        case 11:
            console.log(`${tgl} November ${thn}`);
            break;
        case 12:
            console.log(`${tgl} Desember ${thn}`);
            break;
        default :
            console.log('Error! Terdapat kesalahan dalam input tanggal/bulan/tahun.');
            break;
    }
} else {
    console.log('Error! Terdapat kesalahan dalam input tanggal/bulan/tahun.');
}