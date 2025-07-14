function solution(str1, str2) {
    let str3 = '';
    
    for(let i = 0; i < str1.length; i++){
        str3 += (str1[i] + str2[i]);
    }
    
    return str3;
}