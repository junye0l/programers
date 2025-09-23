function solution(arr)
{
    // const SET = new Set(arr);
    // let answer = [...SET];
    // return answer; // 완전 중복 제거 코드
    
    if(arr.length === 0) return [];
    
    let answer = [arr[0]]; // 0번째 요소는 무조건 들어가야함.
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}