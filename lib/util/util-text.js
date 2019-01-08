function getChar(char) {
  if (!char.t && !char.c) return ''
  if (char.t === 'Space') return ' '
  return char.c
}

function addText(obj) {
  let sentence = ''
  if (Array.isArray(obj.c)) {
    for (let e of obj.c) {
      if (Array.isArray(e.c)) {
        sentence += addText(e.c) + ' '
      } else {
        sentence += getChar(e)
      }
    }
  } else {
    if (Array.isArray(obj)) {
      for (let e of obj) {
        sentence += getChar(e)
      }
    } else {
      sentence += getChar(obj)
    }
  }
  return sentence
}

// Read blocks from the file and returns its object
function readBlock(block) {
  let type
  let sentence = ''
  let conto = null
  if (block.t && block.c) {
    type = block.t
    conto = block.s
    for (let e of block.c) {
      if (e.c || e.t || Array.isArray(e)) sentence += addText(e)
    }
    if (sentence !== '') return { type, sentences: sentence, conto }
  }
  return null
}

// Read all the bookBlocks and incorporate the blocks to the book instance
function readBook(book) {
  for (let b of book.src.blocks) {
    book.addBlock(readBlock(b))
  }
}

// Get a shortened sentence from a block, maximum of 60 characters + word.length
function getShortenedSentence(word, sentence, reg = /[\u0300-\u036f]/g, multiple = false) {
  let shortened
  let normalizedSentence = sentence.normalize('NFD').replace(reg, "")
  let startSlice = normalizedSentence.indexOf(word)
  startSlice = (startSlice - 40 <= 0) ? 0 : startSlice - 40
  let endSlice
  // if the word occur more than one time in the sentence do this
  if (multiple) {
    endSlice = startSlice + word.length
  } else {
    let indexOf = normalizedSentence.indexOf(word)
    do {
      endSlice = indexOf + word.length
      indexOf = normalizedSentence.indexOf(indexOf, endSlice)
    } while (indexOf !== -1)
  }
  // get the 30 characters from left, but try to find a blank space to stop over it
  endSlice = (endSlice + 40 < sentence.length) ? endSlice + 40 : sentence.length
  for (let i = startSlice; i > 0; i--) {
    if (sentence[i] === ' ') break
    startSlice--
  }
  // get the 30 characters from right, but try to find a blank space or a dot to stop over it
  for (let i = endSlice; i < sentence.length; i++) {
    if (sentence[i] === ' ' || (sentence[i] === '.' && i === sentence.length - 1)) break
    endSlice++
  }
  // console.log('start', startSlice)
  // console.log('end', endSlice)
  // console.log('sentence length', sentence.length)
  // try to add ... to the start, grab the slice and try to add ... in the end
  shortened = startSlice !== 0 ? '...' : ''
  shortened += sentence.slice(startSlice, endSlice + 1)
  shortened += endSlice !== sentence.length ? '...' : ''

  return shortened
}

function getNextHeader (book, blockIndex, decreasing = false) {
  let block, headerIndex
  let wasFound = false
  let conto = null
  while (book.blocks.get(blockIndex).type === 'Header') { blockIndex++}
  if (decreasing) {
    for (let i = blockIndex; i >= 0; i--) {
      block = book.blocks.get(i)
      if (block.conto) { conto = block.conto }
      if (block.type === 'Header') { headerIndex = i; wasFound = true; continue}
      if (block.type !== 'Header' && wasFound) break
    }
  } else {
    for (let i = blockIndex; i < book.length; i++) {
      block = book.blocks.get(i)
      if (block.conto) { conto = block.conto }
      if (block.type === 'Header') { headerIndex = i; wasFound = true; continue }
      if (block.type !== 'Header' && wasFound) {
        headerIndex--
        while (book.blocks.get(headerIndex).type === 'Header') { headerIndex-- }
        headerIndex++
        break
      }
    }
  }
  // console.log('block', book.blocks.get(headerIndex));
  // console.log('headerIndex', headerIndex)
  if (headerIndex != null) return { index: headerIndex, conto }
  if (!headerIndex && decreasing) return { index: 0 }
  if (!headerIndex && !decreasing) return { index: book.blocks.size - 1, conto }
}

// TODO: implement decreasing option
function getNextParagraph (book, blockIndex, decreasing = false) {
  let index = blockIndex
  while (book.blocks.get(index).type === 'Header') { index++ }
  return index
}

function getSearchOrigin (book, blockIndex) {
  let indexes = Object.keys(book.indexes);
  if (book.type === 'romance') {
    for (let i = 0; i < indexes.length; i++) {
      if (i !== 'type') {
        if (Number(indexes[i]) === blockIndex) {
          return book.indexes[indexes[i]].summary;
        } else {
          if (blockIndex > Number(indexes[i]) && blockIndex < Number(indexes[i + 1])) {
            return book.indexes[indexes[i]].summary;
          }
        }
      }
    }
  } else {
    let j;
    for (let i = 0; i < indexes.length; i++) {
      if (i !== 'type') {
        if (Number(indexes[i]) === blockIndex) {
          j = i;
          if (book.indexes[indexes[i]].subtitle) {
            if (book.indexes[indexes[i]].subtitle === 9999) { return book.indexes[indexes[i]].summary; }
          } else {
            while (!book.indexes[indexes[i]].subtitle  && i >= 0) { i--; }
            if (book.indexes[indexes[i]].subtitle === 9999) { return book.indexes[indexes[i]].summary; }
          }
          return book.indexes[indexes[i]].subtitle + '\n' + book.indexes[indexes[j]].summary;
        } else {
          if ((blockIndex > Number(indexes[i]) && blockIndex < Number(indexes[i + 1])) || !indexes[i + 1] ) {
            j = i;
            if (book.indexes[indexes[i]].subtitle) {
              if (book.indexes[indexes[i]].subtitle === 9999) { return book.indexes[indexes[i]].summary; }
            } else {
              while (!book.indexes[indexes[i]].subtitle && i > 0) { i--; }
              if (book.indexes[indexes[i]].subtitle === 9999) { return book.indexes[indexes[i]].summary; }
            }
            return book.indexes[indexes[i]].subtitle + '\n' + book.indexes[indexes[j]].summary;
          }
        }
      }
    }
  }
  return null;
}

exports.readBook = readBook
exports.getShortenedSentence = getShortenedSentence
exports.getNextHeader = getNextHeader
exports.getNextParagraph = getNextParagraph
exports.getSearchOrigin = getSearchOrigin
