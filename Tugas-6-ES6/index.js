// ===== soal 1 =====
// arrow function luas dan keliling persegi panjang
// .... jawaban soal 1
const luasPersegiPanjang = (p, l) => {
    return p * l;
}

const kelilingPersegiPanjang = (p, l) => {
    return 2 * (p + l);
}

console.log(luasPersegiPanjang(5,3));
console.log(kelilingPersegiPanjang(5,3));
console.log('');


// ===== soal 2 =====
// .... jawaban soal 2
const newFunction = (firstName, lastName) => {
    return {
        fullName() {console.log(firstName + " " + lastName)}
    }
}
// Driver code
newFunction("William", "Imoh").fullName()
console.log('');


// ===== soal 3 =====
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}
// .... jawaban soal 3
const {firstName, lastName, address, hobby} = newObject;
// Driver code
console.log(firstName, lastName, address, hobby);
console.log('');


// ===== soal 4 =====
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
// .... jawaban soal 4
const combine = [...west, ...east];
for (value of combine) {
    // Driver code
    console.log(value);
}
console.log('');


// ===== soal 5 =====
const planet = "earth";
const view = "glass";
// .... jawaban soal 5
const after = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`;
console.log(after)