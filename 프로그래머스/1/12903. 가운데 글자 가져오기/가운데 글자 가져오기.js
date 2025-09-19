function solution(s) {
    const CENTER = s.length / 2;
    
    return s.length % 2 === 0 
    ? s.substring(CENTER - 1 , CENTER+ 1) 
    : s.substring(CENTER, CENTER + 1);
}