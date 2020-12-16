function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    let borrowed = books[i].borrows;
    for (let j = 0; j < borrowed.length; j++) {
      let returnedBook = borrowed[j].returned;
      if (!returnedBook) {
        count++;
      }
    }
  }
  return count;
}

function mostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  let array = [];
  let count = {};
  genre.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (let key in count) {
    array.push({
      name: key,
      count: count[key],
    });
  }
  array.sort((a, b) => (a.count < b.count ? 1 : -1));
  return array.slice(0, 5);
}

function helper(books) {
  let arr = [];
  for (let i = 0; i < books.length; i++) {
    let novels = {};
    novels.name = books[i].title;
    novels.count = books[i].borrows.length;
    arr.push(novels);
  }
  const final = arr.sort((book1, book2) =>
    book1.count < book2.count ? 1 : -1
  );
  return final.slice(0, 5);
}
function mostPopularBooks(books) {
  let book = helper(books);
  return book;
}

function mostPopularBooks(books) {
  let arr = [];
  for (let i = 0; i < books.length; i++) {
    let novels = {};
    novels.name = books[i].title;
    novels.count = books[i].borrows.length;
    arr.push(novels);
  }
  const final = arr.sort((book1, book2) =>
    book1.count < book2.count ? 1 : -1
  );
  return final.slice(0, 5);
}

function mostPopularAuthors(books, authors) {
  let arr = [];
  for (let i = 0; i < authors.length; i++) {
    let author = {};
    author.name = `${authors[i].name.first} ${authors[i].name.last}`;
    author.count = 0;
    for (let j = 0; j < books.length; j++) {
      if (books[j].authorId === authors[i].id) {
        author.count += books[j].borrows.length;
      }
    }
    arr.push(author);
  }
  const final = arr.sort((auth1, auth2) =>
    auth1.count < auth2.count ? 1 : -1
  );
  return final.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
