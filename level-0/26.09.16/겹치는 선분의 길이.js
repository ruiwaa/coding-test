/* 
선분 3개가 평행하게 놓여 있습니다. 
세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는
 2차원 배열 lines가 매개변수로 주어질 때, 
 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 
 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.
*/

function solution(lines) {
  var answer = 0;

  // 이중 배열을 flat로 평평하게 만든 뒤, 숫자 재정렬
  const line = lines.flat().sort((a, b) => a - b);

  for (let i = 0; i < line.length - 1; i++) {
    const a = line[i];
    const b = line[i + 1];
    // [i] 0,1,2,3,5
    // [i + 1] => 1,2,3,5,9
    console.log(`${[a, b]}`);

    let count = 0;

    for (let j = 0; j < lines.length; j++) {
      const start = lines[j][0];
      const end = lines[j][1];

      // a, b : 겹치는 구간
      // 겹치는 구간을 찾으려면
      // start이랑 같거나 크고, end보다 같거나 작아야 함
      if (start <= a && end >= b) {
        count++;
      }
    }

    // 겹치는 구간 (최소 2센치 이상) 일 경우 answer 에 값 할당
    if (count >= 2) {
      answer += b - a;
    }
  }

  return answer;
}

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);
