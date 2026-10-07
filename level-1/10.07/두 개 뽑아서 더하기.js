/* 
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  var answer = [];
  // 두개 숫자의 합이 중복일 경우 대비한 상수 선언
  const sums = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let z = i + 1; z < numbers.length; z++) {
      // 중복된 값 제외한 값들을 객체에 추가
      sums.add(numbers[i] + numbers[z]);
    }
  }
  // 객체를 배열로 변환 후,
  // answer에 할당
  answer = Array.from(sums).sort((a, b) => a - b);

  return answer;
}
solution([2, 1, 3, 4, 1]);
