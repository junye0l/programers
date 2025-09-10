function solution(n) {
  let result = 0;
  let strn = n.toString().split("");

  for (let num of strn) {
    result += Number(num);
  }

  return result;
}