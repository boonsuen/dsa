function minRemoveToMakeValid(s: string): string {
  const arr = s.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i);
    } else if (arr[i] === ')') {
      if (stack.length === 0) {
        arr[i] = '';
      } else {
        stack.pop();
      }
    }
  }
  
  while (stack.length) {
    arr[stack.pop()] = '';
  }
  return arr.join('');
}

export {};