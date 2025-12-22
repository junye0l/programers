function solution(n) {
  let count = 0;

  for (let k = 1; (k * (k + 1)) / 2 <= n; k++) {
    // a = (2n/k - (k-1)) / 2 가 정수인지 확인
    if ((2 * n) % k !== 0) continue;

    const t = (2 * n) / k - (k - 1);
    if (t <= 0) continue;          // a >= 1 조건 (t는 2a)

    if (t % 2 === 0) count++;      // a가 정수
  }

  return count;
}
