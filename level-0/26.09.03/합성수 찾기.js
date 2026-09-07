/* 
약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 
 return하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
  var answer = 0;

  // 합성수 찾기 ( = i)
  // n보다 작거나 같으면 1씩 증가

  for (let i = 1; i <= n; i++) {
    // 합성수의 약수 찾기 ( = x)
    // 각 수 i마다 약수의 개수(=count)를 세기
    let count = 0;
    for (let x = 1; x <= i; x++) {
      if (i % x === 0) {
        count++;
      }
    }

    if (count >= 3) {
      answer++;
    }
  }

  return answer;
}

solution(10);

{
  function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
      let count = 0;
      let x = 1;

      while (x <= i) {
        if (i % x === 0) {
          count++;
        }

        x++;
      }

      if (count >= 3) {
        answer++;
      }
    }
    console.log(answer);

    return answer;
  }

  solution(10);
}
