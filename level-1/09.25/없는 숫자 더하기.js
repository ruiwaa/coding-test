/* 
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  var answer = 0;

  // numbers 배열 안의 숫자가 없는것 찾기
  // includes 메서드 활용
  // 0부터 시작해서 9까지 반복문 돌면서
  // 포함 안된 숫자를 answer에 더해주기
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
