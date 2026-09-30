/* 
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
*/

function solution(s) {
  var answer = "";

  // 배열 쪼개기
  // 쪼갠 문자열을 오름차순으로 정렬
  // reverse 메서드 사용하여 내림차순으로 정렬
  answer = s.split("").sort().reverse();

  return answer.join("");
}

solution("Zbcdefg");
