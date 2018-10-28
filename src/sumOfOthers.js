module.exports = function sumOfOthers(arr) {
  return arr.map(item => (arr.reduce((sum, current) => sum + current)) - item);
};
