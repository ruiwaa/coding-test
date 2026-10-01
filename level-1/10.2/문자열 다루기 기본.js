/* 
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

function solution(s) {
  var answer = true;

  // 문자열 4 또는 6이 아니면 false 반환
  // 통과된 문자열에 Number로 타입을 변환시키고
  // isNaN에서 true면 false 반환

  if ((4 !== s.length && s.length !== 6) || isNaN(s)) answer = false;

  return answer;
}

solution("234");
