const validSubPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

const isAlmostPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validSubPalindrome(s, left, right - 1) ||
        validSubPalindrome(s, left + 1, right)
      );
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isAlmostPalindrome('abccdba'));
// abccba
// abcdba