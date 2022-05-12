function Book(title, author, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read

  this.info = function () {
    let x
    if (this.read) {
      x = "read"
    }else{
      x = "not read"
    }
    
    return this.title + " by " + this.author+ " ," + this.pages + " pages" + " ," + x
  }


}

/*
book1 = new Book ("The Wuthering Heights", "Emily Bronte", 400, true)

book2 = new Book ("the treasure island", "robert louis stevenson", 300, false)

console.log(book1.info())
console.log(book2.info())
*/