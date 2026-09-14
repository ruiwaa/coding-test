/* 
한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 
다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 
동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
같은 식이라면 가장 짧은 수식을 return 합니다.
*/

function solution(polynomial) {
  var answer = "";
  let xSum = 0;
  let num = 0;

  polynomial.split(" ").forEach((element) => {
    if (element === "+") return;

    element.includes("x")
      ? (xSum += parseInt(element) || 1)
      : (num += Number(element));
  });

  const xPart = xSum === 1 ? "x" : xSum + "x";

  if (xSum !== 0 && num !== 0) {
    answer = xPart + " + " + num;
  } else if (xSum !== 0) {
    answer = xPart;
  } else {
    answer = num + "";
  }
  return answer;
}

solution("x");
