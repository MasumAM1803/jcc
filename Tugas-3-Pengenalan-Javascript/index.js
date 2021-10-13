// ===== soal 1 =====
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
// .... jawaban soal 1
var strPertama = pertama.substr(0, 5);
var strKedua = pertama.substr(12, 7);
var kalimatPertama = strPertama.concat(strKedua);
var strKetiga = kedua.substr(0, 7);
var strKeempat = kedua.substr(7, 11).toUpperCase();
var kalimatKedua = strKetiga.concat(strKeempat);
console.log(kalimatPertama.concat(kalimatKedua));

// ===== soal 2 =====
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
// .... jawaban soal 2
var intPertama = parseInt(kataPertama);
var intKedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);
var hasilSoalKedua = (intPertama - intKedua - intKetiga) * intKeempat;
console.log(hasilSoalKedua);


// ===== soal 3 =====
var kalimat = 'wah javascript itu keren sekali'; 
// .... jawaban soal 3
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31);
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
