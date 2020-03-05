const makeCase = function(input, format)
{
  const vowels = "aeiou";

  let i      = 0;
  let j      = 0;
  let result = "";

  input = input.trim();
//  if (typeof format !== "object") {
  if (Object.prototype.toString.call(format) !== "[object Array]") {
    format = [ format ];
  }

  // Handle precendence level "camel, pascal, snake, kebab, title":
  for (j = 0; j < format.length; j++) {
    result = "";
    switch (format[j]) {
      case "pascal":
        input = " " + input;
      case "camel":
        for (i = 0; i < input.length; i++) {
          result += (input[i] === " " ? input[i++ + 1].toUpperCase() : input[i]);
        }
        break;
      case "snake":
        for (i = 0; i < input.length; i++) {
          result += (input[i] === " " ? "_" : input[i]);
        }
        break;
      case "kebab":
        for (i = 0; i < input.length; i++) {
          result += (input[i] === " " ? "-" : input[i]);
        }
        break;
      case "title":
        result = input[0].toUpperCase();
        for (i = 1; i < input.length; i++) {
          result += (input[i] !== " " && input[i - 1] === " " ? input[i].toUpperCase() : input[i]);
        }
        break;
    }
    if (result !== "") {
      input = result;
    }
  }

  // Handle precendence level "vowel, consonant":
  for (j = 0; j < format.length; j++) {
    result = "";
    switch (format[j]) {
      case "vowel":
        for (i = 0; i < input.length; i++) {
          result += (vowels.indexOf(input[i]) !== -1 ? input[i].toUpperCase() : input[i]);
        }
        break;
      case "consonant":
        for (i = 0; i < input.length; i++) {
          result += (vowels.indexOf(input[i]) === -1 ? input[i].toUpperCase() : input[i]);
        }
        break;
    }
    if (result !== "") {
      input = result;
    }
  }

  // Handle precendence level "upper, lower":
  for (j = 0; j < format.length; j++) {
    switch (format[j]) {
      case "upper":
        input = input.toUpperCase();
        break;
      case "lower":
        input = input.toLowerCase();
        break;
    }
  }

  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*
console.log(makeCase("this is a string", ["title", "snake", "camel"]));
console.log(makeCase("this is a string", ["snake", "camel", "title"]));
console.log(makeCase("this is a string", ["title", "snake", "camel", "vowel"]));
console.log(makeCase("this is a string", ["snake", "camel", "title", "vowel"]));
console.log(makeCase("this is a string", ["upper", "snake", "camel"]));
console.log(makeCase("this is a string", ["upper", "camel", "snake"]));
console.log(makeCase("this is a string", ["upper", "camel", "snake", "lower"]));
*/
