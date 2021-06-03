// Use a sliding window to represent the current substring
// The size of the window will change based on new characters,
// and characters we've already seen before.
// Our seen characters hashmap keeps track of what characters
// we've seen, and the index we saw them at.

const lengthOfLongestSubstring = (s) => {
  const window = new Map();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    let prevSeenCharIndex = window.get(currentChar);
    if (prevSeenCharIndex >= left) {
      left = prevSeenCharIndex + 1;
    }
    window.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

const inputs = ['abccabb', 'ccccc', '', 'abcbda', 'pwwkew', 'abcbdaac'];
console.log(lengthOfLongestSubstring(inputs[5]));
