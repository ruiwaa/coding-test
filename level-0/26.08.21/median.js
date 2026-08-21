/* 
중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

*/

// sort 메서드를 사용하여 정렬 한 뒤
// 배열의 길이의 중간값 구하기 => 소수일 경우 Math.floor 사용하여
// 가장 큰 수 반환

function solution(array) {
  const sortArray = (a, b) => {
    return a - b;
  };

  const getMedianNum = Math.floor(array.length / 2);
  array.sort(sortArray);

  var answer = array[getMedianNum];
  return answer;
}
console.log(solution([4, 2, 5, 1, 3, 10]));
