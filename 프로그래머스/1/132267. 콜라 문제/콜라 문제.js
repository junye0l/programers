function solution(a, b, n) {
  let total = 0;

  while (n >= a) {
    const exchanged = Math.floor(n / a) * b;
    total += exchanged;

    const remain = n % a;
    n = exchanged + remain;
  }

  return total;
}
