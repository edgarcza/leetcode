function generateParenthesis(n: number): string[] {
  const combs: string[] = [];

  function gen(left: number, right: number, str: string) {
    if (str.length === n * 2) {
      combs.push(str);
      return;
    }

    if (left < n) gen(left + 1, right, str + "(");

    if (right < left) gen(left, right + 1, str + ")");
  }

  gen(0, 0, "");

  return combs;
}

console.log(
  "---- RESULT",
  generateParenthesis(3),
  '["((()))","(()())","(())()","()(())","()()()"]',
  "----\n",
);

console.log("---- RESULT", generateParenthesis(1), '["()"]', "----\n");
