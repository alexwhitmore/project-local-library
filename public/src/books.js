function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (id === authors[i].id) {
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++) {
    const { id: bookID } = books[i];
    if (bookID === id) {
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let falseArr = books.filter((book) => book.borrows[0].returned == false);
  let trueArr = books.filter((book) => book.borrows[0].returned == true);

  return [falseArr, trueArr];
}

function getBorrowersForBook(book, accounts) {
  let result = [];

  accounts.forEach((account) => {
    book.borrows.forEach((borrowed) => {
      if (account.id === borrowed.id) {
        let borrower = { ...account };
        borrower.returned = borrowed.returned;
        result.push(borrower);
      }
    });
  });
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
