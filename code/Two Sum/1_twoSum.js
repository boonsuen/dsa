const nums = [1, 3, 7, 9, 2];

// const findTwoSum = (nums, target) => {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     const numberToFind = target - nums[p1];
//     for (let p2 = p1+1; p2 < nums.length; p2++) {
//       if (numberToFind === nums[p2]) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// };

const twoSum = (nums, target) => {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      numsMap[target - nums[p]] = p;
    }
  }
  return null;
};

console.log(twoSum(nums, 11));