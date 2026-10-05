function isScramble(s1: string, s2: string): boolean {
  console.log(s1, s2);
  
  function scramble(s: string): string {
    if (s.length === 1) return s;

    const idx = Math.floor(s.length / 2);
    const [p1, p2] = [s.slice(0, idx), s.slice(idx)];

    const r = Math.random() * 100;

    if (r > 50) return `${scramble(p1)}${scramble(p2)}`;
    return `${scramble(p2)}${scramble(p1)}`;
  }

  const r = scramble(s1);

  console.log(r);
}

console.log("---- RESULT", isScramble("great", "rgeat"), "true", "----\n");

console.log("---- RESULT", isScramble("abcde", "caebd"), "false", "----\n");

console.log("---- RESULT", isScramble("a", "a"), "true", "----\n");
