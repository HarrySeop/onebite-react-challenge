function printAvgScore(students) {
  for (const name in students) {
    const scores = students[name].scores;
    const average = scores.reduce((sum, score) => (sum += score), 0) / scores.length;
    console.log(`${name}: ${average}`);
  }
}

printAvgScore({
  이정환: { hobby: '테니스', scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: '테니스', scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: '의적', scores: [100, 100, 20, 20, 50] },
});
