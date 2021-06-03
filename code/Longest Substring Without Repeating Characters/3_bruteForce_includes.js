const lengthOfLongestSubstring = s => {
  let longestLength = 0;  
  for (let p1 = 0; p1 < s.length; p1++) {
    let str = s[p1];
    for (let p2 = p1 + 1; p2 < s.length; p2++) {
      if (str.includes(s[p2])) {
        break;
      } else {
        str += s[p2];
      }
    }    
    if (str.length > longestLength) {
      longestLength = str.length;
    }
  }
  return longestLength;
};