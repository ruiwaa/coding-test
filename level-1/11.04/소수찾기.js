/* 
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수,
 solution을 만들어 보세요.
*/

function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i++) {
    // 소수 판별 변수 선언
    let isPrime = true;

    // n이하의 i가 소수인지 판단해보기
    // i의 작은 약수 값을 찾기 : j * j 하면 i의 작은 약수를 찾을 수 있음
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
      answer += 1;
    }
  }

  return answer;
}

solution(10);
