/* 
수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 
return 하도록 solution 함수를 작성해주세요.

가장 높은 점수를 받은 사람이 여럿일 경우, 
오름차순으로 정렬해주세요
*/

const PATTERNS = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  var answer = [];
  const scores = [];
  // 위의 상수값들을 각각 참가자의 패턴에 따라서
  // 정답들과 대조시키기
  for (const p of PATTERNS) {
    // correct라는 변수를 만들고, 가장 많이 맞친 사람이 반환되게
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === p[i % p.length]) {
        correct++;
      }
    }
    // 빈 배열 안에 각 사람 당 맞춘 갯수 넣기
    scores.push(correct);
  }

  // 최대 점수를 가진 사람을 answer에 넣기
  for (let i = 0; i < scores.length; i++) {
    const max = Math.max(...scores);
    if (scores[i] === max) {
      answer.push(i + 1);
    }
  }

  console.log(answer);

  return answer;
}

solution([1, 2, 3, 4, 5]);
