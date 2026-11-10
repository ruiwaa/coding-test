/* 
길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다. 이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다. 
이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다. 
배열 A, B가 주어질 때 최종적으로 누적된 최솟값을 return 하는 solution 함수를 완성해 주세요.
*/

function solution(A, B) {
  // 배열의 크기에 따라서 그 수만큼 반복문을 돌려야 하는데
  let add = 0;

  // 두 배열의 값을 곱해서 최솟값이 나올 수 있는 조건:
  // 한 배열은 오름차순, 다른 배열은 내림차순으로 만들어주기

  const ascA = A.sort((a, b) => a - b);
  const descB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    add += ascA[i] * descB[i];
  }

  return add;
}

solution([1, 2], [3, 4]);
