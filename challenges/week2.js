function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  //loop through and array
    for (let i = 0; i < sandwich.lenght; i++ );
  //find filling
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
   // A bus can hold 40 people. This function should return how many buses are required for the number of people
count = 0
let oneBus = 40
if people =< oneBus
return 
  }

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
