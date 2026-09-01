function lengthOfLongestSubstring(s: string): number {
  let letters = "";
  let curr = "";

  for (let i = 0; i < s.length; i++) {
    const idx = curr.indexOf(s[i]!);

    if (idx < 0) {
      curr += s[i];
    } else {
      if (letters.length <= curr.length) {
        letters = curr;
      }
      curr = curr.substring(idx + 1) + s[i]!;
    }
  }

  return letters.length > curr.length ? letters.length : curr.length;
}

console.log("\n ---- RESULT", lengthOfLongestSubstring("ggububgvfk")); // 6
console.log("\n ---- RESULT", lengthOfLongestSubstring("loddktdji")); // 5
console.log("\n ---- RESULT", lengthOfLongestSubstring("jbpnbwwd")); // 4
console.log("\n ---- RESULT", lengthOfLongestSubstring("pwwkew")); // 3
console.log("\n ---- RESULT", lengthOfLongestSubstring("davdefdd")); // 5
console.log("\n ---- RESULT", lengthOfLongestSubstring("aab")); // 2
