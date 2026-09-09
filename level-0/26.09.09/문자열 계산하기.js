/* 
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 
문자열 my_string이 매개변수로 주어질 때, 
수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  const arr = my_string.split(" ");

  // 배열의 홀수 번쨰 항목들을 연산해주면 됨
  // answer = 배열의 첫번째 항목
  var answer = Number(arr[0]);

  // 반복문 안의 연산자(짝수 항목) 에 따라 계산
  for (let i = 1; i < arr.length; i += 2) {
    answer =
      arr[i] === "+"
        ? answer + Number.parseInt(arr[i + 1])
        : answer - Number.parseInt(arr[i + 1]);
  }

  return answer;
}

solution("8 + 5");
