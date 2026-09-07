function solution(order) {
  var answer = 0;

  String(order)
    .split("")
    .map((num) => {
      answer += num === "3" || num === "6" || num === "9" ? 1 : 0;
    });

  return answer;
}

solution(2423);
