function solution(intStrs, k, s, l) {
    // 결과를 저장할 배열
    let result = [];
    
    // intStrs 배열의 각 문자열에 대해 처리
    for (let i = 0; i < intStrs.length; i++) {
        // s번 인덱스부터 길이 l만큼 부분 문자열 추출
        let substring = intStrs[i].substring(s, s + l);
        
        // 부분 문자열을 정수로 변환
        let intValue = parseInt(substring, 10);
        
        // k보다 큰 경우 결과 배열에 추가
        if (intValue > k) {
            result.push(intValue);
        }
    }
    
    return result;
}