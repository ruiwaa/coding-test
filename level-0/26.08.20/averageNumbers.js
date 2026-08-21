/* 정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요. */

// 먼저 배열의 값을 더해야 하므로, 배열 반복문인 const of를 사용하여
// 배열의 누적값을 구한 뒤, 반환값에서 배열의 개수만큼 나눠준다.
function solution(numbers) {
  var answer = 0;

  for (const num of numbers) {
    answer += num;
  }

  return answer / numbers.length;
}
