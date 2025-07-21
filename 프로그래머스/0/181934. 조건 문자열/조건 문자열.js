function solution(ineq, eq, n, m) {
    if(eq === '!'){
        return ineq === '>' ? (n > m ? 1 : 0) : (n < m ? 1 : 0);
    } else {
        return ineq === '>' ? (n >= m ? 1 : 0) : (n <= m ? 1 : 0);
    }
}