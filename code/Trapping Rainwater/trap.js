const trap = heights => {
  let ans = 0;

  for (let i = 0; i < heights.length; i++) {
    let left_max = 0;
    let right_max = 0;

    for (let j = 0; j < i; j++) {
      left_max = Math.max(left_max, heights[j]);
    }

    for (let j = i + 1; j < heights.length; j++) {
      right_max = Math.max(right_max, heights[j]);
    }

    const currentWater = Math.min(left_max, right_max) - heights[i];
    console.log(currentWater);

    if (currentWater >= 0) {
      ans += currentWater;
    }
  }

  return ans;
};

/* 
  --------- --------- --------- --------- 
*/

// The difference is that the currentWater in the 
// function below will never be negative.
// 如果那个point有积水的话，代表左右两边的两个最高point都比自己还高
// 如果左右两边的两个最高point，任何其中一个<=自己，意味着不会积水
// 因为任何一个<=的话，我们选的min也是那个<=的，
// 所以currentWater会得到negative或者0
// 下面的function因为也包括了pointer本身来compute出左右max，
// 所以左右的max不管任何情况都是大过或等于pointer
// 因此，currentWater不会是negative。

// const trap = function(heights) {
//   let totalWater = 0;
  
//   for(let p = 0; p < heights.length; p++) {
//     let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

//     while(leftP >= 0) {
//       maxLeft = Math.max(maxLeft, heights[leftP]);
//       leftP--;
//     }

//     while(rightP < heights.length) {
//       maxRight = Math.max(maxRight, heights[rightP]);
//       rightP++;
//     }
    
//     const currentWater = Math.min(maxLeft, maxRight) - heights[p];
//     console.log(currentWater);
    
//     if(currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }

//   return totalWater;
// }

const input = [0,1,0,2,1,0,3,1,0,1,2];
// const input = [3,0,1];
// const input = [3,4,3];
console.log('answer', trap(input));