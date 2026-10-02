/* 
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 
그다음 최소공배수를 넣어 반환하면 됩니다.
 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

function solution(n, m) {
  var answer = [];

  // 최대 공약수 구하기
  const box = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) box.push(i);
  }
  const gcd = Math.max(...box);

  // 최소 공배수 구하기
  // n * m 한 값에서 최대공약수로 나눠주기
  const lcm = (n * m) / gcd;

  answer.push(gcd, lcm);

  return answer;
}

solution(2, 5);
