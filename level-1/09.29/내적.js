/* 
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
*/

function solution(a, b) {
  var answer = 0;

  // for문으로 a의 배열 길이 만큼 반복해서
  // 각 배열의 항목들 계산하기
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
