var isPalindrome = function (x) {
  const number = x;
  const numberString = x.toString();
  const array = numberString.split("");
  const reverseNumber=array.reverse()
  const joinNumber = reverseNumber.join("");
  const isTrue = number === Number(joinNumber); 
};

