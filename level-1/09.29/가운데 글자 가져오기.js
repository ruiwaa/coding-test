/* 
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
  // 가운데값 찾는 변수 선언
  const mid = Math.floor(s.length / 2);

  // 나머지가 없다면? 짝수
  // 삼항 연산자를 사용하여 홀짝에 따른 값 반환
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

solution("abcdcd");
