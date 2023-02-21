// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  let freq1 = freqCounter(str1);
  let freq2 = freqCounter(str2);
  for (let key in freq1) {
    if (!freq2[key]) return false;
    if (freq1[key] > freq2[key]) return false;
  }
  return true;
}
