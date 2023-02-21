// add whatever parameters you deem necessary
function constructNote(ransomNote, magazine) {
  let freq1 = freqCounter(ransomNote);
  let freq2 = freqCounter(magazine);
  for (let key in freq1) {
    if (!freq2[key]) return false;
    if (freq1[key] > freq2[key]) return false;
  }
  return true;
}
