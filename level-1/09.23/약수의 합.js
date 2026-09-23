/* 

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, 
solution을 완성해주세요.
*/

function solution(n) {
  var answer = 0;

  // n을 나눴을 때 나머지가 없는 숫자들(i) 찾기
  // 찾은 후 answer에 더하기
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

solution(12);
