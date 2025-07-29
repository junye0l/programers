function solution(n, control) {
    const moves = { 'w': 1, 's': -1, 'd': 10, 'a': -10 };
    
    for (const char of control) {
        n += moves[char];
    }
    return n;
}