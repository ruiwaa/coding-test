/*
 * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%,
 * 50만 원 이상 사면 20%를 할인해줍니다.
 * 구매한 옷의 가격 price가 주어질 때,
 * 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 */

// 조건이 여러개이므로, switch 문 사용해서 문제 풀이함
// 가격에 따라 다른 할인율의 case를 만듦

function solution(price) {
  let discount = 0;
  let totalPrice = 0;
  switch (true) {
    case price >= 500000:
      discount = 0.2;
      break;

    case price >= 300000:
      discount = 0.1;
      break;

    case price >= 100000:
      discount = 0.05;
      break;
  }
  totalPrice = Math.floor(price - price * discount);

  return totalPrice;
  var answer = totalPrice;
  return answer;
}

console.log(solution(100000));
