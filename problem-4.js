const lengthOfLastWord = (word) => {
  const trimWord = word.trim();
  const splitWord = trimWord.split(" ");
  const lastWord = splitWord[splitWord.length - 1];
  const lastWordLength = lastWord.length;
  const result = lastWordLength;
  console.log(result);
  return result;
};
lengthOfLastWord("    hey   their   good morning  bro");
