const buildString = function(string) {
  const builtArray = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== '#') {
      builtArray.push(string[p]);
    } else {
      builtArray.pop();
    }
  }
  return builtArray;
}

const backspaceCompare = (s, t) => {
  const finalS = buildString(s);
  const finalT = buildString(t);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
  return true;
};