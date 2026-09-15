/* 
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 
3x 마을 사람들의 숫자는 다음과 같습니다.
*/

function solution(n) {
  var answer = 0;
  let count = 1;
  // count 1부터 시작되니깐
  // n 만큼 반복 실행하여
  // 조건문의 조건에 충족되는 3x 마지막 숫자값을 찾기
  for (let i = 1; count <= n; i++) {
    if (i % 3 !== 0 && !i.toString().includes("3")) {
      count++;
      answer = i;
    }
  }

  return answer;
}
solution(10);
