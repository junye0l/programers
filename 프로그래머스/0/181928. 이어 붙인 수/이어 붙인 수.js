function solution(num_list) {
    let resultA = '';
    let resultB = '';
    for(let i = 0; i < num_list.length; i++){
       if(num_list[i] % 2 !== 0){
           resultA += num_list[i];
       }else{
           resultB += num_list[i];
       }
   }
    
    return Number(resultA) + Number(resultB);
}