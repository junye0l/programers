function solution(absolutes, signs) {
    let sum = 0;
    absolutes.forEach((num, i) => {
        sum += signs[i] ? num : -num;
    });
    return sum;
}