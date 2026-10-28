/*
길이가 n미터인 벽을 1미터씩 나누어, 왼쪽부터 1번부터 n번까지 구역 번호를 붙였습니다.
이 중 페인트를 다시 칠해야 하는 구역들의 번호가 배열 section에 주어집니다.

길이가 m미터인 롤러로 벽을 칠하며, 한 번 칠할 때마다 연속된 m개의 구역을 칠합니다.
이때 롤러는 벽 밖으로 벗어나거나 구역의 일부만 걸치도록 칠할 수 없습니다.

같은 구역을 여러 번 칠하거나, 다시 칠할 필요가 없는 구역을 칠해도 됩니다.
단, section에 있는 구역은 반드시 한 번 이상 칠해야 합니다.

정수 n, m과 배열 section이 매개변수로 주어질 때,
롤러로 페인트칠해야 하는 최소 횟수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n, m, section) {
  var answer = 0;
  // section 에서
  // 이미 칠해지지 않은 구역들만
  // answer에 더해주기

  let painted = 0;
  for (const s of section) {
    // 이미 칠해진 곳의 구역일 경우는 포함 안해도 되므로
    // 칠해지지 않은 구역을
    // s + m - 1로 계산해서 painted 값에 대입
    if (s > painted) {
      answer += 1;
      painted = s + m - 1;
    }
  }
  console.log(answer);

  return answer;
}

solution(8, 4, [2, 3, 6]);
