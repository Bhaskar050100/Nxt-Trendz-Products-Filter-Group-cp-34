const getFactorialResult = require("../factorial/index");
const getRatioResult = require("../ratio/index");

let ratioAndFactorial = (num1, num2, num3) => {
  let ratio = getRatioResult(num1, num2);
  let factorial = getFactorialResult(num3);

  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
