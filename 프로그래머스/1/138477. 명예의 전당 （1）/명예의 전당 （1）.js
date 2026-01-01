function solution(k, score) {
  const hall = [];
  const result = [];

  for (const s of score) {
    hall.push(s);

    if (hall.length > k) {
      let minIdx = 0;
      for (let i = 1; i < hall.length; i++) {
        if (hall[i] < hall[minIdx]) minIdx = i;
      }
      hall.splice(minIdx, 1);
    }

    let min = hall[0];
    for (let i = 1; i < hall.length; i++) {
      if (hall[i] < min) min = hall[i];
    }
    result.push(min);
  }

  return result;
}
