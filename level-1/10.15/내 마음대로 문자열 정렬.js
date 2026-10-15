/* 
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

function solution(strings, n) {
  // a[n].localeCompare(b[n]) — n번째 글자로 비교
  // 결과가 0(같은 글자)이면 || 뒤로 넘어가서 단어 전체를 사전순으로 비교
  return strings.sort((a, b) => a[n].localeCompare(b[n]) || a.localeCompare(b));
}

solution(["abce", "abcd", "cdx"], 2);
