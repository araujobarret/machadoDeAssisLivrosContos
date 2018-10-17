const { Books } = require('./models/books')
const Book = require('./models/book')
const { getShortenedSentence, readBook } = require('./util/util-text')

let book = new Book({ title: 'Ressurreição', key: 'res', filePath: '../books/ressurreicao.json' })
readBook(book)
Books.addBook(book)

let book2 = new Book({ title: 'A mão e a luva', key: 'mao', filePath: '../books/a_mao_e_a_luva.json' })
readBook(book2)
Books.addBook(book2)

const norm = /[\u0300-\u036f]/g
const str = 'luvas'
const res = Books.search(str)

for (let e of res) {
  console.log(`${e[0]} -> ${getShortenedSentence(str, e[1].text, norm, e[1].isMultiple)}`)
  console.log('Book navigation', Books.navigate(e[1].bookIndex, e[1].blockIndex))
}
