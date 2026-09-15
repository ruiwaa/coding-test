/* 
지뢰는 2차원 배열 board에 1로 표시되어 있고 
board에는 지뢰가 매설 된 지역 1과, 
지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 
안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(board) {
  const bombCount = board.flat().filter((b) => b === 1).length;

  // 중복된 위험구역 제거
  const dangerZone = new Set();

  // ===== 보드 전체를 순회 =====
  board.forEach((row, r) => {
    // row = 현재 행 배열
    // r = 현재 행의 인덱스 (0, 1, 2, 3, 4)

    // ===== 각 행의 모든 칸을 확인 =====
    row.forEach((cell, c) => {
      // cell = 현재 칸의 값 (0 또는 1)
      // c = 현재 칸의 열 인덱스 (0, 1, 2, 3, 4)

      // 지뢰의 위치를 찾은 경우
      // 주변의 위험 지역 찾기
      if (cell === 1) {
        // 위, 현재, 아래쪽 행과 열을 찾기 위해 초기값 -1 할당
        // 지뢰의 위치(r,c) 주변 값들을 위, 현재, 아래로 찾기
        for (let rowDirection = -1; rowDirection <= 1; rowDirection++) {
          for (let colDirection = -1; colDirection <= 1; colDirection++) {
            if (rowDirection !== 0 || colDirection !== 0) {
              const newRow = r + rowDirection;
              const newCol = c + colDirection;

              if (
                newRow >= 0 &&
                newRow < board.length &&
                newCol >= 0 &&
                newCol < board[0].length &&
                // 지뢰만 1이므로, 지뢰가 아닌 주변의 값들은 위험지대에 추가
                board[newRow][newCol] === 0
              ) {
                dangerZone.add(`${newRow},${newCol}`);
              }
            }
          }
        }
      }
    });
  });

  const totalCells = board.length * board[0].length;
  const safeArea = totalCells - bombCount - dangerZone.size;
  console.log(safeArea);

  return safeArea;
}

solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);
