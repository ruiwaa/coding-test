/* 
머쓱이는 RPG게임을 하고 있습니다. 
게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 
위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 
캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], 
right를 누른다면 [1, 0]입니다. 
머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 
캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 
solution 함수를 완성해주세요.
*/
const DIRECTION = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};
function solution(keyinput, board) {
  var answer = [];
  var moveTow = 0;
  var moveTol = 0;
  const x = keyinput.map((key) => DIRECTION[key]);
  const maxX = Math.floor((board[0] - 1) / 2);
  const maxY = Math.floor((board[1] - 1) / 2);

  x.map((move) => {
    moveTow += move[0];
    moveTol += move[1];

    // board 범위를 초과할 경우를 대비하여
    // 범위 초과 시 경계값 반환
    moveTow = Math.max(-maxX, Math.min(maxX, moveTow));
    moveTol = Math.max(-maxY, Math.min(maxY, moveTol));
  });
  answer.push(moveTow, moveTol);

  console.log(answer);

  return answer;
}

solution(["right", "right", "right", "right", "right"], [11, 11]);
