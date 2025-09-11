function solution(arr) {
    const avr = arr.reduce((acc,num) => acc + num, 0);
    return avr / arr.length;
}