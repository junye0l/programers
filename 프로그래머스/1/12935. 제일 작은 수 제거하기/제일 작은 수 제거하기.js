function solution(arr) {
    if(arr.length <= 1){
        return [-1];
    } // arr의 길이가 1 이하일 경우 -1만 넣은 배열을 반환
    
    const MIN = Math.min(...arr); // 전개 구문을 이용해 arr 배열의 최소 값 찾기
     
    arr = arr.filter((element) => element !== MIN); // filter를 이용하여 최솟값에 맞지않는 값들만 반환
     
    return arr; // 결과를 반환 
}