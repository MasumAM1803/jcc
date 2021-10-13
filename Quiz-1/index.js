// ===== soal 1 =====
// .... jawaban soal 1
function jumlah_kata(kalimat) {
    var trim_kalimat = kalimat.trim();
    var split_kalimat = trim_kalimat.split(" ");
    var count = 0;
    for (var i = 0; i < split_kalimat.length; i++) {
        count += 1;
    } 
    return count;
}

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"
console.log(jumlah_kata(kalimat_1)); // 6
console.log(jumlah_kata(kalimat_2)); // 2


// ===== soal 2 =====
// .... jawaban soal 2
function next_date(tanggal, bulan, tahun) {
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

    if ((tanggal == 29) && (bulan = 'Februari') || (tanggal == 28) && (bulan = 'Februari')) {
        tanggal = 1;
        bulan = 'Maret';
    } else if (tanggal == 30) {
        if (bulan == 'April') {
            tanggal = 1;
            bulan = 'Mei';
        } else if (bulan == 'Juni') {
            tanggal = 1;
            bulan = 'Juli';
        } else if (bulan == 'September') {
            tanggal = 1;
            bulan = 'Oktober';
        } else if (bulan == 'November') {
            tanggal = 1;
            bulan = 'Desember';
        } else {
            tanggal = tanggal + 1;
        }
    } else if (tanggal == 31) {
        if (bulan == 'Januari') {
            tanggal = 1;
            bulan = 'Februari';
        } else if (bulan == 'Maret') {
            tanggal = 1;
            bulan = 'April';
        } else if (bulan == 'Mei') {
            tanggal = 1;
            bulan = 'Juni';
        } else if (bulan == 'Juli') {
            tanggal = 1;
            bulan = 'Agustus';
        } else if (bulan == 'Agustus') {
            tanggal = 1;
            bulan = 'September';
        } else if (bulan == 'Oktober') {
            tanggal = 1;
            bulan = 'November';
        }  else if (bulan == 'Desember') {
            tanggal = 1;
            bulan = 'Januari';
            tahun = tahun + 1
        }else {
            tanggal = tanggal + 1;
        }
    } else {
        tanggal = tanggal + 1;
    }
    var str_tgl = tanggal.toString();
    var str_tahun = tahun.toString();
    var hasil = str_tgl + ' ' + bulan + ' ' + str_tahun;
    return hasil;
}


var tanggal = 29
var bulan = 2
var tahun = 2020
console.log(next_date(tanggal, bulan, tahun )); // output : 1 Maret 2020

var tanggal = 28
var bulan = 2
var tahun = 2021
console.log(next_date(tanggal, bulan, tahun ));

var tanggal = 20
var bulan = 12
var tahun = 2020
console.log(next_date(tanggal, bulan, tahun ));