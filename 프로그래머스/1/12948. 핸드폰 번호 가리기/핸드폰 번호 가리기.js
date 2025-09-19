function solution(phone_number) { // substring와 replace를 이용해 일부분만 추출해 치환
    return phone_number.substring(0, phone_number.length-4).replace(/./g, "*") + 
           phone_number.substring(phone_number.length-4);
}

// function solution(phone_number) { repeat를 이용해 *로 치환
//     return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
// }