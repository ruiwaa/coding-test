/* 
문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 
마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 
이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, 
A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 
return 하도록 solution 함수를 완성해보세요.
*/

function solution(A, B) {
  // 마지막 항목이 첫번째 항목이 되도록 함수 생성
  const pushStr = (str) => {
    return str[str.length - 1] + str.slice(0, -1);
  };

  // 현재 문자 배열과
  // 최소 횟수 변수 선언

  let current = A;
  let count = 0;

  // B와 A 문자열이 다르고,
  // A 길이 전 만큼 (= A 의 문자열 인덱스 길이)
  // 반복문을 실행해
  // B와 같아질때까지 count 증가
  while (current !== B && count < A.length) {
    current = pushStr(current);
    count++;
  }

  // A,B가 같을 경우 0 반환
  // 최소 횟수가 있을 경우 증가된 count 값 반환
  // 생성될 수 없을 경우 -1 반환
  return current === B ? count : -1;
}

solution("apple", "elppa");
