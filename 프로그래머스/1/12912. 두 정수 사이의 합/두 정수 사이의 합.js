function solution(a, b) {
    let result = 0;
    const START = Math.min(a,b);
    const END = Math.max(a,b);
    
    for(let i = START; i <= END; i++){
        result += i;
    }
    
    return result;
}