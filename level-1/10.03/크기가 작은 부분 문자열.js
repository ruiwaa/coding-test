/* 
숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 
이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, 
t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 
이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.
*/

function solution(t, p) {
  var answer = 0;

  // 반복되는 횟수는 t의 길이에서 p의 길이 뺀 값
  for (let i = 0; i <= t.length - p.length; i++) {
    // p 만큼의 길이만큼 문자열을 잘라야 함으로
    const arr = t.slice(i, p.length + i);
    // arr의 문자열과 p와 비교해서
    // 참일 경우만
    // answer 1 더하기
    if (arr <= p) answer += 1;
  }

  return answer;
}

solution("500220839878", "7");
