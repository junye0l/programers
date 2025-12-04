function solution(food) {
    let result = [];
    
    for(let i = 1; i < food.length; i++){
        let count = Math.floor(food[i] / 2);
        for(let j = 0; j < count; j++){
            result.push(i);
        }
    }
    
    return result.join('') + '0' + result.reverse().join('');
}