import { Books } from './models/books'
import Book from './models/book'
import { getShortenedSentence, readBook } from './util/util-text'

let book1Src = require('./books/ressurreicao.json')
let book2Src = require('./books/a_mao_e_a_luva.json')
let book3Src = require('./books/helena.json')
let book4Src = require('./books/iaia_garcia.json')
let book5Src = require('./books/memorias_postumas_de_braz_cubas.json')
let book6Src = require('./books/quincas_borba.json')
let book7Src = require('./books/dom_casmurro.json')
let book8Src = require('./books/esau_e_jaco.json')
let book9Src = require('./books/memorial_de_aires.json')
let book10Src = require('./books/contos_fluminenses.json')

// let booksSrc = [
//   './books/ressurreicao.json',
//   './books/a_mao_e_a_luva.json',
//   './books/helena.json',
//   './books/iaia_garcia.json',
//   './books/memorias_postumas_de_braz_cubas.json',
//   './books/quincas_borba.json',
//   './books/dom_casmurro.json',
//   './books/esau_e_jaco.json',
//   './books/memorial_de_aires.json',
// ]
//
// for (let bookSrc of booksSrc) {
//   let src = require(bookSrc)
//   let book = new Book({ title: src.title, key: src.key, src })
//   readBook(book)
//   Books.addBook(book)
// }

let book = new Book({
  type: 'romance',
  title: 'Ressurreição',
  key: 'res',
  src: book1Src
})
readBook(book)
Books.addBook(book)

let book2 = new Book({
  type: 'romance',
  title: 'A mão e a luva',
  key: 'mao',
  src: book2Src
})
readBook(book2)
Books.addBook(book2)

let book3 = new Book({
  type: 'romance',
  title: 'Helena',
  key: 'helena',
  src: book3Src
})
readBook(book3)
Books.addBook(book3)

let book4 = new Book({
  type: 'romance',
  title: 'Iaiá Garcia',
  key: 'iaia',
  src: book4Src
})
readBook(book4)
Books.addBook(book4)

let book5 = new Book({
  type: 'romance',
  title: 'Memórias Póstumas de Brás Cubas',
  key: 'memorias',
  src: book5Src
})
readBook(book5)
Books.addBook(book5)

let book6 = new Book({
  type: 'romance',
  title: 'Quincas Borba',
  key: 'quincas',
  src: book6Src
})
readBook(book6)
Books.addBook(book6)

let book7 = new Book({
  type: 'romance',
  title: 'Dom Casmurro',
  key: 'dom',
  src: book7Src
})
readBook(book7)
Books.addBook(book7)

let book8 = new Book({
  type: 'romance',
  title: 'Esaú e Jacó',
  key: 'esau',
  src: book8Src
})
readBook(book8)
Books.addBook(book8)

let book9 = new Book({
  type: 'romance',
  title: 'Memorial de Aires',
  key: 'memorial',
  src: book9Src
})
readBook(book9)
Books.addBook(book9)

let book10 = new Book({
  type: 'conto',
  title: 'Contos Fluminenses',
  key: 'flu',
  src: book10Src
})
readBook(book10)
Books.addBook(book10)

// const norm = /[\u0300-\u036f]/g
// const str = 'luvas'
// const res = Books.search(str)

// console.log('res', res)
// for (let e of res) {
//   console.log(`${e[0]} -> ${getShortenedSentence(str, e[1].text, norm, e[1].isMultiple)}`)
//   console.log('Book navigation', Books.navigate(e[1].bookIndex, 0))
// }

exports.Books = Books
