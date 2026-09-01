function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  const mid = Math.ceil(s.length / 2);
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }

  return true;
}

function longestPalindrome(s: string): string {
  for (let i = s.length; i > 0; i--) {
    const chunks = s.length - i + 1;
    for (let j = 0; j < chunks; j++) {
      const word = s.slice(j, j + i);
      if (isPalindrome(word)) {
        return word;
      }
    }
  }

  return s;
}

console.log("\n ---- RESULT", longestPalindrome("babad"));
console.log("\n ---- RESULT", longestPalindrome("cbbd"));
console.log("\n ---- RESULT", longestPalindrome("ac"));
