function getPermutation(n: number, k: number): string {
  const res: number[][] = [];
  const used = new Array(n).fill(false);
  const curr: number[] = [];

  let count = 0;
  let ans = "";

  function bt() {
    if (count >= k) return;

    if (n === curr.length) {
      count++;
      res.push([...curr]);
      if (count === k) ans = curr.join("");
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      curr.push(i + 1);
      used[i] = true;

      bt();

      curr.pop();
      used[i] = false;
    }
  }

  bt();

  console.log(res);

  return ans;
}

console.log("---- RESULT", getPermutation(3, 3), "213", "----\n");

console.log("---- RESULT", getPermutation(4, 9), "2314", "----\n");

console.log("---- RESULT", getPermutation(3, 1), "123", "----\n");

console.log("---- RESULT", getPermutation(3, 5), "312", "----\n");
