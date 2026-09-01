function countAndSay(n: number): string {
  console.log(n);
  let ed = "1";
  if (n === 1) return ed;

  ed = "11";

  if (n === 2) return ed;

  function pairs(s: string) {
    let ps: string[][] = [];

    for (let i = 0; i < s.length - 1; i += 2) {
      ps.push([s[i]!, s[i + 1]!]);
    }

    return ps;
  }

  function encode(s: string) {
    let currDigit = s[0]!;
    let currCount = 1;
    let edd = "";

    for (let i = 1; i < s.length; i++) {
      if (s[i]! === currDigit) currCount++;
      else {
        edd += `${currCount}${currDigit}`;
        currCount = 1;
        currDigit = s[i]!;
      }
    }
    edd += `${currCount}${currDigit}`;

    return edd;
  }
  for (let i = 3; i <= n; i++) {
    ed = encode(ed);
  }

  return ed;
}

console.log("---- RESULT", countAndSay(4), "1211", "----\n");

console.log("---- RESULT", countAndSay(5), "111221", "----\n");

console.log("---- RESULT", countAndSay(6), "312211", "----\n");

console.log("---- RESULT", countAndSay(7), "13112221", "----\n");

console.log("---- RESULT", countAndSay(8), "1113213211", "----\n");

console.log("---- RESULT", countAndSay(1), "1", "----\n");
