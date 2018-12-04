var Book = function ({ title = '', key = null, src = '', type = '', blocks = new Map(), length = 0 } = {}) {
  this.title = title
  this.key = key
  this.src = src
  this.type = type
  this.blocks = blocks
  this.length = length
}

// Set the title of the book
Book.prototype.setTitle = function (title) {
  if (!title) throw new Error('No title present')
  this.title = title
}

// Set the key index for the Map class
Book.prototype.setIndex = function (index) {
  if (!title) throw new Error('No index present')
  this.title = title
}

// Add blocks to the book
Book.prototype.addBlock = function (block) {
  if (!block) throw new Error('No blocks present')
  if (typeof block !== 'object') throw new TypeError('Blocks should be a Map type')
  this.blocks.set(this.length, block)
  this.length++
}

export default Book
