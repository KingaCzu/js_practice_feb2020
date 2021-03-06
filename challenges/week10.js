/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
  sum += parseInt(n[i])
  }
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let newRange = [];
  for (let i = start; i <= end; i+ step) {
      newRange.push(i);
  }
  return newRange;
};


/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let alerts = [];
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let sumScreenTime = 0;
    for (let j = 0; j < user.screenTime.length; j++) {
      let screenTime = user.screenTime[j];
      if (screenTime.date === date) {
        let usage = screenTime.usage;
        for (let application in usage) {
          sumScreenTime += usage[application];
        }
      }
    }
    if (sumScreenTime > 100) {
      alerts.push(user.username)
    }
  }
  return alerts;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let numbers = [];
  for (let startIndex = 1; startIndex < hexStr.length; startIndex += 2) {
    numbers.push(hexStr.slice(startIndex, startIndex + 2));
  }
  return numbers.map(function (number) {
    let newNumber = parseInt(number, 16);
    if (isNaN(newNumber)) throw new Error("invalid hex number " + number);
    return newNumber;
  });
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
// horizontal
for (let row = 0; row < board.length; row++) {
  if (board[row].length !== 3) throw new Error("width of the board should be 3 colums in each row");
  let numX = 0;
  let num0 = 0;
  for (let col = 0; col < board[row].length; col++) {
    if (board[row][col] === "X") numX++;
    if (board[row][col] === "0") num0++;
  }
  if (numX === 3) return "X";
  if (num0 === 3) return "0";
}

// vertical 
for (let col = 0; col < board[0].length; col++) {
  let numX = 0;
  let num0 = 0;
  for (let row = 0; row < board.length; row++) {
    if (board[row][col] === "X") numX++;
    if (board[row][col] === "0") num0++;
  }
  if (numX === 3) return "X";
  if (num0 === 3) return "0";
}

// diagonal top-left to bottom right
let numX = 0;
let num0 = 0;
for (let row = 0; row < board.length; row++) {
  if (board[row][row] === "X") numX++;
  if (board[row][row] === "0") num0++;
}
if (numX === 3) return "X";
if (num0 === 3) return "0";

// diagonal top-left to bottom right
numX = 0;
num0 = 0;
for (let row = 0; row < board.length; row++) {
  if (board[row][2 - row] === "X") numX++;
  if (board[row][2 - row] === "0") num0++;
}
if (numX === 3) return "X";
if (num0 === 3) return "0";
return null;
};


module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
}

