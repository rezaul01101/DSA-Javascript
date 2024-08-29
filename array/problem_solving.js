//Reverse String
const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("Hello"));

//palindromes
const palindromes = (str) => {
  const stingReverse = reverseString(str);
  if (str === stingReverse) {
    return `this is palindromes ${str}`;
  }
  return `This is not palindromes ${str}`;
};
// console.log(palindromes("cdc"));

// integer value reverse
const intReverse = (intValue) => {
  const convertToString = intValue.toString();
  const stringReverse = reverseString(convertToString);
  const stringToNumber = parseInt(stringReverse);
  return stringToNumber;
};
// console.log(intReverse(654321));
