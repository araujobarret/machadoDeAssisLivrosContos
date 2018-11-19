import { Books } from './models/books';
import Book from './models/book';
import { getShortenedSentence, readBook } from './util/util-text';

let book1Src = require('./books/ressurreicao.json');
let book2Src = require('./books/a_mao_e_a_luva.json');

let book = new Book({
  title: 'Ressurreição',
  key: 'res',
  src: book1Src
})
readBook(book)
Books.addBook(book)

let book2 = new Book({
  title: 'A mão e a luva',
  key: 'mao',
  src: book2Src
})
readBook(book2)
Books.addBook(book2)

const norm = /[\u0300-\u036f]/g
// const str = 'luvas'
// const res = Books.search(str)
//
// console.log('res', res)
// for (let e of res) {
//   console.log(`${e[0]} -> ${getShortenedSentence(str, e[1].text, norm, e[1].isMultiple)}`)
//   console.log('Book navigation', Books.navigate(e[1].bookIndex, 0))
// }

exports.Books = Books
