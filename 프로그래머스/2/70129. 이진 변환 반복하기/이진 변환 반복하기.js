function solution(s) {
    let result = [0,0]; // [ 이진 변환 횟수 , 제거한 0의 갯수 ]
    
    while(s.length > 1) {
        let beforeLength = s.length;
        
        s = s.split("0").join(""); // 0 제거
        
        result[0]++; // 변환 횟수 증가
        result[1] += beforeLength - s.length; // 제거된 0 개수
        
        s = s.length.toString(2); // 이진 변환
    }
    
    return result;
}