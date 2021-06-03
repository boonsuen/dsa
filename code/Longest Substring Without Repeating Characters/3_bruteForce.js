const lengthOfLongestSubstring = s => {
  if (s.length <= 1) return s.length;
  let longestLength = 0;  

  for (let p1 = 0; p1 < s.length; p1++) {
    let seenChars = {};
    let currentLength = 0;

    for (let p2 = p1; p2 < s.length; p2++) { 
      const currentChar = s[p2];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longestLength = Math.max(longestLength, currentLength);
      } else {
        break;
      }
    }
  }
  return longestLength;
};

const inputs = ['abccabb', 'ccccc', '', 'abcbda', 'pwwkew'];
console.log(lengthOfLongestSubstring(inputs[4]));