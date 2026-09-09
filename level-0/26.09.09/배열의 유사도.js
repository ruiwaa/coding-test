/* 
두 배열이 얼마나 유사한지 확인해보려고 합니다. 
문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록
solution 함수를 완성해주세요.
*/
solution(["a", "b", "c"], ["com", "d", "p"]);

{
  function solution(s1, s2) {
    var answer = 0;

    // s2 의 항목을 담은 배열 안에서
    // s1 배열을 반복하여 해당 s1항목과 s2 항목을 비교
    // 같을 경우 1, 아닐 경우 0을 answer에 더하기
    s2.map((s) => {
      for (const arr of s1) {
        arr === s ? (answer += 1) : 0;
      }
    });
    return answer;
  }
}

function solution(s1, s2) {
  var answer = 0;

  const a = s1.filter((s) => s2.includes(s));
  answer += a.length;

  return answer;
}
