/* 
JadenCase란 모든 단어의 첫 문자가 대문자이고,
 그 외의 알파벳은 소문자인 문자열입니다. 
 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, 
solution을 완성해주세요.
*/

function solution(s) {
  var answer = "";

  const upperCase = s.split(" ");

  // 첫글자만 대문자 + 첫 글자제외한 나머지 글자까지 잘라서 합쳐주기 (slice(1) : 첫번째를 제외한 문자열 잘라줌)
  answer = upperCase
    .map((u) => {
      // 공백 문자일 경우 공백문자 그대로 반환하도록
      if (u === "") return u;
      return u[0].toUpperCase() + u.slice(1).toLowerCase();
    })
    .join(" ");

  console.log(answer);

  return answer;
}

solution("3people unFollowed me");
