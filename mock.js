var longestCommonPrefix = function (strs) {
  const len = strs.length;
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < strs[i].length; j++) {
      console.log(strs[i][j]);
      if (strs[i][j] === strs[i + 1][j]) {
        return console.log(strs[i].slice(0, j));
      }
    }
  }
};

longestCommonPrefix(["flower", "flow", "flight"]);
