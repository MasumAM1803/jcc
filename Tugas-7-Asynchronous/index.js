// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini

function bacaBuku(time, books, i) {
    if (i < books.length) {
        readBooks(time, books[i], function (sisaWaktu) {
            if (sisaWaktu > 0 ) {
                i += 1;
                bacaBuku(sisaWaktu, books, i)
            }
        })
    }
}
bacaBuku(10000, books, 0)

// Cara pertama
/*
readBooks(10000, books[0], function (sisa) {
    readBooks(sisa, books[1], function (sisa) {
        readBooks(sisa, books[2], function (sisa) {
            readBooks(sisa, books[3], function (sisa) {
            })
        })
    })
})
*/