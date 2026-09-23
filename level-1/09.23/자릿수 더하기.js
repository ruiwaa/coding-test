/* 
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

function solution(n) {
  var answer = 0;

  // split 메서드 : 문자열만 쪼갤 수 있음
  // 문자열 변환 후
  // 다시 배열 만들어서 숫자 변환 후 answer에 더해주기

  String(n)
    .split("")
    .map((a) => {
      answer += Number(a);
    });
  return answer;
}

solution(987);
