function solution(arr1, arr2) {
    const r1 = arr1.length; // 행렬 arr1의 행 값
    const c1 = arr1[0].length; // 행렬 arr2의 열 값
    
    const r2 = arr2.length; // 행렬 arr2의 행 값
    const c2 = arr2[0].length; // 행렬 arr2의 열 값
    
    const result = [];
    
    for(let i = 0; i < r1; i++){
        result.push(new Array(c2).fill(0));
    }
    
    
    for(let i = 0; i < r1; i++){
        for(let j = 0; j < c2; j++){
            for(let k = 0; k < c1; k++){
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result
    
    
}