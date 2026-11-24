/* 
두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 
다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.

문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
skip에 있는 알파벳은 제외하고 건너뜁니다.

두 문자열 s와 skip, 
그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 
return하도록 solution 함수를 완성해주세요.
*/

function solution(s, skip, index) {
  var answer = "";

  // - a부터 z까지 있는 배열에 skip 소거한 배열 만들기
  // skip에 있는 알파벳이 포함되지 않은 배열 만들기
  const skipArr = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((c) => !skip.includes(c));

  /* 
  - s를 한 글자씩 돌면서:
  배열에서 위치 찾기 → index만큼 이동 → 길이로 나눈 나머지로 순환 → 글자 붙이기
  */
  for (const findSIndex of s) {
    const a = (skipArr.indexOf(findSIndex) + index) % skipArr.length;
    answer += skipArr[a];
  }

  return answer;
}

solution("aukks", "wbqd", 5);
