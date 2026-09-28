/* 
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
solution을 완성해주세요.
*/

// repeat() 메서드를 활용한 문제
// repeat 메서드는 문자열을 주어진 횟수만큼 반복해서 붙임

// 이 문제는 전화번호 뒷 4자리 제외한 번호에 문자 "*"를 반복해서 붙여야 하므로
// repeat 메서드 활용 적합

function solution(phone_number) {
  var answer = "";
  const secret = "*".repeat(phone_number.length - 4);

  // *로 보호된 전화번호 뒤에 전화번호 뒷 4자리를 slice로 잘라와 마지막에 더해주기
  answer = secret + phone_number.slice(-4);

  return answer;
}

solution("027778888");
