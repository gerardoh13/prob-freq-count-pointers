// add whatever parameters you deem necessary
function longestFall(arr) {
  if (!arr.length) return 0;
  let longest = 1;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      count++;
      if (i + 1 === arr.length && count > longest) longest = count;
    } else {
      if (count > longest) longest = count;
      count = 1;
    }
  }
  return longest;
}
