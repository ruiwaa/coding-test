/* 
문자열 str1, str2가 매개변수로 주어집니다. 
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 
solution 함수를 완성해주세요.
*/

function solution(str1, str2) {
  var answer = 0;

  answer = str1.indexOf(str2) === -1 ? 2 : 1;

  return answer;
}

solution("ab6CDE443fgh22iJKlmn1o", "6CD");
solution("ppprrrogrammers", "pppp");
solution("AbcAbcA", "AAA");
