const parens = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function isValid(s: string): boolean {  
  if (s.length === 0) return true;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(parens[s[i]]);
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      };
    }
  }

  return stack.length === 0;
};

export {};