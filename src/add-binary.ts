function addBinary(a: string, b: string): string {
  console.log(a, "+", b);
  const max = Math.max(a.length, b.length);
  const ans: string[] = [];

  let rest = 0;
  for (let i = 0; i < max; i++) {
    const al = a[a.length - i - 1] ?? 0;
    const bl = b[b.length - i - 1] ?? 0;

    const s = Number(al) + Number(bl) + rest;
    const ss = s % 2;
    rest = Math.floor(s / 2);
    console.log(al, bl, ss, rest);
    ans.unshift(ss.toString());
  }

  if (rest > 0) ans.unshift("1");

  return ans.join("");
}

console.log("---- RESULT", addBinary("11", "1"), "100", "----\n");

console.log("---- RESULT", addBinary("1010", "1011"), "10101", "----\n");

console.log("---- RESULT", addBinary("11111", "1111"), "101110", "----\n");
