/* 
정수 n이 주어질 때,
n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n) {
  // 짝수 값만 넣을 변수 선언
  let addEven = 0;

  // 나머지가 0 = 짝수이므로, 해당 값들과 연산자를 사용하여 더하기
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      addEven += i;
    }
  }
  var answer = addEven;
  return answer;
}
