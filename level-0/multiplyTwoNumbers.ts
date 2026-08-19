// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
// 0 ≤ num1 ≤ 100
// 0 ≤ num2 ≤ 100

function solution(num1: number, num2: number) {
  // 두 인자의 제한 사항 조건문 만들기
  if (num1 < 0 || num2 < 0) {
    throw new Error();
  }

  if (num1 > 100 || num2 > 100) {
    throw new Error();
  }

  // num1 과 num2를 곱한 값을 반환해야하므로, answer 변수에 두 인자를 곱한 값을 계산한다.
  const answer = num1 * num2;
  return answer;
}

console.log(solution(1, 100));
