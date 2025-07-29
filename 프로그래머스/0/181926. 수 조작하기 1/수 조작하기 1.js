function solution(n, control) {
    const charControl = control.split("");
    
    for(let i = 0; i < control.length; i++){
        if(charControl[i] === 'w'){
            n += 1;
        }else if(charControl[i] === 's'){
            n -= 1;
        }else if(charControl[i] === 'd'){
            n += 10;
        }else if(charControl[i] === 'a'){
            n -= 10;
        }
    }
    return n;
}