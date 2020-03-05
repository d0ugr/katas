let sumLargestNumbers = function(data)
{
  data.sort(function(e1, e2)
  {
    return e1 < e2;
  });
  return data[0] + data[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Test negative values:
//console.log(sumLargestNumbers([10, -4, 34, -6, 92, 2]));

// Test duplicate values:
//console.log(sumLargestNumbers([10, 10]));
//console.log(sumLargestNumbers([-11, 10, -34, -6, 10, 2]));
