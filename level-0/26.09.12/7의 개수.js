/* 
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 
정수 배열 array가 매개변수로 주어질 때, 
7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
*/

function solution(array) {
  var answer = 0;

  array
    .map((a) => String(a))
    .forEach((num) => {
      const n = num.split("");
      answer += n.filter((s) => s === "7").length;
    });

  return answer;
}

solution([7, 77, 17]);
