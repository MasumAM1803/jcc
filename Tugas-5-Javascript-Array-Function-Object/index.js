// ===== soal 1 =====
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
// .... jawaban soal 1
for (var i = 0; i < daftarHewan.length; i++) {
    for (var j = i; j < daftarHewan.length; j++) {
        if (daftarHewan[j] < daftarHewan[i]) {
            var temp = daftarHewan[j];
            daftarHewan[j] = daftarHewan[i];
            daftarHewan[i] = temp;
        }
    }
    console.log(daftarHewan[i]);
}
console.log('');

// ===== soal 2 =====
// Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming" 
// .... jawaban soal 2
function introduce(biodata) {
    return "Nama saya " + biodata.name + ", umur saya " + biodata.age + " tahun, "
            + "alamat saya di " + biodata.address 
            + ", dan saya punya hobby yaitu " + biodata.hobby;
}
var data = {name : "Masum" , age : 23 , address : "Kp Ciganitri" , hobby : "Membuat Program dan Desain" }
var perkenalan = introduce(data);
console.log(perkenalan);
console.log('');


// ===== soal 3 =====
// .... jawaban soal 3
var vokal = ['a', 'A', 'i', 'I', 'u', 'U', 'e', 'E', 'o', 'O'];
function hitung_huruf_vokal(nama) {
    var count = 0;
    for (i = 0; i < nama.length; i++) {
       temp = nama.charAt(i);
       for (j = 0; j < vokal.length; j++) {
           if ((temp == vokal[j])){
               count += 1;
            }
        }
    }
    return count;
}

var hitung_1 = hitung_huruf_vokal("Muhammad");

var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1 , hitung_2); // 3 2
console.log('');


// ===== soal 4 =====
function hitung(angka) {
    return (2 * angka) - 2;
}
// .... jawaban soal 4
console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8