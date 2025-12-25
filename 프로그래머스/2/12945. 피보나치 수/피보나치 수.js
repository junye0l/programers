function solution(n) {
    const MOD = 1234567;
    
    if ( n === 0 ) return 0;
    if ( n === 1 ) return 1;
    
    let prev2 = 0;
    let prev1 = 1;
    
    for(let i = 2; i <= n; i++){
        const current = ( prev1 + prev2 ) % MOD;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}