const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == n) {
      return nums[i + 1]
    }
  }
  return null;
  // Your code here!
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let countZero = 0;
  let countOne = 0;
  for (let i = 0, length = str.length; i < length; i++) {
    if (str[i] === '0') {
      countZero++;
    }
    else {
      countOne++;
    }
  }
  return {
    '0': countZero,
    '1': countOne
  };
}


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return Number(String(n).split("").reverse().join(""))
}



const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  return arrs.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b)
}

const arrShift = arr => {
  if (arr.length < 2) {
    return arr;
  }
  let first = arr.shift();
  let last = arr.pop();
  arr.push(first);
  arr.unshift(last);
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let searchTermLC = searchTerm.toLowerCase();
  for (let property in haystack){
    let value = String(haystack[property]);
    if (value.toLowerCase().indexOf(searchTermLC) !== -1) {
       return true;
    }
  }
  return false;
};


const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let frequencies = {};

  let words = str.split(" ");
  for (let i = 0; i < words.length; i += 1) {
    let word = words[i].toLowerCase();
    let stripped = word.replace(/[!,?]/g, '')
    if (!frequencies[stripped]) {
      frequencies[stripped] = 0;
    }
    frequencies[stripped]++;
  }
  return frequencies;
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
