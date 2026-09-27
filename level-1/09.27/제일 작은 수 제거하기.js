/* 
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

function solution(arr) {
  var answer = [];

  // 스프레드 연산자를 사용해서
  // 배열 안의 전체 항목 중 최솟값 찾기
  const min = Math.min(...arr);

  // arr 배열 항목이 한 개라면 -1 반환하기
  return answer.length !== 1
    ? answer.push(...arr.filter((a) => a !== min))
    : [-1];
}

solution([10]);
