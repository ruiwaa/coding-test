/* 
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  var answer = "";
  // 배열 생성
  const arr = s.split("");

  // 배열 반복문 만들기
  // a가 빈값일 경우, a가 소문자 or 대문자일 경우에 따라서
  // 반환값 조건부 처리

  for (const a of arr) {
    if (a === " ") {
      // 빈값을 넣기
      answer += " ";
    } else if (LOWER.indexOf(a) !== -1) {
      // indexOf === -1 이 아닐 경우
      // n 만큼 밀기
      // 순환해야 하므로 나머지 연산자 사용하여 순환시킴

      answer += LOWER[(LOWER.indexOf(a) + n) % 26];
    } else {
      answer += UPPER[(UPPER.indexOf(a) + n) % 26];
    }
  }

  return answer;
}

solution("a B z", 4);
