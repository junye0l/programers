function solution(number) {
    let sum = 0;
    
    for(let digit of number) {
        sum += +digit; 
    }
    
    return sum % 9;
}