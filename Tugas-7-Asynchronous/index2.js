var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function bacaBuku(time, books, i) {
    if (i < books.length) {
        readBooksPromise(time, books[i])
            .then((resolve) => bacaBuku(resolve, books, i += 1))
            .catch((reject) => console.log(reject))
    }
}
bacaBuku(10000, books, 0)

// Cara
/*
readBooksPromise(10000, books[0])
    .then((resolve) => readBooksPromise(resolve, books[1]))
        .then((resolve) => readBooksPromise(resolve, books[2]))
            .then((resolve) => readBooksPromise(resolve, books[3]))
            .catch((reject) => console.log(reject))
        .catch((reject) => console.log(reject))
    .catch((reject) => console.log(reject))
*/