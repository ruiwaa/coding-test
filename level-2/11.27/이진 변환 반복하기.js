/* 

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. 
s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 
return 하도록 solution 함수를 완성해주세요.
*/

//　[이진 변환의 횟수, 제거된 모든 0의 개수]

function solution(s) {
  var answer = [];
  let addZero = 0;
  let i = 0;
  let newS = "";

  // 1이 될 때까지 반복
  // while 문을 써서 s가 1이 될 때까지
  while (s !== "1") {
    i++;

    // s 배열 변환 후 0 제거
    newS = Array.from(s).filter((n) => n !== "0");
    console.log(newS);

    // s에서 0제외한 나머지 배열 길이 빼주면 0의 값이므로
    // 해당 값을 누적 연산
    addZero += s.length - newS.length;

    // s 배열 이진법 변환
    s = newS.length.toString(2);
  }

  answer.push(i, addZero);

  return answer;
}

solution("1110");
