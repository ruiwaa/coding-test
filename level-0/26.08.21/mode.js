/* 

최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
정수 배열 array가 매개변수로 주어질 때, 
최빈값을 return 하도록 solution 함수를 완성해보세요. 
최빈값이 여러 개면 -1을 return 합니다.
*/
// 반복문으로 찾기
// function solution(array) {
//   const count = {}
//   for (const numbers of array) {
//     // 각 객체의 키값 구하기
//     count[numbers] = (count[numbers] || 0) + 1
//   }

// // 최빈키??? 구하기
//   let maxCount = 0;
//   let mode = 0;

//   for (const num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num]
//       mode = num
//     }
//   }

// // 조건에 따른 최빈값 구하기
//   let modeCount = 0
//   for (const num in count) {
//     if (count[num] === maxCount) {
//       modeCount++
//     }
//   }

//   if (modeCount > 1) {
//     return -1
//   }

//   var answer = Number(mode)

//   return answer
//   }

// reduce 메서드로 찾기
solution([1, 2, 3, 3, 4]);
function solution(array) {
  const count = array.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    console.log(acc);
    return acc;
  }, {});

  let maxCount = 0;
  let mode = 0;
  let modeCount = 0;

  for (const num in count) {
    console.log(count[num]);

    if (count[num] > maxCount) {
      maxCount = count[num]; // value
      mode = num; // key
    }
  }

  for (const num in count) {
    if (count[num] === maxCount) {
      modeCount++;
    }
  }

  if (modeCount > 1) {
    return -1;
  }
  var answer = Number(mode);

  return answer;
}
