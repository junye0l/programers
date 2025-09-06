function solution(my_string) {
    let result = new Array(52).fill(0);
    
    for(let char of my_string) {
        if(char >= 'A' && char <= 'Z') {
            // 대문자 A~Z는 인덱스 0~25
            let index = char.charCodeAt(0) - 'A'.charCodeAt(0);
            result[index]++;
        } else if(char >= 'a' && char <= 'z') {
            // 소문자 a~z는 인덱스 26~51
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
            result[index]++;
        }
    }
    
    return result;
}