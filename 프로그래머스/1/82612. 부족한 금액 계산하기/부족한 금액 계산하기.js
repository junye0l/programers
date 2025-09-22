function solution(price, money, count) {
    let payMoney = 0; // 지불 할 금액의 초기값.
    
    for(let i = 1; i <= count; i++){
        payMoney += price * i; // 탑승 횟수에 따른 지불 할 금액의 누적값.
    }
    
    if(payMoney > money){
        return payMoney - money; // 지불 할 금액이 소지 금액보다 크다면 부족한 금액을 반환.
    }else{
        return 0; // 지불 할 금액이 소지 금액보다 작다면 문제 조건에 따라 0을 반환.
    }
}