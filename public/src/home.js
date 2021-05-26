function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    return acc + book.borrows.filter(notReturned => notReturned.returned === false).length;
  }, 0);
}


  function getMostCommonGenres(books) {
    let obj = {}
    books.forEach((book)=>{
     if(obj[book.genre]){
       obj[book.genre]++;
     } else {
       obj[book.genre] = 1
     }
    });
    let genreCount = [];
    for (let [key, value] of Object.entries(obj)) {
      genreCount.push({
        'name' : key,
        'count' : value
      });
    }
    genreCount.sort((a,b) => b.count - a.count);
    return genreCount.slice(0, 5);
  }



function getMostPopularBooks(books) {
    return books.map((book) => {
     return {name: book.title, count: book.borrows.length}
    }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
  }


function getMostPopularAuthors(books, authors) {
  function getAuthorById(authors, authorId) { return authors.find((author) => author.id === authorId); }
    const bookAuthors = [];
    books.forEach((book) => {
      const match = bookAuthors.find((author) => author.id === book.authorId);
        if (match) { match.count += book.borrows.length; }
        else {
          const writer = getAuthorById(authors, book.authorId);
          const count = book.borrows.length;
            bookAuthors.push({ name: `${writer.name.first} ${writer.name.last}`, count, }); } });
              let result = bookAuthors.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1 );
    result = result.slice(0, 5);
    return result;
  }













module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
