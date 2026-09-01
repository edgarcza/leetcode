function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const zz: string[] = [];
  const znumRows = numRows - 1;
  const znumRowsDoub = znumRows * 2;

  for (let i = 0; i < s.length; i++) {
    let y = 0;
    if (i % znumRowsDoub < numRows) {
      y = i % znumRowsDoub;
    } else {
      y = znumRowsDoub - (i % znumRowsDoub);
    }

    if (!zz[y]) zz[y] = "";

    zz[y] += s[i]!;
  }

  //   console.log(zz.forEach((a) => console.log(a)));

  return zz.join("");
}

console.log("\n ---- RESULT", convert("PAYPALISHIRING", 3));
console.log("\n ---- RESULT", convert("PAYPALISHIRING", 4));
console.log("\n ---- RESULT", convert("A", 1));
