// ===== soal 1 =====
var nilai;
// .... jawaban soal 1
nilai = 100;
var index = '';
if (nilai >= 85) {
    index = 'A';
} else if((nilai >= 75) && (nilai < 85)){
    index = 'B';
} else if((nilai >= 65) && (nilai < 75)){
    index = 'C';
} else if((nilai >= 55) && (nilai < 65)){
    index = 'D';
} else {
    index = 'E';
}
console.log('Jawaban Soal 1');
console.log(index);
console.log('');


// ===== soal 2 =====
var tanggal = 18;
var bulan = 3;
var tahun = 1998;
// .... jawaban soal 2
switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        bulan = 'Bulan Tidak Ada';
        break;
}
var hasil = tanggal.toString() + ' ' + bulan + ' ' + tahun.toString();
console.log('Jawaban Soal 2');
console.log(hasil);
console.log('');


var i, j;
// ===== soal 3 =====
var n = 7;
var hasilKetiga = '';
console.log('Jawaban Soal 3');
console.log("Output untuk n = " + n);
for (i = 0; i < n; i++) {
    for (j = 0; j <= i; j++) {
        hasilKetiga += '#' + ' '    
    }
    console.log(hasilKetiga);
    hasilKetiga = '';
}
console.log('');


// ===== soal 4 =====
// .... jawaban soal 4
var m = 10;
console.log('Jawaban Soal 4');
console.log("Output untuk m = " + m);
for (i = 1; i <= m; i++) {
    if (i % 3 == 1) {
        hasil = 'I love programming';
    } else if (i % 3 == 2) {
        hasil = 'I love Javascript';
    } else if (i % 3 == 0) {
        hasil = 'I love VueJS \n';
        switch (i) {
            case 3:
                hasil += "===";
                break;
            case 6:
                hasil += "======";
                break;
            case 9:
                hasil += "=========";
                break;
            default:
                break;
        }
    }
    console.log(i + ' - ' + hasil);
}