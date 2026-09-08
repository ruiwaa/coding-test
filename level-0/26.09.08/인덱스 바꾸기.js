/* 

문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 
solution 함수를 완성해보세요.

*/

function solution(my_string, num1, num2) {
  var answer = my_string.split("");

  // 삼항 연산자로 해당 index(num1, num2)인지 판단하여,
  // 맞을 경우 서로 바꿔주고
  // 둘 다 아닐 경우는 기존의 배열 항목을 반환

  return answer
    .map((s, index) => {
      return index === num1
        ? my_string[num2]
        : index === num2
          ? my_string[num1]
          : s;
    })
    .join("");
}

solution("hello", 1, 2);
