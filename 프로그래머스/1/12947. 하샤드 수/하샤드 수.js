function solution(x) {
    const digitSum = x.toString()
                      .split('')
                      .map(Number)
                      .reduce((sum, digit) => sum + digit, 0);
    
    return x % digitSum === 0;
}