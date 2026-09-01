function findSubstring_(s: string, words: string[]): number[] {
  function perms(base: number[][], words: string[], count?: number) {
    if (
      words.every((_, i) =>
        words[i - 1] !== undefined ? words[i - 1] === words[i] : true,
      )
    )
      return [words.map((_, i) => i)];
    if (!count)
      return perms(
        words.map((_, i) => [i]),
        words,
        1,
      );
    if (count === words.length) return base;

    const newBase: number[][] = [];

    for (let b = 0; b < base.length; b++) {
      for (let w = 0; w < words.length; w++) {
        if (base[b]!.includes(w)) continue;

        newBase.push([...base[b]!, w]);
      }
    }

    return perms(newBase, words, ++count);
  }

  const ps = perms([], words);

  const pss = ps.map((p) => p.reduce((prev, curr) => prev + words[curr], ""));
  console.log("pss", pss);
  const pssn = pss.reduce((idxs, word) => {
    let ns = s;
    let acc = 0;
    while (true) {
      const i = ns.search(word);
      if (i >= 0) {
        idxs.add(i + acc);
        ns = ns.slice(1);
        acc += 1;
      } else break;
    }

    return idxs;
  }, new Set<number>());

  return Array.from(pssn);
}

function findSubstring(s: string, words: string[]): number[] {
  const wlength = words[0]!.length;

  for (let w = 0; w < words.length; w++) {
    const word = words[w]!;
    for(let c = 0; c < s.length; c++) {
      
    }
  }
}

console.log(
  "---- RESULT",
  findSubstring("barfoothefoobarman", ["foo", "bar"]),
  "[0,9]",
  "----\n",
);

console.log(
  "---- RESULT",
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]),
  "[]",
  "----\n",
);

console.log(
  "---- RESULT",
  findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]),
  "[6,9,12]",
  "----\n",
);

console.log(
  "---- RESULT",
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"]),
  "[8]",
  "----\n",
);

console.log(
  "---- RESULT",
  findSubstring("foobarfoobar", ["foo", "bar"]),
  "[0,3,6]",
  "----\n",
);

console.log("---- RESULT", findSubstring("aaa", ["a", "a"]), "[0,1]", "----\n");

console.log(
  "---- RESULT",
  findSubstring("foobarfoobarthefoobarman", ["foo", "bar"]),
  "[0,3,6,15]",
  "----\n",
);

console.log(
  "---- RESULT",
  findSubstring("fffffffffffffffffffffffffffffffff", [
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
  ]),
  "[-]",
  "----\n",
);

console.log(
  "---- RESULT",
  findSubstring(
    "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel",
    [
      "dhvf",
      "sind",
      "ffsl",
      "yekr",
      "zwzq",
      "kpeo",
      "cila",
      "tfty",
      "modg",
      "ztjg",
      "ybty",
      "heqg",
      "cpwo",
      "gdcj",
      "lnle",
      "sefg",
      "vimw",
      "bxcb",
    ],
  ),
  "",
  "----\n",
);
