function subsets(nums: number[]): number[][] {
  let combs: number[][] = [];
  let co: number[] = [];

  function comb(num: number, len: number, p: boolean = false) {
    console.log(co, p);
    if (!p) combs.push([...co]);

    if (num >= nums.length) return;

    co.push(nums[num]);

    comb(num + 1, len + 1);

    co.pop();

    comb(num + 1, len, true);
  }

  comb(0, 0);

  return combs;
}

console.log(
  "---- RESULT",
  subsets([1, 2, 3]),
  "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
  "----\n",
);

console.log("---- RESULT", subsets([0]), "[[],[0]]", "----\n");
