function solution(n, slicer, num_list) {
    const [a, b, c] = slicer;
    
    switch(n) {
        case 1:
            // 0번 인덱스부터 b번 인덱스까지 (b 포함)
            return num_list.slice(0, b + 1);
            
        case 2:
            // a번 인덱스부터 마지막 인덱스까지
            return num_list.slice(a);
            
        case 3:
            // a번 인덱스부터 b번 인덱스까지 (b 포함)
            return num_list.slice(a, b + 1);
            
        case 4:
            // a번 인덱스부터 b번 인덱스까지 c 간격으로
            const result = [];
            for (let i = a; i <= b; i += c) {
                if (i < num_list.length) {
                    result.push(num_list[i]);
                }
            }
            return result;
            
        default:
            return [];
    }
}