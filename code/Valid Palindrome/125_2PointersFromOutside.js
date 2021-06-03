const isPalindrome = s => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;

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

const inputs = ['abc', 'aba', 'abba', 'A man, a plan, a canal: Panama'];
console.log(isPalindrome(inputs[2]));