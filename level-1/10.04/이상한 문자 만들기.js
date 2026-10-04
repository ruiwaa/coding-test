/* 
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
*/

function solution(s) {
  // 1. 단어 단위로 쪼개기
  const str = s.split(" ");

  // 2. 각 단어를 변환
  const answer = str.map((word) => {
    // 단어를 한 글자씩 쪼개서 [글자, 인덱스]를 활용해 대소문자 변환 후 다시 합침

    return word
      .split("")
      .map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");
  });

  return answer.join(" ");
}

solution("try hello world");
