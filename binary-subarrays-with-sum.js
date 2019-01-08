/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
  if (A.length < S) {
      return 0;
  }
  var count = 0;
  var start = 0;
  while(start < A.length) {
      var sum = 0;
      for (var i = start; i < A.length; i++) {
          sum += A[i]
          if (sum === S) {
              count++
          } else {
              if (sum > S) {
                  break;
              }
          }
      }
      start++;
  }
  return count;
};