function isPrimeNumber(num) {
  // 예외조건에 있긴하지만 1은 소수이기에 따로 조건을 부여했습니다.
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));
