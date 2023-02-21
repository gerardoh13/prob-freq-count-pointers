function freqCounter(str) {
    let obj = {};
    for (let char of str) {
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  }