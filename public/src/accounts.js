function findAccountById(accounts, id) {
  return accounts.find((accounts) => id === accounts.id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1);
}

function getTotalNumberOfBorrows(account, books) {
  let borrowedBooks = 0;
  books.forEach(( book )=> {
  book.borrows.forEach((borrow) => {
    if (account.id === borrow.id) { borrowedBooks ++; }
  })
})
return borrowedBooks;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const accoundId = account.id;
  books.forEach((book) => {
    const borrowed = book.borrows;
    const authorId = book.authorId;
    borrowed.forEach((borrow) => {
      if (borrow.id === accoundId && !borrow.returned){
        authors.forEach ((author) => {
          if (author.id === authorId) {
            const allInfo = {
              ...book, author : author }
            result.push(allInfo);
            }
          });
        }
      });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
