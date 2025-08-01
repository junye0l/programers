
function solution(arr, queries) {
    let result = [];
    
    for(let i = 0; i < queries.length; i++){
        let [s, e, k] = queries[i];  // 쿼리 구조분해할당
        let minValue = -1;  // 기본값 -1
        
        // s부터 e까지의 범위에서 탐색
        for(let j = s; j <= e; j++){
            // k보다 큰 값인지 확인
            if(arr[j] > k){
                // 첫 번째로 찾은 값이거나, 더 작은 값이면 갱신
                if(minValue === -1 || arr[j] < minValue){
                    minValue = arr[j];
                }
            }
        }
        
        result[i] = minValue;
    }
    
    return result;
}