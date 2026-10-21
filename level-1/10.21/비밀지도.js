/* 

*/

function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    // padStart : 문자열의 시작 부분에 다른 문자열이 필요하다면 n번만큼 채우기
    // 이진법으로 변환후, padStart로 n번만큼 0 채우기
    const a = arr1[i].toString(2).padStart(n, "0");
    const b = arr2[i].toString(2).padStart(n, "0");

    let arr = "";
    for (let j = 0; j < a.length; j++) {
      if (a[j] === "1" || b[j] === "1") {
        arr += "#";
      } else arr += " ";
    }
    answer.push(arr);
  }
  console.log(answer);

  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
