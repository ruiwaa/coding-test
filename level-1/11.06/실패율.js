/* 
실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N,
 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
*/

function solution(N, stages) {
  var answer = [];
  // 실패율 계산 방법 fail =  플레이어의 수/ 총 도달한 인원
  let fail = 0;
  // 총 도달한 인원 수
  let reachPeople = stages.length;

  // 각 스테이지별 도달한 인원 수 세기
  let count = {};
  for (const s of stages) {
    // count 객체 활용해서 같은 오른쪽 키 왼쪽 키값 쌍 담아주기
    count[s] = (count[s] || 0) + 1;
  }

  // 실패율 계산하기
  let failRate = {};
  for (let i = 1; i <= N; i++) {
    // 스테이지를 모두 클리어 했다면? 0 반환
    fail = (count[i] || 0) / reachPeople;

    // 총 참가한 인원 - 이전 스테이지 남은 인원 = 총 도달한 인원
    reachPeople -= count[i] || 0;
    answer.push(i);
    failRate[i] = fail;
  }
  console.log(failRate);
  answer.sort((a, b) => failRate[b] - failRate[a]);
  console.log(answer);

  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
