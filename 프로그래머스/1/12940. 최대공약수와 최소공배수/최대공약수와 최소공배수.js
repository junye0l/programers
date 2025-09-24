function solution(n, m) {
    // 최소공배수 = 두 자연수의 곱 / 최대공약수
    const smaller = Math.min(n, m);
    let gcd = 1;
    
    for(let i = 1; i <= smaller; i++){
        if(n % i === 0 && m % i === 0){
            gcd = i;
        }
    }
    
    const lcm = n * m / gcd;
    return [gcd, lcm];
}