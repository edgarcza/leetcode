function lengthOfLastWord(s: string): number {
  let reading = false;
  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (!reading && s[i] === " ") continue;
    if (reading && s[i] === " ") return len;
    reading = true;
    len++;
  }

  return len;
}

console.log("---- RESULT", lengthOfLastWord("Hello World"), "5", "----\n");

console.log(
  "---- RESULT",
  lengthOfLastWord("   fly me   to   the moon  "),
  "4",
  "----\n",
);

console.log(
  "---- RESULT",
  lengthOfLastWord("luffy is still joyboy"),
  "6",
  "----\n",
);
