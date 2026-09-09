/* 
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/

function solution(s) {
  var answer = "";

  for (const arr of s) {
    const firstIndex = s.indexOf(arr);

    // ⭐️　indexOf(찾아야 하는 요소, 검색을 시작할 인덱스)
    // 중복된 문자 존재 여부 확인 변수
    // 조건: 첫번째 인덱스가 아닌 경우, 해당 인덱스가 존재하는 경우 (-1 이 아님) 또는 찾고자 하는 인덱스 위치부터 존재 여부 확인
    const hasMultiple =
      firstIndex !== -1 && s.indexOf(arr, firstIndex + 1) !== -1;

    if (hasMultiple === false) {
      answer += arr;
    }
  }
  return answer.split("").sort().join("");
}

solution("hello");
