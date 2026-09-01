function simplifyPath(path: string): string {
  console.log(path);
  const p: string[] = [];
  let name = "";

  for (let i = 0; i < path.length; i++) {
    const char = path[i];
    if (char === "/") {
      console.log("name", name);
      if (name.length === 0) continue;
      if (name === "..") p.pop();

      if (name !== ".." && name !== ".") p.push(name);
      name = "";
      continue;
    }

    name += char;
  }

  console.log(p);

  if (name.length > 0) {
    if (name === "..") p.pop();
    else if (name !== ".") p.push(name);
  }

  if (p.length === 0) return "/";

  return p.reduce((final, dir) => {
    return `${final}/${dir}`;
  }, "");
}

console.log(
  "---- RESULT",
  simplifyPath("/home/user/Documents/../Pictures"),
  '"/home/user/Pictures"',
  "----\n",
);

console.log(
  "---- RESULT",
  simplifyPath("/.../a/../b/c/../d/./"),
  '"/.../b/d"',
  "----\n",
);

console.log(
  "---- RESULT",
  simplifyPath("/home//foo/"),
  '"/home/foo"',
  "----\n",
);

console.log("---- RESULT", simplifyPath("/../"), '"/"', "----\n");

console.log(
  "---- RESULT",
  simplifyPath("/a//b////c/d//././/.."),
  '"/a/b/c"',
  "----\n",
);

console.log("---- RESULT", simplifyPath("/."), '"/"', "----\n");
