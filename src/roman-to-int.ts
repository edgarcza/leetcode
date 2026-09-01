function romanToInt(s: string): number {
  const romans = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let sum = 0;
  let last = 10000;

  for (let i = 0; i < s.length; i++) {
    const r = romans.get(s[i]!)!;
    let add = r;

    if (last < add) {
      add = r - last * 2;
    }

    sum += add;
    last = r;
  }

  return sum;
}

console.log("---- RESULT", romanToInt("III"), "3", "----\n");
console.log("---- RESULT", romanToInt("LVIII"), "58", "----\n");
console.log("---- RESULT", romanToInt("MCMXCIV"), "1994", "----\n");
