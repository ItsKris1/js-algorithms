function telephoneCheck(str) {
  let regEx = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;

  // Regex breakthrough:
  // 1. ^(1\s?)? - Optional starting point "1 ", "1"

  // 2. ( \(\d{3}\)|\d{3} ) -> (555) OR 555

  // 3. ([\s\-])? -> Numbers followed by whitespace or dash - OPTIONAL

  // 4. \d{3} -> 3 digits

  // 5. ([\s\-])? -> Step 3.

  // 6. \d{4}$ -> Ends with 4 digits.
  return regEx.test(str);

}


