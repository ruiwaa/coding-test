/* 
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 
행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
*/

function solution(arr1, arr2) {
  var answer = [[]];

  // 이중 배열이기떄문에
  // 이중 for문으로
  // 배열 분리 할 i 값
  // 배열 안의 항목을 꺼낼 값 : x 값
  for (let i = 0; i < arr1.length; i++) {
    // answer의 첫 배열을 빈배열로 다시 덮어씌우고
    // answer[i]에 더한 값의 배열 추가
    answer[i] = [];

    for (let x = 0; x < arr1[0].length; x++) {
      answer[i].push(arr1[i][x] + arr2[i][x]);
    }
  }

  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ],
);
