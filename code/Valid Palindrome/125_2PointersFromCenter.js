const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = Math.floor(s.length / 2);
  let right = left;

  if(s.length % 2 === 0) {
    left--;
  }

  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      left--;
      right++;
    } else {
      return false;
    }
  }

  return true;
};

const inputs = ['abc', 'aba', 'abba', 'A man, a plan, a canal: Panama'];
console.log(isPalindrome(inputs[3]));