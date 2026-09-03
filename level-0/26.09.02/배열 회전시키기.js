/* 
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 
return하도록 solution 함수를 완성해주세요.
*/

// function solution(numbers, direction) {
//   var answer = [];
//   // right, left일 경우의 배열 순서를 재조정
//   // right : 배열의 마지막 항목을 제거 후 첫번째에 추가 :pop, unshift
//   // left : 배열의 첫번째 항목을 제거 후 마지막에 추가 :shift, push

//   if (direction === "right") {
//     const popped = numbers.pop()
//     const directionToRight = numbers.unshift(popped)
//     answer = numbers
//   } else {
//     const shifted = numbers.shift()
//     const directionToLeft = numbers.push(shifted)
//     answer = numbers

//   }
//   return answer;
// }

function solution(numbers, direction) {
  var answer = [];
  // direction에 따라서 삼항연산자로 방향에 따른 배열 순서 재조정하기
  answer =
    direction === "right"
      ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
      : [...numbers.slice(1, numbers.length), numbers[0]];

  return answer;
}

solution([1, 2, 3], "right");
