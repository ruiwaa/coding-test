function solution(order) {
  var answer = 0;

  String(order)
    .split("")
    .map((s) => {
      if (s === "3" || s === "6" || s === "9") {
        return (answer += 1);
      }
    });
  return answer;
}

solution(369222);

{
  function solution(cipher, code) {
    var answer = "";
    const arr = cipher.split("");

    for (let i = code; i <= arr.length; i += code) {
      answer += arr[i - 1];
      console.log(i);
    }
    return answer;
  }
  solution("dfjardstddetckdaccccdegk", 4);
}

{
  function solution(my_string) {
    var answer = "";
    const arr = my_string.split("");
    for (const a of arr) {
      answer += a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase();
    }

    return answer;
  }
  solution("cccCCC");
}

{
  function solution(numbers) {
    const NUMBER = {
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
    };

    var answer = 0;

    answer = numbers.replace(
      /one|two|three|four|five|six|seven|eight|nine/g,
      (word) => NUMBER[word],
    );

    return Number(answer);
  }

  solution("onetwothreefourfivesixseveneightnine");
}

{
  function solution(my_string, num1, num2) {
    var answer = "";
    for (let i = 0; i < my_string.length; i++) {
      answer +=
        i === num1
          ? my_string[num2]
          : i === num2
            ? my_string[num1]
            : my_string[i];
    }

    console.log(answer);

    return answer;
  }
  solution("I love you", 3, 6);
}

{
  function solution(n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
      n % i === 0 ? answer.push(i) : undefined;
    }
    return answer;
  }

  solution(29);
}
