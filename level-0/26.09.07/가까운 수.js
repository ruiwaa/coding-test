/* 정수 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 
solution 함수를 완성해주세요. */

function solution(array, n) {
  let answer = 0;

  // n과의 차이가 제일 작은 수를 반환시켜야 되므로
  // n과 항목의 차를  구하여
  // 가장 가까운 양수값의 해당 항목을 반환 ( = 맨왼쪽꺼(첫번째) 반환)

  answer = array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || b - a);

  return answer[0];
}

solution([3, 10, 28], 20);
