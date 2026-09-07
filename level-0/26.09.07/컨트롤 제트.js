/* 
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 
문자열에 있는 숫자를 차례대로 더하려고 합니다. 
이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 
숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
*/

// z : 이전까지 더했던 값에서 z 전의 항목을 뺀다.
// z 이전의 항목을 저장하는 변수 = lastNum, 방금 더한 숫자"를 기억하는 상자,
// 매번 새로운 숫자가 올 때마다 그 숫자로 업데이트

// forEach 반복문 안에서배열의 각 항목을 순서대로 하나씩 보면서:
// - "Z"면? → 바로 전 숫자(lastNum)를 빼기
// - "Z"가 아니면? → 그 숫자를 더하고, lastNum에 저장해두기

function solution(s) {
  var answer = 0;
  let lastNum = 0;

  s.split(" ").forEach((element) => {
    if (element === "Z") {
      answer -= lastNum;
    } else {
      lastNum = Number(element);
      answer += Number(element);
    }
  });
  return answer;
}

solution("1 2 Z 3 Z");
