function solution(l, r) {
    let arr = [];
    for(let i = l; i <= r; i++){
        // 배열의 모든 값이 주어진 조건에 대해 True일 경우에만 True를 반환하는 부분
        if(i.toString().split("").every(n => n === '0' || n === '5')){
            arr.push(i);
        }
    }
    // 배열 arr의 요소가 있을때만 배열을 반환 그렇지 않을 경우 -1을 담은 배열을 반환
    return arr.length ? arr : [-1];
}