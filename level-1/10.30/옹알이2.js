/* 
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 
네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요
*/

function solution(babbling) {
  var answer = 0;
  // 네가지 발음과
  // 네가지 발음을 조합한 발음만 말할 수 있고
  // 연속해서 같은 발음을 말하는 것을 어려워함
  // 모음을 어떻게 조합을 할 수 있을까?
  // 모음을 조합한 후에 filter에서 거르기

  const VOWEL = ["aya", "ye", "woo", "ma"];

  const c = babbling.filter((b) => {
    // 연속해서 같은 발음을 말할 떄 false 반환
    for (const v of VOWEL) {
      if (b.includes(v.repeat(2))) return false;
    }

    // 모음을 돌면서, 각 발음을 b에서 걷어내기
    let word = b;
    for (const v of VOWEL) {
      word = word.replaceAll(v, " ");
    }

    // word 에서 공백이 있는 문자열이 있다면 answer에 더해주기
    if (word.trim() === "") return true;
    return false;
  });

  return c.length;
}

solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
