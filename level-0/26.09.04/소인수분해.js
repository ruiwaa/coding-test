/* 
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
따라서 12의 소인수는 2와 3입니다. 
자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 
solution 함수를 완성해주세요.

*/

function solution(n) {
  var answer = [];

  // 1단계: for문을 사용하여 n의 소인수(= i) 구하기
  // n보다 크거나 같을 때까지 i 증가

  // 2단계: 소인수 분해
  // 소인수 2부터 시작해서 나누어 떨어지지 않을 때"까지" 계산
  // n 의 값이 계속 감소해야됨 => 반복문 필요

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }

  // filter의 기본 매개변수 순서
  // arr.filter((요소, 인덱스, 배열전체) => ...)
  return answer.filter((num, index) => answer.indexOf(num) === index);
}

solution(12);
