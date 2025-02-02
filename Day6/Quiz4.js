function getSortedBooks(books) {
  return books.toSorted((book1, book2) => book2.published.getTime() - book1.published.getTime());
}

const sortedBooks = getSortedBooks([
  {
    title: '한입 리액트',
    published: new Date('2023. 04. 06'),
  },
  {
    title: '웹 프론트엔드 첫 걸음',
    published: new Date('2024. 04. 30'),
  },
  {
    title: '이펙티브 타입스크립트',
    published: new Date('2021. 06. 27'),
  },
  {
    title: '클린코드',
    published: new Date('2013. 12. 24'),
  },
]);

console.log(sortedBooks);
