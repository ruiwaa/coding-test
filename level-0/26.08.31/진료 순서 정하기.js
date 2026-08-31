/* 
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
정수 배열 emergency가 매개변수로 주어질 때 
응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록
solution 함수를 완성해주세요.
*/

function solution(emergency) {
  var answer = [];

  answer = emergency.map((i) => {
    // 여기서 배열 안의 각 숫자들을 비교해야됨
    //  자기보단 큰 숫자가 있을 경우,
    // 큰 숫자의 배열 길이 + 1 추가 (자신의 순위를 계산해야하므로)

    return emergency.filter((other) => i < other).length + 1;
  });

  return answer;
}

solution([3, 76, 24]);
