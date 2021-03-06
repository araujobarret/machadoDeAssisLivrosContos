import { getNextHeader, getNextParagraph } from '../util/util-text';

const NORM = /[\u0300-\u036f]/g
const MAX_BLOCKS = 20

var Books = {
  books: new Map()
}

Books.addBook = function (book) {
  this.books.set(book.key, book)
}

// use the regex /[\u0300-\u036f]/g to replace all accents by normal characters
// return a list of blocks with the text, index and respective book to link to it when the user touch on it
// TODO: ignore lower/upper case in the search
Books.search = function (str) {
  return new Promise((resolve) => {
    let results = new Map()
    let searchIndex = 0
    let reg = new RegExp(str.normalize('NFD').replace(NORM, ""), 'g')
    for (let book of this.books) {
      for (let block of book[1].blocks) {
        // Attribute to check if the search was found more than one time in the same sentence
        let isMultiple = false
        if (block[1].sentences.normalize('NFD').replace(NORM, "").match(reg) && block[1].type !== 'Header') {
          // if the match is only one
          if (block[1].sentences.normalize('NFD').replace(NORM, "").match(reg).length > 1) isMultiple = true
          results.set(searchIndex++, {
            title: book[1].title,
            bookIndex: book[0],
            blockIndex: block[0],
            isMultiple,
            text: block[1].sentences
          })
        }
      }
    }
    resolve(results)
  })
}

// Return the blocks, initialBlock Number and finalBlockNumber from a book and blockIndex parameter
Books.navigate = function (bookIndex, blockIndex) {
  const book = this.books.get(bookIndex)
  let blocks = []
  let initBlock, lastBlock, previousBlock, nextBlock
  if (!book) return null
  // Get the header Index before the blockIndex
  // console.log('blockIndex', blockIndex)
  let initHeader = getNextHeader(book, blockIndex, true)
  // Get the header Index after the blockIndex
  let lastHeader = getNextHeader(book, blockIndex, false)
  initBlock = initHeader.index
  // console.log('initHeader', initHeader)
  // console.log('initBlock', initBlock)
  // get the closer initBlock repecting the law of max_blocks
  while (blockIndex - initBlock > MAX_BLOCKS) { initBlock += MAX_BLOCKS }
  // console.log('initBlock2', initBlock)
  // console.log('lastHeader', lastHeader)
  // console.log(`${initBlock} + ${MAX_BLOCKS} < ${lastHeader.index} && ${lastHeader.index} != ${book.blocks.size - 1}`)
  // grab the lastBlock before the lastHeader
  lastBlock = (initBlock + MAX_BLOCKS < lastHeader.index && lastHeader.index != book.blocks.size - 1) ? initBlock + MAX_BLOCKS : lastHeader.index - 1
  // console.log('lastBlock', lastBlock)
  // loop to get the blocks
  if (initBlock + MAX_BLOCKS < lastHeader.index && lastHeader.index != book.blocks.size - 1) {
    for (let i = initBlock; i < lastBlock; i++) {
      blocks.push(book.blocks.get(i))
    }
  } else {
    for (let i = initBlock; i <= lastBlock; i++) {
      blocks.push(book.blocks.get(i))
    }
  }
  if (lastBlock === book.blocks.size - 1) {
    nextBlock = null
  }
  if (blockIndex + MAX_BLOCKS >= lastBlock) {
    nextBlock = lastBlock + 1
  } else {
    nextBlock = blockIndex + MAX_BLOCKS
  }
  previousBlock = initBlock
  let obj = {
    initialBlock: initBlock,
    finalBlock: lastBlock,
    previousBlock,
    nextBlock,
    blocks,
    conto: initHeader.conto
  }
  // console.log('obj', obj)
  return obj
}

exports.Books = Books
