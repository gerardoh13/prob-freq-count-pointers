// add whatever parameters you deem necessary
function countPairs(arr, target) {
  let set = new Set(arr);
  let count = 0;
  for (let val of arr) {
    set.delete(val);
    if (set.has(target - val)) count++;
  }
  return count;
}
