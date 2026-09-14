/* 
문자열 my_str과 n이 매개변수로 주어질 때, 
my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 
solution 함수를 완성해주세요.
*/

function solution(my_str, n) {
  var answer = [];
  // 6 씩 자르면
  // 1번 6번,7번 12번, 13번 16번
  // 반복문을 사용하여, i에 n씩 더해서 자르기
  // (0, 6), (6, 12), (12, 18)

  for (let i = 0; i < my_str.length; i += n) {
    console.log(i);
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}

solution("abc1Addfggg4556b", 6);
