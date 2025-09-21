function div(num){
    let ct = 0;
    
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            ct++;
        }
    }
    
    return ct++;
}

function solution(left, right) {
    let result = 0;
    
    for(let i = left; i <= right; i++){
        let temp = div(i);
        temp % 2 === 0 ? result += i : result -= i;
    }
    
    return result;
}