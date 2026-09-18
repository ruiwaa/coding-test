/* 
머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 
최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 
문자열 배열 babbling이 매개변수로 주어질 때, 
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 
solution 함수를 완성해주세요.
*/

function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  // 발음이 가능한 문자인지 검증
  const isValidWord = (str) => {
    // 남는 문자가 없다면? 참
    if (str === "") return true;
    for (let w of word) {
      if (str.startsWith(w)) {
        // 찾는 문자 제외한 나머지 w.length 만큼 잘라 남기기
        const remain = str.slice(w.length);
        // 남은 문자열을 다시 검증
        return isValidWord(remain);
      }
    }

    // 문자열에서 남는 문자가 있다면? 거짓
    return false;
  };

  const canSpeak = babbling.filter((b) => {
    isValidWord(b);
  });

  return canSpeak.length;
}

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);

/*
==============================================
1. for...of vs forEach의 차이 (return 동작)
==============================================

// ❌ forEach - 콜백 함수
word.forEach((w) => {
  if (w === "ye") {
    return true;  // ← 콜백 함수만 종료, forEach는 계속 반복
  }
});
// forEach는 배열의 모든 항목을 끝까지 반복 실행

// ✓ for...of - 루프 문
for (let w of word) {
  if (w === "ye") {
    return true;  // ← 함수 전체 즉시 종료, 루프 멈춤
  }
}
// 조건 만족하면 루프를 빠져나감


==============================================
2. 콜백함수 특성
==============================================

// 콜백함수: "다른 함수의 인자로 넘겨지는 함수"

// forEach의 콜백
array.forEach((item) => {  // ← 이 화살표 함수가 콜백
  // 각 반복마다 새로운 콜백 함수 실행
  // return해도 "이 콜백만" 종료
  // 다음 항목의 콜백이 새로 실행됨
});

// for...of는 콜백이 아님
for (let item of array) {  // ← 일반 루프, 콜백 아님
  // return하면 함수 전체 종료
}

// 콜백의 특성:
// - 부작용 수행에 좋음 (출력, 수정, 요청 등)
// - 조기 종료가 필요한 조건문에는 부적합


==============================================
3. 이 문제에서 for...of가 필요한 이유
==============================================

// 이 문제는 "조건 판별 후 재귀"가 필요함
// → 조건 만족하면 바로 true 반환해야 함
// → 남은 반복은 불필요

// forEach 쓰면:
word.forEach((w) => {
  if (str.startsWith(w)) {
    if (isValidWord(remaining)) {
      return true;  // ← 콜백만 끝남
    }
  }
});
return false;  // ← 항상 여기 도달해버림 (항상 false 반환!)

// for...of 쓰면:
for (let w of word) {
  if (str.startsWith(w)) {
    if (isValidWord(remaining)) {
      return true;  // ← 함수 전체 종료! (true 반환 성공)
    }
  }
}
return false;  // ← true를 못 찾았을 때만 도달

// 결론: 
// - 참/거짓 판별 → for...of ✓
// - 부작용 반복 → forEach ✓
*/
