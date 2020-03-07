function capitalize(word) {
  if (word === undefined) throw new Error("word is required"); {
    // Add your code here!
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let VAT = (originalPrice / 100) * vatRate;
  let total = originalPrice + VAT;
  return Math.round(total * 100) / 100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let totalReduction = (originalPrice / 100) * reduction
  let finalPrice = originalPrice - totalReduction;
  return Math.round(finalPrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let index = (str.length / 2);
  if (str.length % 2 === 0) {
    return str.slice(index - 1, index + 1)
  }
  else {
    return str.slice(index, index + 1)
  }
}



function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let splitArray = word.split("")
  let reverseArray = splitArray.reverse();
  let joinArray = reverseArray.join("");
  return joinArray
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!var splitString = word.split("");
  let newArray = words.map(reverseWord)
  return newArray
}

function countLinuxUsers(users) {
  let sum = 0
  function addLinuxUser(user) {
    if (user.type === 'Linux') {
      sum++
    }
  }
  users.forEach(addLinuxUser);
  return sum;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let total = 0
  function addScore(score) {
    total += score;
  }

  scores.forEach(addScore)
  return Math.round(total / scores.length * 100) / 100;
}
function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  let isDivisibleBy5 = n % 5 === 0;
  let isDivisibleBy3 = n % 3 === 0;
  if (isDivisibleBy3 && isDivisibleBy5) {
    return 'fizzbuzz'
  }
  if (isDivisibleBy5) {
    return 'buzz'

  }
  if (isDivisibleBy3) {
    return 'fizz'
  }
  if (isDivisibleBy5) {
    return 'buzz'
  }
  else {
    return n
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};