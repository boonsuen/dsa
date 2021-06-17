const input = [5, 3, 1, 6, 4, 2];

const quickSort = function (array, left, right) {
  if (left < right) {
    const partitionIdx = partition(array, left, right);
    quickSort(array, left, partitionIdx - 1);
    quickSort(array, partitionIdx + 1, right);
  }
};

const partition = function (array, left, right) {
  const pivotElement = array[right];
  let partitionIdx = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(array, partitionIdx, right);
  return partitionIdx;
};

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);

  return nums[indexToFind];
};
