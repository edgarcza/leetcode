function fullJustify(words: string[], maxWidth: number): string[] {
  const lines: string[][] = [[]];
  const linesLen: number[] = [0];
  let currLineIdx = 0;

  for (let i = 0; i < words.length; i++) {
    const space = lines[currLineIdx].length === 0 ? 0 : 1;
    if (
      linesLen[currLineIdx] < maxWidth &&
      words[i].length + linesLen[currLineIdx] + space <= maxWidth
    ) {
      lines[currLineIdx].push(words[i]);
      linesLen[currLineIdx] += words[i].length + space;
      continue;
    }

    currLineIdx++;
    linesLen.push(words[i].length);
    lines.push([words[i]]);
  }

  const textLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const isLastLine = i === lines.length - 1;
    const actLen = linesLen[i] - lines[i].length + 1;
    const diff = maxWidth - actLen;
    const blanks = lines[i].length - 1 || 1;
    const spaces = !isLastLine ? Math.floor(diff / blanks) : 1;
    let extraSpaces = !isLastLine ? diff % blanks : 0;

    console.log(
      `lines #${i + 1}  -  spaces: ${spaces}, extra spaces: ${extraSpaces} (${linesLen[i]} ${actLen}) (${diff} / ${blanks})`,
    );

    let s = lines[i].reduce((text, word, idx) => {
      if (idx === 0) return word;

      let wordSpaces = spaces;
      if (extraSpaces > 0) {
        wordSpaces++;
        extraSpaces--;
      }

      const wordSpacesStr = " ".repeat(wordSpaces);

      return `${text}${wordSpacesStr}${word}`;
    }, "");

    console.log("leftspaces", spaces, extraSpaces);

    if (isLastLine || lines[i].length === 1) {
      s += " ".repeat(maxWidth - linesLen[i]);
    }

    textLines.push(s);
  }

  return textLines;
}

console.log(
  "---- RESULT",
  fullJustify(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16,
  ),
  '[\
   "This    is    an",\
   "example  of text",\
   "justification.  "\
  ]',
  "----\n",
);

console.log(
  "---- RESULT",
  fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16),
  '[\
  "What   must   be",\
  "acknowledgment  ",\
  "shall be        "\
  ]',
  "----\n",
);

console.log(
  "---- RESULT",
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20,
  ),
  '[\
  "Science  is  what we",\
  "understand      well",\
  "enough to explain to",\
  "a  computer.  Art is",\
  "everything  else  we",\
  "do                  "\
  ]',
  "----\n",
);
