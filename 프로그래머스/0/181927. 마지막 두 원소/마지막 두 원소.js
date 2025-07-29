function solution(num_list) {
    let A = num_list[num_list.length-1];
    let B = num_list[num_list.length-2];

    if( A > B ){
        num_list.push(A-B);
        return num_list;
    }else{
        num_list.push(A*2);
        return num_list;
    }
}