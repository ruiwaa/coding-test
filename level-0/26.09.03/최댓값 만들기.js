/* 
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  // 최댓값 배열 안의 항목 중 가장 큰 수와, 두번째로 큰 수를 곱해주기
  var answer = 0;
  const descendingArr = numbers.sort((a, b) => a - b);
  answer = descendingArr.at(-1) * descendingArr.at(-2);

  return answer;
}

solution([0, 31, 24, 10, 1, 9]);
