const NORM = /[\u0300-\u036f]/g
const MAX_BLOCKS = 20

function getNextHeader (book, blockIndex, decreasing = false) {
  let block, headerIndex
  if (decreasing) {
    for (let i = blockIndex; i >= 0; i--) {
      block = book.blocks.get(i)
      if (headerIndex) {
        if (block.type === 'Header') { headerIndex = i; continue}
        if (block.type === 'Para') break
      } else {
        if (block.type === 'Header') headerIndex = i
      }
    }
  } else {
    for (let i = blockIndex; i < book.length; i++) {
      block = book.blocks.get(i)
      if (headerIndex) {
        if (block.type === 'Header') { headerIndex = i; continue}
        if (block.type === 'Para') break
      } else {
        if (block.type === 'Header') headerIndex = i
      }
    }
  }
  if (headerIndex) return headerIndex
  if (!headerIndex && decreasing) return 0
  if (!headerIndex && !decreasing) return book.blocks.size - 1
}

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
          bookIndex: book[0],
          blockIndex: block[0],
          isMultiple,
          text: block[1].sentences
        })
      }
    }
  }
  return results
}

// Return the blocks, initialBlock Number and finalBlockNumber from a book and blockIndex parameter
Books.navigate = function (bookIndex, blockIndex) {
  const book = this.books.get(bookIndex)
  let blocks = []
  let initBlock, lastBlock
  if (!book) return null
  // Get the header Index before the blockIndex
  let initHeader = getNextHeader(book, blockIndex, true)
  // Get the header Index after the blockIndex
  let lastHeader = getNextHeader(book, blockIndex, false)
  initBlock = initHeader
  // get the closer initBlock repecting the law of max_blocks
  while (blockIndex - initBlock > MAX_BLOCKS) {
    initBlock += MAX_BLOCKS
  }
  // grab the lastBlock before the lastHeader
  lastBlock = (initBlock + MAX_BLOCKS < lastHeader && lastHeader != book.blocks.size - 1) ? initBlock + MAX_BLOCKS : lastHeader - 1
  // loop to get the blocks
  for (let i = initBlock; i < lastBlock; i++) {
    blocks.push(book.blocks.get(i))
  }
  return {
    initialBlock: initBlock,
    finalBlock: lastBlock,
    blocks
  }
}

exports.Books = Books