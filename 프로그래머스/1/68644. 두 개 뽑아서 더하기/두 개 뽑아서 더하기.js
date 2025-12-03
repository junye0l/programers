function solution(numbers) {
  const sums = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      sums.add(sum);
    }
  }

  return [...sums].sort((a, b) => a - b);
}
