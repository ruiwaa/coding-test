/* 

문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서
 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

*/

function solution(my_string, letter) {
  // 1단계 문자 쪼개기
  const arr = my_string.split("");

  // 2단계 쪼개 문자를 letter 제외하고 넣을 빈배열 준비
  const result = [];

  // 3단계 letter가 아닌 문자들은 빈배열인 result에 넣기
  for (const string of arr) {
    if (letter != string) {
      result.push(string);
    }
    var answer = result.join("");
  }
  return answer;
}

console.log(solution("BCBdbe", "B"));
