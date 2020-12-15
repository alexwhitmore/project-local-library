function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
}

const sortAccountsByLastName = (accounts) =>
  accounts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));

function numberOfBorrows(account, books) {
  let borrowCounter = 0;
  const account = accounts;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === account.id) {
      borrowCounter++;
    }
  }
  return borrowCounter;
}

function booksInPossession(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
