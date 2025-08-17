function solution(my_string, queries) {
    let arr = my_string.split('');
    
    for (let [s, e] of queries) {
        let left = s;
        let right = e;
        
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;   
            right--;  
        }
    }
    
    return arr.join('');
}