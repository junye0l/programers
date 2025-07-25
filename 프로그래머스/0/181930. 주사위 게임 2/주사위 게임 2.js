function solution(a, b, c) {
    const doubleA = a*a;
    const doubleB = b*b;
    const doubleC = c*c;
    const tripleA = a*a*a;
    const tripleB = b*b*b;
    const tripleC = c*c*c;
   
    if(a === b && a === c && b === c){
        // 세 개 모두 같은 경우
        return (a+b+c) * (doubleA + doubleB + doubleC) * (tripleA + tripleB + tripleC);
    } else if(a === b || a === c || b === c){
        // 정확히 두 개가 같은 경우
        return (a + b + c) * (doubleA + doubleB + doubleC);
    } else {
        // 모두 다른 경우
        return a + b + c;
    }
}