function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const newArr = nums.filter(function(num) {
    // do something with item e.g.
    if (num < 1) {
      return true;
    } else {
      return false;
    }
  });
  return newArr
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const newArr = names.filter(function(name) {
    // do something with item e.g.
    if (name.charAt(0) === char) {
      return true;
    } else {
      return false;
    }
  });
  return newArr
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const newArr = words.filter(function(word) {
    // do something with item e.g.
    if (word.slice(0, 3) === 'to ') {
      return true;
    } else {
      return false;
    }
  });
  return newArr
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const newArr = nums.filter(function(num) {
    // do something with item e.g.
    if (num === Math.ceil(num)) {
      return true;
    } else {
      return false;
    }
  });
  return newArr
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const newArr = users.map(function(user) {
    return user.data.city. displayName
  })
  return newArr
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const newArr = nums.map(function(num) {
    return Math.round(Math.sqrt(num) * 100) / 100
      })
  return newArr
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const newArr = sentences.filter(function(sentence) {
    // do something with item e.g.
    if (sentence.toLowerCase().includes(str)) {
      return true;
    } else {
      return false;
    }
  });
  return newArr
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const newArr = triangles.map(function(triangle) {
    return Math.max(...triangle)
  })
  return newArr
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
