/* 
정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
정수가 담긴 배열 numlist와 정수 n이 주어질 때 
numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 
solution 함수를 완성해주세요.
*/

function solution(numlist, n) {
  var answer = [];
  const arr = numlist.sort((a, b) => {
    // n과의 차이가 가장 적게 나는 순으로 정렬
    const compareNum = Math.abs(a - n) - Math.abs(b - n);

    // 절댓값의 같이 같은 경우, 더 큰 수가 앞에 오도록 조건문 추가
    if (Math.abs(a - n) === Math.abs(b - n)) {
      // a, b 중 큰 수가 먼저 오도록 다시 정렬
      return b - a;
    }
    return compareNum;
  });
  answer.push(...arr);

  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
