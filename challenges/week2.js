function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
    return sandwich.fillings
  //return the filling
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let city = person.city
  if (city === "Manchester") {
    return true;
  }
  else {
    return false
  }
}


function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  // 1 bus can hold 40 people
  //return number of buses 
  let buses = Math.ceil(people / 40);
  //Check how many people
  return buses
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'sheep')
      count++
  }
  return count;
}

function hasMPostCode(person) {
  // Your code here!
  let checkPostCode = person.address.postCode
  if (checkPostCode.charAt(0) === 'M') {
    let secondCharacter = checkPostCode.charAt(1)
    if (secondCharacter >= '0' && secondCharacter <= '9') {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
