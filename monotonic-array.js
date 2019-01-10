// https://leetcode.com/problems/monotonic-array/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isDesc = function(A) {
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) return false
  }
  return true
}

var isAsc = function(A) {
  return isDesc(A.reverse())
}

var isMonotonic = function(A) {
  if (A.length === 1) return true
  if (A[0] <= A[A.length - 1]) {
    return isAsc(A)
  } else {
    return isDesc(A)
  }
}
