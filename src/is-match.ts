function isMatch_(s: string, p: string): boolean {
  console.log("STRING:", s, "   P:", p);
  if (p === ".*") return true;

  let si = 0;
  let prevP = "";

  for (let i = 0; i < p.length; i++) {
    console.log(s[si], p[i], prevP, p[i + 1]);
    if (p[i] === "*") {
      while (s[si] === prevP) {
        si++;
        console.log("w", s[si], prevP, p[i + 1]);
        if (i < p.length - 1 && si >= s.length - 1) break;
      }
      continue;
    }

    if (p[i] === ".") {
      prevP = s[si]!;
      si++;
      continue;
    }

    if (p[i + 1] === "*") {
      prevP = p[i]!;
      continue;
    }

    if (p[i] !== s[si]) {
      return false;
    } else {
      prevP = s[si]!;
      si++;
    }
  }

  if (si !== s.length) return false;

  return true;
}

function isMatch(s: string, p: string): boolean {
  function getPatterns(ptrn: string) {
    const pts: string[] = [];
    while (ptrn.length > 0) {
      if (ptrn[1] === "*") {
        pts.push(ptrn[0] + ptrn[1]);
        ptrn = ptrn.slice(2);
      } else {
        pts.push(ptrn[0]!);
        ptrn = ptrn.slice(1);
      }
    }

    return pts;
  }

  function validate(str: string, ptrns: string[]) {
    const ptrn = ptrns[0]!;
    const ups = ptrns.filter((p) => p.length === 1);

    if (ptrns.length === 0 && str.length > 0) return false;
    if (ptrns.length === 1 && ptrn === ".*") return true;
    if (str.length === 0) {
      if (ups.length === 0) return true;
      return false;
    }

    let tkn = ptrn[0];

    console.log("validating", `s: ${str}`, " - ", `p: ${ptrn}`);

    let next = ptrns.slice(1);

    if (tkn === ".") {
      tkn = str[0];
    }

    console.log("token", `${ptrn}`, ups);

    if (ptrn[1] === "*") {
      if (tkn !== ".") {
        while (tkn === str[0] && str.length > ups.length) {
          str = str.slice(1);
        }
      } else {
        while (
          str.length > 0 &&
          (ptrns[1]?.length === 1 && ptrns[1][0] === str[0])
        ) {
          str = str.slice(1);
        }
      }
    } else {
      if (str[0] !== tkn) return false;

      str = str.slice(1);
    }

    return validate(str, next);
  }

  const patterns = getPatterns(p);
  console.log(patterns);

  return validate(s, patterns);
}

console.log("---- RESULT", isMatch("aa", "a"), false, "----\n");
console.log("---- RESULT", isMatch("aa", "a*"), true, "----\n");
console.log(
  "---- RESULT",
  isMatch("aaabaccccedhibsuuuug", "a*bac*ed..bs.*g"),
  true,
  "----\n",
);
console.log("---- RESULT", isMatch("ab", ".*"), true, "----\n");
console.log("---- RESULT", isMatch("aab", "c*a*b"), true, "----\n");
console.log("---- RESULT", isMatch("aaa", "a*a"), true, "----\n");
console.log("---- RESULT", isMatch("aaa", "ab*a"), false, "----\n");
console.log("---- RESULT", isMatch("aaa", "ab*a*c*a"), true, "----\n");
console.log("---- RESULT", isMatch("a", "ab*"), true, "----\n");
console.log("---- RESULT", isMatch("abcdede", "ab.*de"), true, "----\n");
// console.log("\n ---- RESULT", isMatch("bbbba", ".*a*a"));
// console.log("\n ---- RESULT", isMatch("abbbb", "aa*.*"));
