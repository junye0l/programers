function solution(x, n) {
    let answer = [];
    let cur = x;
    for(let i = 0; i < n; i++){
        answer.push(cur);
        cur += x;
    }
    return answer;
}