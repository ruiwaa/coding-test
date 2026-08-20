/* 
문자열 my_string이 매개변수로 주어집니다. 
my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

/* 

1. 매개변수를 한글자씩 쪼개기 : split()
2. 쪼갠 글자 순서 뒤집기 : reverse()
3. 뒤집힌 쪼갠 글자 하나로 모으기 : join() 
*/

function solution(my_string) {
  const reverseString = my_string.split().reverse().join("");
  //  const reverseString = [...my_string].reverse().join("");
  var answer = reverseString;
  return answer;
}

console.log(solution("hello"));
