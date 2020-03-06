const squareCode = function(message) {

  message = message.replace(/ /g, "");

  const width = Math.ceil(Math.sqrt(message.length));

  let i      = 0;
  let j      = 0;
  let result = "";

  for (i = 0; i < width; i++) {
    for (j = i; j < message.length; j += width) {
      result += message.substring(j, j + 1);
    }
    result += " ";
  }

  return result.trim();

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
