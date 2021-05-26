/**
 * @param {number[]} height
 * @return {number}
 */
const getMaxWaterContainer = heights => {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  
  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = width * height;
    maxArea = Math.max(maxArea, area);

    if (heights[left] <= heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

const input = [4, 8, 1, 2, 3, 9];
console.log(getMaxWaterContainer(input));