function solution(num_list) {
    const resultA = num_list.reduce((acc, cur, idx) => { return acc *= cur;}, 1);
    const resultB = Math.pow(num_list.reduce((acc, cur, idx) => { return acc += cur; }, 0), 2);
    
    return resultA > resultB ? 0 : 1;
}