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

  if (block.t && block.c) {
    type = block.t
    for (let e of block.c) {
      if (e.c || e.t || Array.isArray(e)) sentence += addText(e)
    }
    if (sentence !== '') return { type, sentences: sentence }
  }
  return null
}

// Read all the bookBlocks and incorporate the blocks to the book instance
function readBook(book) {
  const texto = require(book.filePath)
  for (let b of texto.blocks) {
    book.addBlock(readBlock(b))
  }
}

// Get a shortened sentence from a block, maximum of 60 characters + word.length
function getShortenedSentence(word, sentence, reg, multiple = false) {
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
  shortened = startSlice !== 0 ? '... ' : ''
  shortened += sentence.slice(startSlice, endSlice + 1)
  shortened += endSlice !== sentence.length ? ' ...' : ''

  return shortened
}

exports.readBook = readBook
exports.getShortenedSentence = getShortenedSentence
