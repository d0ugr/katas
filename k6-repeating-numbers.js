let repeatNumbers = function(data) {

  let result = "";

  for (let i = 0; i < data.length; i++) {
    if (result.length > 0) {
      result += ", ";
    }
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0].toString();
    }
  }

  return result;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
