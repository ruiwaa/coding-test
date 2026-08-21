/* 정수 n이 매개변수로 주어질 때, 
n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 
solution 함수를 완성해주세요.
*/

function solution(n) {
  var answer = [];

  // for 반복문
  // odd 에 2로 나누었을때 나머지값이 있을 경우 = 홀수
  // 조건 충족 시 해당 숫자를 answer 배열에 넣기

  for (let odd = 0; odd <= n; odd++) {
    if (odd % 2 !== 0) {
      answer.push(odd);
    }
  }
  return answer;
}

console.log(solution(15));
