/* 
약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 
 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  var answer = 0;
  // n보다 작은 수 나열
  for (let i = 1; i <= n; i++) {
    // 각 수 i마다 약수의 개수(=count)를 세기
    let count = 0;
    for (let x = 1; x <= i; x++) {
      if (i % x === 0) {
        count++;
      }
    }

    // 합성수 찾기
    if (count >= 3) {
      answer++;
    }
  }

  return answer;
}

solution(10);
