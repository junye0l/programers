function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        let [s, e, k] = queries[i];
        
        // s부터 e까지의 인덱스 중에서
        for(let j = s; j <= e; j++){
            // 인덱스 j가 k의 배수이면
            if(j % k === 0){
                arr[j] += 1;  // arr[j]에 1을 더함
            }
        }
    }
    
    return arr;
}