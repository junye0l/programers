function solution(my_strings, parts) {
    let result = "";
    
    for (let i = 0; i < my_strings.length; i++) {
        let left = parts[i][0];
        const right = parts[i][1];
        
        while (left <= right) {
            result += my_strings[i][left];
            left++;
        }
    }
    
    return result;
}