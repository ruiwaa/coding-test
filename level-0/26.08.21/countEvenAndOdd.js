/* 
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(num_list) {
  let evenCount = 0;
  let oddCount = 0;

  for (const num of num_list) {
    // 짝수 판단 여부 계산
    // 개수를 어떡해??
    if (num % 2 === 0) {
      // 배열에서 짝수의 개수만 가져오기
      evenCount++;
    } else {
      // 짝수가 아닌 것 (홀수) 가져오기
      oddCount++;
    }
  }

  var answer = [evenCount, oddCount];
  return answer;
}
