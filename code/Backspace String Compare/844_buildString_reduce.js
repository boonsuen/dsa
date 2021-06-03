const backspaceCompare = function (s, t) {
  const buildString = string => {
    return string.split('').reduce((acc, curr) => {
      if (curr === '#') {
        return acc.slice(0, -1);
      } else {
        return acc + curr;
      }
    }, '');
  };

  return buildString(s) === buildString(t);
};

console.log(backspaceCompare('Ab#z', 'ab#z'));