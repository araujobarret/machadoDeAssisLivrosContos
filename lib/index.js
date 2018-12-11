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
let book11Src = require('./books/contos_historias_da_meia_noite.json')
let book12Src = require('./books/contos_paginas_recolhidas.json')
let book13Src = require('./books/contos_papeis_avulsos.json')
let book14Src = require('./books/contos_reliquias_de_casa_velha.json')

let book1 = new Book({
  type: book1Src.type,
  title: book1Src.title,
  key: book1Src.key,
  length: book1Src.blocks.length,
  blocks: new Map(book1Src.blocks),
})
Books.addBook(book1)

let book2 = new Book({
  type: book2Src.type,
  title: book2Src.title,
  key: book2Src.key,
  length: book2Src.blocks.length,
  blocks: new Map(book2Src.blocks),
})
Books.addBook(book2)

let book3 = new Book({
  type: book3Src.type,
  title: book3Src.title,
  key: book3Src.key,
  length: book3Src.blocks.length,
  blocks: new Map(book3Src.blocks),
})
Books.addBook(book3)

let book4 = new Book({
  type: book4Src.type,
  title: book4Src.title,
  key: book4Src.key,
  length: book4Src.blocks.length,
  blocks: new Map(book4Src.blocks),
})
Books.addBook(book4)

let book5 = new Book({
  type: book5Src.type,
  title: book5Src.title,
  key: book5Src.key,
  length: book5Src.blocks.length,
  blocks: new Map(book5Src.blocks),
})
Books.addBook(book5)

let book6 = new Book({
  type: book6Src.type,
  title: book6Src.title,
  key: book6Src.key,
  length: book6Src.blocks.length,
  blocks: new Map(book6Src.blocks),
})
Books.addBook(book6)

let book7 = new Book({
  type: book7Src.type,
  title: book7Src.title,
  key: book7Src.key,
  length: book7Src.blocks.length,
  blocks: new Map(book7Src.blocks),
})
Books.addBook(book7)

let book8 = new Book({
  type: book8Src.type,
  title: book8Src.title,
  key: book8Src.key,
  length: book8Src.blocks.length,
  blocks: new Map(book8Src.blocks),
})
Books.addBook(book8)

let book9 = new Book({
  type: book9Src.type,
  title: book9Src.title,
  key: book9Src.key,
  length: book9Src.blocks.length,
  blocks: new Map(book9Src.blocks),
})
Books.addBook(book9)

let book10 = new Book({
  type: book10Src.type,
  title: book10Src.title,
  key: book10Src.key,
  length: book10Src.blocks.length,
  blocks: new Map(book10Src.blocks),
})
Books.addBook(book10)

let book11 = new Book({
  type: book11Src.type,
  title: book11Src.title,
  key: book11Src.key,
  length: book11Src.blocks.length,
  blocks: new Map(book11Src.blocks),
})
Books.addBook(book11)

let book12 = new Book({
  type: book12Src.type,
  title: book12Src.title,
  key: book12Src.key,
  length: book12Src.blocks.length,
  blocks: new Map(book12Src.blocks),
})
Books.addBook(book12)

let book13 = new Book({
  type: book13Src.type,
  title: book13Src.title,
  key: book13Src.key,
  length: book13Src.blocks.length,
  blocks: new Map(book13Src.blocks),
})
Books.addBook(book13)

let book14 = new Book({
  type: book14Src.type,
  title: book14Src.title,
  key: book14Src.key,
  length: book14Src.blocks.length,
  blocks: new Map(book14Src.blocks),
})
Books.addBook(book14)

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

// let book = new Book({
//   type: 'romance',
//   title: 'Ressurreição',
//   key: 'res',
//   src: book1Src
// })
// readBook(book)
// delete book.src
// Books.addBook(book)
//
// let book2 = new Book({
//   type: 'romance',
//   title: 'A mão e a luva',
//   key: 'mao',
//   src: book2Src
// })
// readBook(book2)
// delete book2.src
// Books.addBook(book2)
//
// let book3 = new Book({
//   type: 'romance',
//   title: 'Helena',
//   key: 'helena',
//   src: book3Src
// })
// readBook(book3)
// delete book3.src
// Books.addBook(book3)
//
// let book4 = new Book({
//   type: 'romance',
//   title: 'Iaiá Garcia',
//   key: 'iaia',
//   src: book4Src
// })
// readBook(book4)
// delete book4.src
// Books.addBook(book4)
//
// let book5 = new Book({
//   type: 'romance',
//   title: 'Memórias Póstumas de Brás Cubas',
//   key: 'memorias',
//   src: book5Src
// })
// readBook(book5)
// delete book5.src
// Books.addBook(book5)
//
// let book6 = new Book({
//   type: 'romance',
//   title: 'Quincas Borba',
//   key: 'quincas',
//   src: book6Src
// })
// readBook(book6)
// delete book6.src
// Books.addBook(book6)
//
// let book7 = new Book({
//   type: 'romance',
//   title: 'Dom Casmurro',
//   key: 'dom',
//   src: book7Src
// })
// readBook(book7)
// delete book7.src
// Books.addBook(book7)
//
// let book8 = new Book({
//   type: 'romance',
//   title: 'Esaú e Jacó',
//   key: 'esau',
//   src: book8Src
// })
// readBook(book8)
// delete book8.src
// Books.addBook(book8)
//
// let book9 = new Book({
//   type: 'romance',
//   title: 'Memorial de Aires',
//   key: 'memorial',
//   src: book9Src
// })
// readBook(book9)
// delete book9.src
// Books.addBook(book9)
//
// let book10 = new Book({
//   type: 'conto',
//   title: 'Contos Fluminenses',
//   key: 'flu',
//   src: book10Src
// })
// readBook(book10)
// delete book10.src
// Books.addBook(book10)

// let copy = JSON.parse(JSON.stringify(Books.books.get('flu')))
// console.log('BOOK', JSON.stringify(copy))

// const norm = /[\u0300-\u036f]/g
// const str = 'luvas'
// const res = Books.search(str)

// console.log('res', res)
// for (let e of res) {
//   console.log(`${e[0]} -> ${getShortenedSentence(str, e[1].text, norm, e[1].isMultiple)}`)
//   console.log('Book navigation', Books.navigate(e[1].bookIndex, 0))
// }

exports.Books = Books
