function intToRoman(num: number): string {
  const romans: [number, string, boolean][] = [
    [1, "I", true],
    [5, "V", false],
    [10, "X", true],
    [50, "L", false],
    [100, "C", true],
    [500, "D", false],
    [1000, "M", true],
  ];

  let roman = "";

  function digitToRoman(d: number, r: string = "") {
    if (d === 0) return r;

    let lrgst: [number, string, boolean] = [0, "0", false];
    let sub = false;
    let subMap: [number, string, boolean] = [0, "0", false];
    let lastTen: [number, string, boolean] = [0, "0", false];
    for (const rmap of romans) {
      if (d >= rmap[0]) {
        lrgst = rmap;
        if (rmap[2]) lastTen = rmap;
      } else if (d === rmap[0] - lastTen[0]) {
        sub = true;
        subMap = rmap;
        lrgst = lastTen;
      } else break;
    }

    const nextD = !sub ? d - lrgst[0] : 0;
    const nextR = !sub ? r + lrgst[1] : r + lrgst[1] + subMap[1];

    return digitToRoman(nextD, nextR);
  }

  let divisor = 10 ** Math.floor(Math.log10(num));

  while (divisor >= 1) {
    const part = Math.floor(num / divisor) * divisor;

    roman += digitToRoman(part);

    num -= part;
    divisor /= 10;
  }

  return roman;
}

console.log("---- RESULT", intToRoman(3749), "MMMDCCXLIX", "----\n");
console.log("---- RESULT", intToRoman(58), "LVIII", "----\n");
console.log("---- RESULT", intToRoman(1994), "MCMXCIV", "----\n");
