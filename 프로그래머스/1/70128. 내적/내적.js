function solution(a, b) {
  let result = 0;

  // 수학적인 접근에서 내적이라면 길이가 같다.
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}