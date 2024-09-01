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

// array chunk

const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);

    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5,6,7,8], 3));
