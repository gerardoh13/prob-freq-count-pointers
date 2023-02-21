// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    rightSum += arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    if (leftSum === rightSum) return j;
    leftSum += arr[j];
    if (arr[j + 2] === undefined) rightSum = 0;
    else rightSum -= arr[j + 1];
  }
  return -1;
}
