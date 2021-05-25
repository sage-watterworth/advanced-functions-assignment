function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
    let borrowed = books.filter((book) => book.borrows[0].returned === false)
    let returned = books.filter((book) => book.borrows[0].returned === true)
    return [borrowed, returned];
  }


function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id);
    return { ...borrows, ...account };
  });

  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
