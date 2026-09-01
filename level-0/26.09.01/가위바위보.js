/* 
가위는 2 바위는 0 보는 5로 표현합니다. 
가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 
solution 함수를 완성해보세요.

*/

function solution(rsp) {
  // 가위바위보에 상응하는 숫자가 담긴 객체 생성
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };

  var answer = "";

  // 배열 쪼개기
  const rspArr = rsp.split("");

  // 객체에 키값 찾기
  answer = rspArr.map((m) => {
    return arr[m];
  });

  return console.log(answer.join(""));
}

solution("2");
