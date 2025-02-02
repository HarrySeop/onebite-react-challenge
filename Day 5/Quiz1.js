function printMovieReview({ title, releaseYear, reviewers }) {
  // const [firstReviewer = "리뷰어 미정"] = reviewers;
  const firstReviewer = reviewers[0] || '리뷰어 미정';

  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  console.log(`첫 번째 리뷰어 : ${firstReviewer} \n`);
}

printMovieReview({
  title: '하얼빈',
  releaseYear: 2024,
  reviewers: ['박정민', '김효빈', '이정환'],
});

printMovieReview({
  title: '위키드',
  releaseYear: 2024,
  reviewers: [],
});
