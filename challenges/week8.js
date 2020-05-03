const findNextNumber = (nums, n) => {
  for (let i = 0; i < array.length; i++) {
    return array[i + 1]
  }

  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
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
  if ([arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]);
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
      for (let i = 0; i < haystack.length; i++){
     if (haystack[i] === searchTerm) {
       return true;
     }
   }
   return false;
   };


const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
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
