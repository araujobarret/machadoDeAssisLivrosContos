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
let book12Src = require('./books/contos_historias_sem_data.json')
let book13Src = require('./books/contos_paginas_recolhidas.json')
let book14Src = require('./books/contos_papeis_avulsos.json')
let book15Src = require('./books/contos_reliquias_de_casa_velha.json')
let book16Src = require('./books/contos_varias_historias.json')
let book17Src = require('./books/contos_outros_fase1.json')
let book18Src = require('./books/contos_outros_fase2.json')
let book19Src = require('./books/contos_outros_fase3.json')
let book20Src = require('./books/contos_outros_fase4.json')
let book21Src = require('./books/contos_outros_fase5.json')
let book22Src = require('./books/contos_outros_fase6.json')
let book23Src = require('./books/contos_outros_fase7.json')
let book24Src = require('./books/contos_outros_fase8.json')
let book25Src = require('./books/contos_outros_fase9.json')
let book26Src = require('./books/contos_outros_fase10.json')

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

let book15 = new Book({
  type: book15Src.type,
  title: book15Src.title,
  key: book15Src.key,
  length: book15Src.blocks.length,
  blocks: new Map(book15Src.blocks),
})
Books.addBook(book15)

let book16 = new Book({
  type: book16Src.type,
  title: book16Src.title,
  key: book16Src.key,
  length: book16Src.blocks.length,
  blocks: new Map(book16Src.blocks),
})
Books.addBook(book16)

let book17 = new Book({
  type: book17Src.type,
  title: book17Src.title,
  key: book17Src.key,
  length: book17Src.blocks.length,
  blocks: new Map(book17Src.blocks),
})
Books.addBook(book17)

let book18 = new Book({
  type: book18Src.type,
  title: book18Src.title,
  key: book18Src.key,
  length: book18Src.blocks.length,
  blocks: new Map(book18Src.blocks),
})
Books.addBook(book18)

let book19 = new Book({
  type: book19Src.type,
  title: book19Src.title,
  key: book19Src.key,
  length: book19Src.blocks.length,
  blocks: new Map(book19Src.blocks),
})
Books.addBook(book19)

let book20 = new Book({
  type: book20Src.type,
  title: book20Src.title,
  key: book20Src.key,
  length: book20Src.blocks.length,
  blocks: new Map(book20Src.blocks),
})
Books.addBook(book20)

let book21 = new Book({
  type: book21Src.type,
  title: book21Src.title,
  key: book21Src.key,
  length: book21Src.blocks.length,
  blocks: new Map(book21Src.blocks),
})
Books.addBook(book21)

let book22 = new Book({
  type: book22Src.type,
  title: book22Src.title,
  key: book22Src.key,
  length: book22Src.blocks.length,
  blocks: new Map(book22Src.blocks),
})
Books.addBook(book22)

let book23 = new Book({
  type: book23Src.type,
  title: book23Src.title,
  key: book23Src.key,
  length: book23Src.blocks.length,
  blocks: new Map(book23Src.blocks),
})
Books.addBook(book23)

let book24 = new Book({
  type: book24Src.type,
  title: book24Src.title,
  key: book24Src.key,
  length: book24Src.blocks.length,
  blocks: new Map(book24Src.blocks),
})
Books.addBook(book24)

let book25 = new Book({
  type: book25Src.type,
  title: book25Src.title,
  key: book25Src.key,
  length: book25Src.blocks.length,
  blocks: new Map(book25Src.blocks),
})
Books.addBook(book25)

let book26 = new Book({
  type: book26Src.type,
  title: book26Src.title,
  key: book26Src.key,
  length: book26Src.blocks.length,
  blocks: new Map(book26Src.blocks),
})
Books.addBook(book26)

exports.Books = Books
