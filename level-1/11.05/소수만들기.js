/* 
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 
return 하도록 solution 함수를 완성해주세요.
*/

function solution(nums) {
  var answer = 0;

  // 반복문으로 3개를 골라서 -> 3중 반복문
  // 소수가 되는지 판별 => 별도의 함수로 분리
  const isPrime = (x) => {
    for (let d = 2; d * d <= x; d++) {
      if (x % d === 0) return false;
    }
    return true;
  };
  // 소수 판별 함수로 소수로 판단되면 answer에 1 누적 연산
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1;
      }
    }
  }
  return answer;
}

solution([1, 2, 7, 6, 4]);
