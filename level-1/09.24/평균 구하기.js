/* 
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

function solution(arr) {
  var answer = 0;
  for (const a of arr) {
    answer += a;
  }

  return answer / arr.length;
}

solution([1, 2, 3, 4]);
