const isPalindrome = s => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let rev = '';
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return s === rev;
};

const inputs = ['abc', 'aba', 'abba', 'A man, a plan, a canal: Panama'];
console.log(isPalindrome(inputs[3]));