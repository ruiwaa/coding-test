/* 
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.
문자열 s가 매개변수로 주어질 때, 
위 과정과 같이 문자열들로 분해하고, 
분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.


먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, 
x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 
처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 
남은 부분이 없다면 종료합니다.
만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면,
 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
*/

// 처음부터 시작하는 알파벳 숫자 저장
// 처음 시작하는 알파벳과 다른 알파벳인 경우 모두 저장
// 첫글자와 비교 대상이 없는 경우 answer += 1

function solution(s) {
  var answer = 0; // 총 개수 담기
  let firstNum = 0; // 첫 글자 수
  let otherNum = 0; // 첫 글자와 다른 글자 수
  let firstString = "";

  // 첫 글자와 다른 글자 숫자가 같아지는 순간일 때 answer에 담기
  for (const letter of s) {
    // 첫 번째 글자가 빈 값일 경우 해당 시점 letter 넣어주기
    if (firstString === "") firstString = letter;

    // 첫 번째 글자와 다른 글자 수 세기
    firstString === letter ? (firstNum += 1) : (otherNum += 1);

    // 첫 글자와 다른 글자 수 일치 시 answer +1
    // 첫 글자 초기화시켜주기
    if (firstNum === otherNum) {
      answer += 1;
      firstString = "";
    }
  }

  if (firstString !== "") answer += 1;

  return answer;
}

solution("abracadabra");
