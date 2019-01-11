// cause when p / q supposed to be Max
// Max(p) and Min(q)
// So a/b/c/d => Max
// b/c/d should be Min
// and It could be b/(c/d) or b/c/d
// b/(c/d) => bd/c
// b/c/d => b/cd

// cause d >= 1, give the condition on list of positive integers
// bd/c - b/cd = (d+1)(d-1)/cd > 0
// b/(c/d) > b/c/d
// so the Min of a/b/c/d/e/f... should be a/(b/c/d/e/f...)
// boundary case should be list length === 1 and list length === 2 which should return just nums[0] and `nums[0]/nums[1]`
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
  if (nums.length === 1) {
      return nums[0] + ''
  } else if (nums.length === 2) {
      return nums.join('/')
  } else {
      let [first, ...rest] = nums
      return `${first}/(${rest.join('/')})`
  }
};