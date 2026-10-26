// number = 기사단원의 수
// limit을 초과할 시 power 무기 구매 가능

function solution(number, limit, power) {
  var answer = 0;

  // 기사 1번부터 number번까지, 각 기사의 약수 개수를 구한다
  for (let i = 1; i <= number; i++) {
    let count = 0; // 기사마다 약수 개수를 새로 센다

    // 약수는 곱해서 i가 되는 짝(j, i / j)으로 존재한다
    // 짝의 작은 쪽 j만 확인하면 되므로 j * j <= i (i)까지만 반복
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        // j를 찾으면 짝 i / j도 약수이므로 2개를 센다
        // 단, j와 짝이 같은 수(예: 4 × 4 = 16)면 1개만 센다
        j === i / j ? (count += 1) : (count += 2);
      }
    }

    // 공격력이 제한 수치를 넘으면 정해진 power를, 아니면 약수 개수를 더한다
    answer += count <= limit ? count : power;
  }

  return answer;
}

solution(5, 3, 2);
