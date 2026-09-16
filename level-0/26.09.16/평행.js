/* 
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 
두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 
solution 함수를 완성해보세요.
*/

function solution(dots) {
  console.log(dots[0][1], dots[1][1]);

  // 경우의 수 정하기
  // 중복을 제거하기 위해 작은 인덱스를 앞에 둠.
  const pairs = [
    [
      [0, 1],
      [2, 3],
    ],
    [
      [0, 2],
      [1, 3],
    ],
    [
      [0, 3],
      [1, 2],
    ],
  ];

  return pairs.some(([[i1, j1], [i2, j2]]) => {
    return (
      (dots[j1][1] - dots[i1][1]) * (dots[j2][0] - dots[i2][0]) ===
      (dots[j2][1] - dots[i2][1]) * (dots[j1][0] - dots[i1][0])
    );
  })
    ? 1
    : 0;
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);
