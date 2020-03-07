function getSquares(nums) {

  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let newArray = nums.map(x => x * x);
  return newArray
}


function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let wordCount = ''
  words.forEach((word) => {
    if (wordCount === '') {
      wordCount = word.toLowerCase()
    }
    else {
      wordCount += word.charAt(0).toUpperCase() + word.slice(1);
    }
  })
  return wordCount
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let total = 0
  people.forEach(function (person) {
    total = person.subjects.length + total
  })
  return total
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  for (let i = 0; i < menu.length; i++) {
    let ingredients = menu[i].ingredients
    for (let j = 0; j < ingredients.length; j++) {
      if (ingredients[j] === ingredient) {
        return true
      }
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let arrayNew = []
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])){
arrayNew.push(arr1[i])
    }
  }
  return arrayNew.sort().filter(function (value, index) {
    return arrayNew.indexOf(value) === index;})
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
