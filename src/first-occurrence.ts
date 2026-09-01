function strStr(haystack: string, needle: string): number {
  let pos = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[pos]) {
      pos++;
    } else {
      i = i - pos;
      pos = 0;
    }

    if (pos >= needle.length) return i - pos + 1;
  }

  return -1;
}

console.log("---- RESULT", strStr("sadbutsad", "sad"), "0", "----\n");

console.log("---- RESULT", strStr("leetcode", "leeto"), "-1", "----\n");

console.log("---- RESULT", strStr("helloexamplehey", "example"), "5", "----\n");

console.log("---- RESULT", strStr("mississippi", "issip"), "4", "----\n");
