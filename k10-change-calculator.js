let calculateChange = function(total, cash) {

  const denominations = [
    { name: "twentyDollar", value: 2000 },
    { name: "tenDollar",    value: 1000 },
    { name: "fiveDollar",   value:  500 },
    { name: "twoDollar",    value:  200 },
    { name: "oneDollar",    value:  100 },
    { name: "quarter",      value:   25 },
    { name: "dime",         value:   10 },
    { name: "nickel",       value:    5 },
    { name: "penny",        value:    1 }
  ];
  let change = cash - total;
  let result = {};
  let i      = 0;

  while (change > 0) {
    i = 0;
    while (change < denominations[i].value && i < denominations.length) {
      i++;
    }
    if (!result[denominations[i].name]) {
      result[denominations[i].name] = 1;
    } else {
      result[denominations[i].name]++;
    }
    change -= denominations[i].value;
  }

  return result;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
