const trap = heights => {
  let ans = 0;
  let leftP = 0;
  let rightP = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (leftP < rightP) {
    if (heights[leftP] <= heights[rightP]) {
      if (heights[leftP] >= leftMax) {
        leftMax = heights[leftP]
      } else {
        ans += leftMax - heights[leftP];
      }

      leftP++;
    } else {
      if (heights[rightP] >= rightMax) {
        rightMax = heights[rightP]
      } else {
        ans += rightMax - heights[rightP];
      }

      rightP--;
    }
  }

  return ans;
};