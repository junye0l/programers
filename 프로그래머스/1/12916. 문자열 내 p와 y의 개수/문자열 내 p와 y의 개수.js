function solution(s){
    let cp = 0, cy = 0;
    
    for(let char of s){
        if(char === "p" || char === "P"){
            cp++;
        }else if (char === "y" || char === "Y"){
            cy++;
        }
    }
    
    return cp === cy;
}