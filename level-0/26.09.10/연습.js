{
  function solution(my_string) {
    const a = my_string.split(" ");
    var answer = parseInt(a[0]);
    for (let i = 1; i < a.length; i += 2) {
      const operator = a[i];
      answer =
        operator === "+"
          ? answer + parseInt(a[i + 1])
          : answer - parseInt(a[i + 1]);

      console.log(parseInt(a[i + 1]));
    }
    console.log(answer);

    return answer;
  }

  solution("3 - 4 + 2");
}

{
  function solution(s1, s2) {
    var answer = 0;
    const b = s2.filter((s) => s1.includes(s));
    answer = b.length;

    return answer;
  }
  solution(["a", "b", "c"], ["com", "d", "p"]);
}
