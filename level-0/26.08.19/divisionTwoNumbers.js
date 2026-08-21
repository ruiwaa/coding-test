// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.
// 0 ≤ num1 ≤ 100
// 0 ≤ num2 ≤ 100

function solution(num1, num2) {
  if (0 > num1 || 0 > num2) {
    throw new Error();
  }

  if (num1 > 100 || num2 > 100) {
    throw new Error();
  }
  const answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

console.log(solution(1, 16));
