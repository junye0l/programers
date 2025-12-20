function solution(s) {
  let result = "";
  let isStart = true;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === " ") {
      result += " ";
      isStart = true;
      continue;
    }
    if (isStart && ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))) {
      result += ch.toUpperCase();
    } else {
      result += ch.toLowerCase();
    }

    isStart = false;
  }

  return result;
}
