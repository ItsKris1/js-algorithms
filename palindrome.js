function onlyAlphanumeric(str) {
  let regEx = /[^\W_]+/g;
  let checkStr = str.match(regEx).join("").toLowerCase();
  return checkStr;
}

function reverseStr(s) {
  let splitString = s.split("");
  return splitString.reverse().join("");

}

function palindrome(aStr) {
  aStr = onlyAlphanumeric(aStr);
  let reversedAStr = reverseStr(aStr);

  if (aStr === reversedAStr) {
    return true;
  }

  else {
    return false;
  }
}

console.log(palindrome("five|\_/|four"))