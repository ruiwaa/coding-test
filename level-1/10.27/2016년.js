/* 

2016년 1월 1일은 금요일입니다. 
2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/

function solution(a, b) {
  var answer = "";
  const targetDate = new Date(2016, a - 1, b);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  answer = days[targetDate.getDay()];
  return answer;
}

solution(5, 24);

function withOutDate(a, b) {
  const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  // 1월 1일을 0일째로 맞추기
  // 지난날까지 계산하는 것이므로 b - 1를 해줌
  let elapsed = b - 1;
  // 직전 날짜까지 계산된 변수에 이전 달들의 전체 일 수를 더해주기
  for (let i = 0; i < a - 1; i++) {
    elapsed += MONTH_DAYS[i];
  }
  return DAYS[elapsed % 7];
}
withOutDate(5, 24);
