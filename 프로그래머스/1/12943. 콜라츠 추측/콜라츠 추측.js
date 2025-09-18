function solution(num) {
    if(num === 1) return 0;
    
    let count = 0;
    while(count < 500 && num > 1){
        if(num % 2 === 0){
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        count++;
    }
    
    return num === 1 ? count : -1;
}