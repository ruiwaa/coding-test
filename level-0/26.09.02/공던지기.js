/* 
머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 
공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
*/

function solution(numbers, k) {
  var answer = 0;

  // 1단계 공던기지 순서 담을 변수 선언
  let count = 0;

  // 2단계 공던지기가 k번째까지 반복되도록
  // 반복문 만들기
  while (count < k) {
    // 1번부터 5번 순서까지 돌아가면서
    // 친구들의 번호 배열 순환 => numbers[index]
    // 한명은 건넌 뛰고 그 다음 사람에게 던지기 => + 2
    // 마지막 번호 도달 시 첫번째 번호로 이동
    // 1일 경우 -> 3 : index[0] => index[2]
    // 0 -> 2 -> 4 반복
    const index = (count * 2) % numbers.length;
    // 순서가 멈출 때까지 count 증가
    count++;

    answer = numbers[index];
  }
  console.log(answer);
  return answer;
}

solution([1, 2, 3], 3);
