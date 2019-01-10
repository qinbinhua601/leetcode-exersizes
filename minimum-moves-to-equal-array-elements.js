/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // let move K times, min item of Array= min = Math.min(...nums)
  // let M = filnal equal number of array item
  // N = length of Array = nums.length
  // K + min = M
  // (M * N) = Sum(...nums) + K * (N - 1)
  // MN = Sum(...nums) + KN - K
  // => K = Sum(...nums) - min * N
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  let min = Math.min(...nums);
  let N = nums.length;
  return sum - min * N
};