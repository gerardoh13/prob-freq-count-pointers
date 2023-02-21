// add whatever parameters you deem necessary
function separatePositive(arr) {
  let pIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > 0) {
      pIdx++;
      [arr[pIdx], arr[i]] = [arr[i], arr[pIdx]];
    }
  }
  [arr[0], arr[pIdx]] = [arr[pIdx], arr[0]];
  return arr;
}
