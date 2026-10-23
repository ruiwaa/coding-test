// nums 의 길이에서 2를 나눈 값의 포켓몬을 가질 수 있다.
// 종류의 수를 반환해야함

function solution(nums) {
  var answer = 0;
  // 배열의 길이에서 2나누기
  const l = nums.length / 2;

  // 배열 안의 중복된 숫자 제거한 배열 만들기
  const n = new Set(nums).size;

  // 중복 제거된 배열의 길이와 가져갈 마리 수 비교한 후 작은 값을 반환
  l < n ? (answer = l) : (answer = n);

  return answer;
}

solution([3, 3, 3, 2, 2, 4]);
