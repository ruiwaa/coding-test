/* 
등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
 마지막 원소 다음으로 올 숫자를 return 하도록 
solution 함수를 완성해보세요.
*/

function solution(common) {
  // 마지막 숫자에 등차면 더하기, 등비면 곱하기
  // 등차, 등비 판별 변수 선언
  const last = common[common.length - 1];
  const diff = common[1] - common[0];
  const ratio = common[1] / common[0];

  if (common[2] - common[1] === diff) {
    return last + diff;
  }

  return last * ratio;
}

solution([1, 2, 3, 4]);
