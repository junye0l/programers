function solution(s) {
  const last = new Map();
  const ans = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!last.has(c)) ans[i] = -1;
    else ans[i] = i - last.get(c);

    last.set(c, i);
  }

  return ans;
}
