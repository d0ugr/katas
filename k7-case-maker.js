let camelCase = function(input)
{
  let result = "";

  input = input.trim();
  for (let i = 0; i < input.length; i++) {
    result += (input[i] === " " ? input[i++ + 1].toUpperCase().trim() : input[i]);
  }

  return result;
};

console.log(camelCase("this is a string"));
//console.log(camelCase("  this is a string   with extraneous spaces  "));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
