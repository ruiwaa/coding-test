/* 
네오와 프로도가 숫자놀이를 하고 있습니다. 
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
*/

const NUMBER = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

function solution(s) {
  // 키,값 쌍의 배열 생성
  const num = Object.entries(NUMBER);

  // 배열 구조 분해 할당
  // replaceAll 메서드 활용해서, s안의 단어를 숫자로 바꾸기
  for (const [digit, word] of num) {
    s = s.replaceAll(word, digit);
  }

  return Number(s);
}

solution("one4seveneight");
