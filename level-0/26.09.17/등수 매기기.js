/* 
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(score) {
  var answer = [];

  // 기존의 영어, 수학 점수 배열을 평균과 해당 인덱스 출력된 배열로 재생성
  const arr = score.map((s, idx) => ({
    avg: (s[0] + s[1]) / 2,
    originalIdx: idx,
  }));

  // 평균 내림차순 정렬
  arr.sort((a, b) => b.avg - a.avg);

  // 등수 계산
  let rank = 1;

  // forEach문은 두번째 매개변수가 자동으로 인덱스를 뜻하여
  // 초기값을 따로 지정할 필요없이 0부터 시작됨
  arr.forEach((student, i) => {
    // 이전 순위와 다른 평균값이라면?
    // 내림차순 정렬이기때문에, rank에 1 더해주기
    if (i > 0 && arr[i - 1].avg !== student.avg) {
      rank = i + 1;
    }

    // 기존 인덱스에 순위 집어넣기
    answer[student.originalIdx] = rank;
  });

  return answer;
}

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
