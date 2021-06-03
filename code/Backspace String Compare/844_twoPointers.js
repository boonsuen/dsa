const backspaceCompare = function (s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;
  
  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backcount = 2;
        while (backcount > 0) {
          p1--;
          backcount--;
          if (s[p1] === '#') {
            backcount += 2;
          }
        }
      }
      if (t[p2] === '#') {
        let backcount = 2;
        while (backcount > 0) {
          p2--;
          backcount--;
          if (t[p2] === '#') {
            backcount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
};

console.log(backspaceCompare('Ab#z', 'a7#z'));
