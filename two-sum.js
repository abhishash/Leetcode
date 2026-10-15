var twoSum = function (nums, target) {
  const map = new Map();
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    let num = nums[i];
    let complement = target - num;
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(complement, i);
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
