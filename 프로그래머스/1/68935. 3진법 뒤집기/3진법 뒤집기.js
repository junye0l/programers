function solution(n) {
    let tj = n.toString(3);
    let result = tj.split("").reverse().join("");
    return parseInt(result,3);
}