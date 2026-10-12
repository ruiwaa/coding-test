/* 
두 선수가 일렬로 놓인 음식을 양쪽 끝에서 먹으며 가운데로 다가가요.
가운데에는 **물(0)**이 하나 있고, 먼저 물을 마시는 쪽이 이겨요.
공정하게 하려는 규칙
두 선수는 같은 종류의 음식을 같은 개수만큼 먹어야 해요.
먹는 순서도 같아야 해요. 칼로리가 낮은 음식(번호가 작은 것)부터 먹어요.
음식이 홀수 개라 반으로 못 나누면 남는 하나는 빼요.
입력과 출력
입력 food: 각 음식의 준비된 개수가 든 배열
food[0]은 물의 양이라 항상 1
food[i]는 i번 음식의 개수
출력: 음식 배치를 나타낸 문자열 (음식 번호를 나열, 가운데에 0)
 */

function solution(food) {
  var answer = "";
  // 소수점 아래 버릴 몫을 반환
  food.forEach((f, index) => {
    const shareFood = Math.floor(f / 2);

    // food[0] 은 항상 1이므로 건너뛰기
    if (food[f] === 0) return;

    // 몫의 개수만큼 해당 인덱스의 번호 반복
    answer += index.toString().repeat(shareFood);
  });

  // answer reverse 메서드 사용해서 대칭 이루기
  const reverseFood = answer.split("").reverse().join("");
  // answer에 누적 연산자 활용해서 0과 역방향 배열 더하기
  answer += 0 + reverseFood;

  return answer;
}

solution([1, 7, 1, 2]);
