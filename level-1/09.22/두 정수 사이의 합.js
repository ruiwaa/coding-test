/* 
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  var answer = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // 모든 정수의 합
  // 항의 개수
  const count = max - min + 1;
  // 합 = (첫항 + 끝항) × 항의 개수 / 2
  answer = ((min + max) * count) / 2;
  return answer;
}

solution(6, 3);
