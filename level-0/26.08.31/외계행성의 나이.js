/* 
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
입국심사에서 나이를 말해야 하는데, 
PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
 a는 0, b는 1, c는 2, ..., j는 9입니다. 
 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 
 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 
 solution 함수를 완성해주세요.
*/

const AGENUMBER = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
};

// 방법 1: 반복문 사용
// function solution(age) {
//   var answer = [];

//   // 출력 예시 [1, 2]
//   // 1단계: 문자열 변환 후, 숫자 쪼개기
//   const changeToString = String(age).split("");

//   // 2단계: 쪼개진 숫자 배열 반복문 사용하여 숫자 하나씩 꺼내기
//   for (const ageString of changeToString) {
//     // 3단계: 숫자와 알파벳 대조하기
//     for (const findAge in AGENUMBER) {
//       if (AGENUMBER[findAge] === Number(ageString)) {
//         answer.push(findAge);
//       }
//     }
//   }

//   return answer.join("");
// }

// 방법 2: map 메서드 사용
function solution(age) {
  var answer = "";

  // 1단계: 문자열 변환 후, 숫자 쪼개기
  const changeToString = String(age).split("");

  // 2단계: map 매서드 사용해서 배열의 인덱스값 찾기
  answer = changeToString.map((index) => "abcdefghij"[index]);

  // 3단계: 찾은 인덱스 값 합치기
  return answer.join("");
}

solution(460);
