/* 
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 
예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 
문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(s) {
  var answer = true;

  // 왼쪽 오른쪽 괄호의 수가 같다면 올바른 괄호
  // 왼,오 괄호 수 담을 변수 선언
  let leftCount = 0;
  let rightCount = 0;
  for (const isCorrect of s) {
    isCorrect === "(" ? (leftCount += 1) : (rightCount += 1);
    // 빠른 반환
    // 처음부터 닫힌 괄호가 있을 경우 틀린 괄호
    if (leftCount < rightCount) answer = false;
  }
  return leftCount !== rightCount ? (answer = false) : answer;
}

solution("()()");
